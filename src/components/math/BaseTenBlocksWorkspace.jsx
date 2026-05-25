// BaseTenBlocksWorkspace — interactive base-ten block manipulative for ages 9-10.
// Supports: spawn, drag, delete, auto-regroup (10→1), break-apart, clear-all.
// Standalone — no parent props required. Designed mobile-first (pointer events).
//
// Optional props for lesson integration:
//   onChange(state)    — called whenever blocks change: { flats, rods, units, total, blocks }
//   initialState       — { flats, rods, units } OR [{id,type,x,y}] to preload blocks
//   readOnly           — if true: no spawn/drag/delete. Blocks are tappable via onBlockTap.
//   onBlockTap(block)  — called when kid taps a block (overrides break-apart dialog)
//   compact            — if true: renders blocks at 50% size for read-only display panels
import { useState, useEffect, useRef } from 'react';

// ── Base dimensions (full scale) ──────────────────────────────────────────────
const UNIT_S_BASE = 28;
const ROD_W_BASE  = 28;
const ROD_H_BASE  = 280;   // 10 × 28
const FLAT_S_BASE = 140;   // 10 × 14 cells

const VALUE = { unit: 1, rod: 10, flat: 100 };

let _id = 0;
const uid = () => `b${++_id}`;

// ── Auto-arrange spawn regions (full scale, compact=false only) ───────────────
// Flats: top-left, 2 per row.
// Rods: below flats, left side (y = FLAT_S_BASE + 16).
// Units: same y as rods but RIGHT side (x0=175) — always visible on mobile,
//        never overlaps rods because rods max out around x=140 for 9 rods at 34px each.
//        Ten-frame: 5 columns × 2 rows.
const FLAT_ZONE_Y  = 8;
const ROD_UNIT_Y   = FLAT_S_BASE + 16;  // 156 — below 1 flat row
const UNIT_X_START = 175;               // right lane; avoids overlapping rods

const SPAWN = {
  flat: { x0: 8,             y0: FLAT_ZONE_Y,  xStep: FLAT_S_BASE + 6, perRow: 2 },
  rod:  { x0: 8,             y0: ROD_UNIT_Y,   xStep: ROD_W_BASE  + 6, perRow: 9 },
  unit: { x0: UNIT_X_START,  y0: ROD_UNIT_Y,   xStep: UNIT_S_BASE + 4, perRow: 5 },
};

// flatCount: number of flats already on the workspace.
// For rods/units, Y is pushed below all flat rows so they never overlap.
// With 0 flats: rods/units at ROD_UNIT_Y = 156 (original position, backward-compat).
// With 1-2 flats (1 row): base Y = 8 + 1*(140+6)+8 = 162.
// With 3-4 flats (2 rows): base Y = 8 + 2*(140+6)+8 = 308.
function getSpawnPos(type, nth, flatCount = 0) {
  if (type === 'flat') {
    const col = nth % 2;
    const row = Math.floor(nth / 2);
    return { x: 8 + col * (FLAT_S_BASE + 6), y: FLAT_ZONE_Y + row * (FLAT_S_BASE + 6) };
  }

  // Rods and units: dynamically push below current flat rows
  const flatRows = Math.ceil(flatCount / 2); // 0 if no flats
  const baseY = flatCount === 0
    ? ROD_UNIT_Y   // 156 — same as before when there are no flats
    : FLAT_ZONE_Y + flatRows * (FLAT_S_BASE + 6) + 8;  // 8px gap below flats

  if (type === 'rod') {
    const col = nth % 9;
    const row = Math.floor(nth / 9);
    return { x: 8 + col * (ROD_W_BASE + 6), y: baseY + row * (ROD_H_BASE + 6) };
  }
  // unit
  const col = nth % 5;
  const row = Math.floor(nth / 5);
  return { x: UNIT_X_START + col * (UNIT_S_BASE + 4), y: baseY + row * (UNIT_S_BASE + 4) };
}

// ── Compact spawn positions (50% scale) ───────────────────────────────────────
// Used by both generateInitialBlocks(compact=true) and spawnBlock(compact=true)
// so pre-loaded and manually-spawned blocks share the same layout logic.
//
// Layout:
//   Flats:  2-column grid, top-left
//   Rods:   right of flat columns, same top row
//   Units:  below flat rows (or below rods if no flats)
const COMPACT_US  = Math.round(UNIT_S_BASE * 0.5); // 14
const COMPACT_RW  = Math.round(ROD_W_BASE  * 0.5); // 14
const COMPACT_RH  = Math.round(ROD_H_BASE  * 0.5); // 140
const COMPACT_FS  = Math.round(FLAT_S_BASE * 0.5); // 70
const COMPACT_GAP = 3;

// Layout: three side-by-side columns — flats | rods | units
// Units are placed to the RIGHT of both flats and rods so they never
// overlap or hide behind blocks of other types.
function getCompactPos(type, nth, { flats = 0, rods = 0 }) {
  const FS = COMPACT_FS, RW = COMPACT_RW, US = COMPACT_US, GAP = COMPACT_GAP;

  if (type === 'flat') {
    // 2-column grid for flats (top-left)
    const col = nth % 2;
    const row = Math.floor(nth / 2);
    return { x: GAP + col * (FS + GAP), y: GAP + row * (FS + GAP) };
  }

  // Rods: right of flat columns (1 or 2 cols depending on count)
  const flatCols = flats > 0 ? Math.min(flats, 2) : 0;
  const rodColX  = GAP + flatCols * (FS + GAP);
  if (type === 'rod') {
    return { x: rodColX + nth * (RW + GAP), y: GAP };
  }

  // Units: right of rods (or right of flats if no rods) — never overlaps anything
  const unitColX = rodColX + (rods > 0 ? rods * (RW + GAP) : 0);
  const col = nth % 4;
  const row = Math.floor(nth / 4);
  return { x: unitColX + col * (US + GAP), y: GAP + row * (US + GAP) };
}

// ── Generate initial block layout from a count spec ───────────────────────────
// Non-compact: reuses the same SPAWN regions as user-spawned blocks.
// Compact: uses getCompactPos so pre-loaded and spawned blocks share one layout.
function generateInitialBlocks(spec, compact) {
  if (!compact) {
    const blocks = [];
    const flatCount = spec.flats || 0;
    for (let i = 0; i < flatCount; i++) {
      blocks.push({ id: uid(), type: 'flat', ...getSpawnPos('flat', i, 0) });
    }
    for (let i = 0; i < (spec.rods || 0); i++) {
      blocks.push({ id: uid(), type: 'rod', ...getSpawnPos('rod', i, flatCount) });
    }
    for (let i = 0; i < (spec.units || 0); i++) {
      blocks.push({ id: uid(), type: 'unit', ...getSpawnPos('unit', i, flatCount) });
    }
    return blocks;
  }

  // Compact layout — delegate to getCompactPos for consistency with spawnBlock
  const flatCount = spec.flats || 0;
  const rodCount  = spec.rods  || 0;
  const blocks = [];
  for (let i = 0; i < flatCount; i++) {
    blocks.push({ id: uid(), type: 'flat', ...getCompactPos('flat', i, { flats: 0,         rods: 0        }) });
  }
  for (let i = 0; i < rodCount; i++) {
    blocks.push({ id: uid(), type: 'rod',  ...getCompactPos('rod',  i, { flats: flatCount,  rods: 0        }) });
  }
  for (let i = 0; i < (spec.units || 0); i++) {
    blocks.push({ id: uid(), type: 'unit', ...getCompactPos('unit', i, { flats: flatCount,  rods: rodCount }) });
  }
  return blocks;
}

// ── SVG Block Renderers (scale-aware) ─────────────────────────────────────────
function UnitSVG({ s }) {
  return (
    <svg width={s} height={s} style={{ display: 'block' }}>
      <rect x={1} y={1} width={s - 2} height={s - 2}
        fill="#60A5FA" stroke="#2563EB" strokeWidth={1.5} rx={4} />
    </svg>
  );
}

function RodSVG({ w, h, segs = 10 }) {
  const segH = h / segs;
  return (
    <svg width={w} height={h} style={{ display: 'block' }}>
      <rect x={1} y={1} width={w - 2} height={h - 2}
        fill="#34D399" stroke="#10B981" strokeWidth={1.5} rx={4} />
      {Array.from({ length: segs - 1 }, (_, i) => (
        <line key={i} x1={2} y1={(i + 1) * segH} x2={w - 2} y2={(i + 1) * segH}
          stroke="#059669" strokeWidth={1} />
      ))}
    </svg>
  );
}

function FlatSVG({ s, cells = 10 }) {
  const cell = s / cells;
  return (
    <svg width={s} height={s} style={{ display: 'block' }}>
      <rect x={1} y={1} width={s - 2} height={s - 2}
        fill="#FBBF24" stroke="#D97706" strokeWidth={1.5} rx={4} />
      {Array.from({ length: cells - 1 }, (_, i) => (
        <line key={`h${i}`} x1={2} y1={(i + 1) * cell} x2={s - 2} y2={(i + 1) * cell}
          stroke="#B45309" strokeWidth={0.7} />
      ))}
      {Array.from({ length: cells - 1 }, (_, i) => (
        <line key={`v${i}`} x1={(i + 1) * cell} y1={2} x2={(i + 1) * cell} y2={s - 2}
          stroke="#B45309" strokeWidth={0.7} />
      ))}
    </svg>
  );
}

// Small previews for the palette buttons (always full-ish scale)
function PalettePreview({ type }) {
  if (type === 'unit') return <UnitSVG s={26} />;
  if (type === 'rod')  return <RodSVG w={14} h={52} segs={5} />;
  if (type === 'flat') return <FlatSVG s={40} cells={5} />;
  return null;
}

const PALETTE = [
  { type: 'unit', label: 'Unit',  value: 1   },
  { type: 'rod',  label: 'Rod',   value: 10  },
  { type: 'flat', label: 'Flat',  value: 100 },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function BaseTenBlocksWorkspace({
  onChange,
  initialState,
  readOnly = false,
  onBlockTap,
  compact = false,
  hideCounter = false,  // hides the numeric total (prevents giving away quiz answers)
}) {
  // ── Scale-derived dimensions ───────────────────────────────────────────────
  const SC = compact ? 0.5 : 1.0;
  const UNIT_S = Math.round(UNIT_S_BASE * SC);
  const ROD_W  = Math.round(ROD_W_BASE  * SC);
  const ROD_H  = Math.round(ROD_H_BASE  * SC);
  const FLAT_S = Math.round(FLAT_S_BASE * SC);

  const DIMS = {
    unit: { w: UNIT_S, h: UNIT_S },
    rod:  { w: ROD_W,  h: ROD_H  },
    flat: { w: FLAT_S, h: FLAT_S },
  };

  // ── State ──────────────────────────────────────────────────────────────────
  const [blocks, setBlocks] = useState(() => {
    if (Array.isArray(initialState)) {
      return initialState.map(b => ({ ...b, id: b.id || uid() }));
    }
    if (initialState && typeof initialState === 'object') {
      return generateInitialBlocks(initialState, compact);
    }
    return [];
  });

  const [dissolvingIds,  setDissolvingIds]  = useState(new Set());
  const [bouncingId,     setBouncingId]     = useState(null);
  const [draggingId,     setDraggingId]     = useState(null);
  const [splitTarget,    setSplitTarget]    = useState(null);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  // Which block is highlighted (for tap-identify feedback)
  const [highlightId, setHighlightId] = useState(null);

  const workspaceRef     = useRef(null);
  const isRegroupingRef  = useRef(false);
  const dissolvingIdsRef = useRef(new Set());
  const dragRef          = useRef(null);

  // ── Total ──────────────────────────────────────────────────────────────────
  const total = blocks.reduce((sum, b) => sum + (VALUE[b.type] || 0), 0);

  // ── onChange callback ──────────────────────────────────────────────────────
  useEffect(() => {
    if (!onChange) return;
    const flats = blocks.filter(b => b.type === 'flat').length;
    const rods  = blocks.filter(b => b.type === 'rod').length;
    const units = blocks.filter(b => b.type === 'unit').length;
    onChange({ flats, rods, units, total, blocks });
  }, [blocks, onChange]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Spawn (disabled in readOnly) ───────────────────────────────────────────
  // Each block type spawns into its assigned region so blocks never pile up.
  // nth = how many of this type already exist → determines grid position.
  function spawnBlock(type) {
    if (readOnly) return;
    setBlocks(prev => {
      const active = prev.filter(b => !dissolvingIdsRef.current.has(b.id));
      const nth       = active.filter(b => b.type === type).length;
      const flatCount = active.filter(b => b.type === 'flat').length;
      const rodCount  = active.filter(b => b.type === 'rod').length;
      const pos = compact
        ? getCompactPos(type, nth, { flats: flatCount, rods: rodCount })
        : getSpawnPos(type, nth, flatCount);
      return [...prev, { id: uid(), type, x: pos.x, y: pos.y }];
    });
  }

  // ── Auto-regroup ───────────────────────────────────────────────────────────
  useEffect(() => {
    if (isRegroupingRef.current) return;

    const currentDissolvingIds = dissolvingIdsRef.current;
    const active = blocks.filter(b => !currentDissolvingIds.has(b.id));
    const units  = active.filter(b => b.type === 'unit');
    const rods   = active.filter(b => b.type === 'rod');

    let fromBlocks = null, toType = null;
    if (units.length >= 10)     { fromBlocks = units.slice(0, 10); toType = 'rod'; }
    else if (rods.length >= 10) { fromBlocks = rods.slice(0, 10);  toType = 'flat'; }
    if (!fromBlocks) return;

    isRegroupingRef.current = true;
    const targetIds = new Set(fromBlocks.map(b => b.id));
    const avgX = fromBlocks.reduce((s, b) => s + b.x, 0) / 10;
    const avgY = fromBlocks.reduce((s, b) => s + b.y, 0) / 10;

    dissolvingIdsRef.current = targetIds;
    setDissolvingIds(new Set(targetIds));

    setTimeout(() => {
      const newId = uid();
      const { w: nw } = DIMS[toType];
      setBlocks(prev => [
        ...prev.filter(b => !targetIds.has(b.id)),
        { id: newId, type: toType, x: Math.max(8, avgX - nw / 2), y: Math.max(8, avgY) },
      ]);
      dissolvingIdsRef.current = new Set();
      setDissolvingIds(new Set());
      setBouncingId(newId);

      setTimeout(() => {
        setBouncingId(null);
        isRegroupingRef.current = false;
      }, 520);
    }, 340);
  }, [blocks]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Drag ───────────────────────────────────────────────────────────────────
  function handlePointerDown(e, id, type) {
    e.stopPropagation();
    if (readOnly || dissolvingIdsRef.current.has(id)) return;
    const block = blocks.find(b => b.id === id);
    if (!block) return;
    dragRef.current = {
      id, type,
      startPX: e.clientX, startPY: e.clientY,
      startBX: block.x,   startBY: block.y,
      hasMoved: false,
    };
    setDraggingId(id);
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e, id) {
    const d = dragRef.current;
    if (!d || d.id !== id) return;
    const dx = e.clientX - d.startPX;
    const dy = e.clientY - d.startPY;
    if (!d.hasMoved && (Math.abs(dx) > 4 || Math.abs(dy) > 4)) d.hasMoved = true;
    if (!d.hasMoved) return;

    const ws = workspaceRef.current;
    const { w: bw, h: bh } = DIMS[d.type];
    const maxX = ws ? ws.clientWidth  - bw - 4 : 9999;
    const maxY = ws ? ws.clientHeight - bh - 4 : 9999;

    setBlocks(prev => prev.map(b =>
      b.id === id
        ? { ...b, x: Math.max(0, Math.min(d.startBX + dx, maxX)), y: Math.max(0, Math.min(d.startBY + dy, maxY)) }
        : b
    ));
  }

  function handlePointerUp(e, id) {
    const d = dragRef.current;
    const wasD = !!d && d.id === id;
    const wasTap = wasD ? !d.hasMoved : false;
    if (wasD) { dragRef.current = null; setDraggingId(null); }

    if (wasTap || (readOnly && !wasD)) {
      // In readOnly mode or when a tap (not drag) occurred
      const block = blocks.find(b => b.id === id);
      if (!block) return;

      if (onBlockTap) {
        // Parent handles the tap (e.g., Applied Problem 1 "tap the flat")
        setHighlightId(id);
        setTimeout(() => setHighlightId(null), 600);
        onBlockTap(block);
      } else if (!readOnly && (block.type === 'rod' || block.type === 'flat')) {
        // Default: show split dialog
        setSplitTarget(block);
      }
    }
  }

  // ── Delete ─────────────────────────────────────────────────────────────────
  function deleteBlock(id) {
    setBlocks(prev => prev.filter(b => b.id !== id));
  }

  // ── Split ──────────────────────────────────────────────────────────────────
  function confirmSplit() {
    if (!splitTarget) return;
    const { id, type, x, y } = splitTarget;
    setSplitTarget(null);

    const childType = type === 'rod' ? 'unit' : 'rod';
    const { w: cw, h: ch } = DIMS[childType];

    const children = Array.from({ length: 10 }, (_, i) => ({
      id: uid(),
      type: childType,
      x: childType === 'rod'  ? x + i * (cw + 4) : x,
      y: childType === 'unit' ? y + i * (ch + 3) : y,
    }));

    setBlocks(prev => [...prev.filter(b => b.id !== id), ...children]);
  }

  // ── Clear ──────────────────────────────────────────────────────────────────
  function confirmClear() {
    setBlocks([]);
    dissolvingIdsRef.current = new Set();
    setDissolvingIds(new Set());
    setBouncingId(null);
    setDraggingId(null);
    setSplitTarget(null);
    setShowClearConfirm(false);
    isRegroupingRef.current = false;
    dragRef.current = null;
  }

  // ── Block count breakdown ──────────────────────────────────────────────────
  const flatsCount = blocks.filter(b => b.type === 'flat').length;
  const rodsCount  = blocks.filter(b => b.type === 'rod').length;
  const unitsCount = blocks.filter(b => b.type === 'unit').length;
  const breakdown = [
    flatsCount && `${flatsCount} flat${flatsCount > 1 ? 's' : ''}`,
    rodsCount  && `${rodsCount}  rod${rodsCount  > 1 ? 's' : ''}`,
    unitsCount && `${unitsCount} unit${unitsCount > 1 ? 's' : ''}`,
  ].filter(Boolean).join('  ·  ');

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', height: '100%',
      background: '#080618', color: '#fff',
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
      userSelect: 'none', WebkitUserSelect: 'none', overflow: 'hidden',
    }}>
      <style>{`
        @keyframes blockDissolve {
          0%   { transform: scale(1) rotate(0deg);    opacity: 1; }
          100% { transform: scale(0.05) rotate(25deg); opacity: 0; }
        }
        @keyframes blockBounce {
          0%   { transform: scale(0.15) rotate(-10deg); opacity: 0; }
          55%  { transform: scale(1.18) rotate(4deg);   opacity: 1; }
          78%  { transform: scale(0.93) rotate(-2deg); }
          100% { transform: scale(1)    rotate(0deg); }
        }
        @keyframes blockHighlight {
          0%,100% { box-shadow: 0 0 0 0px rgba(196,181,253,0); }
          40%      { box-shadow: 0 0 0 8px rgba(196,181,253,0.5); }
        }
      `}</style>

      {/* ── Counter ────────────────────────────────────────────────────────── */}
      {!hideCounter && (
        <div style={{ textAlign: 'center', padding: compact ? '8px 0 4px' : '18px 0 6px', flexShrink: 0 }}>
          <div style={{
            fontSize: compact ? '2rem' : 'clamp(3rem, 14vw, 5rem)',
            fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1, color: '#fff',
          }}>
            {total}
          </div>
          {!compact && (
            <>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>
                Your Number
              </div>
              <div style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.5)', marginTop: 6, letterSpacing: '0.01em', minHeight: '1.1em', fontWeight: 500 }}>
                {breakdown || 'Add blocks below ↓'}
              </div>
            </>
          )}
        </div>
      )}

      {/* ── Workspace ──────────────────────────────────────────────────────── */}
      <div
        ref={workspaceRef}
        style={{
          flex: 1, position: 'relative',
          margin: compact ? '4px 8px' : '8px 12px',
          borderRadius: 16,
          background: 'rgba(255,255,255,0.025)',
          border: `1.5px solid rgba(255,255,255,${readOnly ? '0.05' : '0.07'})`,
          backgroundImage: readOnly ? 'none' : 'radial-gradient(circle, rgba(255,255,255,0.11) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          overflow: 'hidden',
          touchAction: 'none',
        }}
      >
        {/* Clear button — hidden in readOnly */}
        {!readOnly && (
          <button
            onClick={() => blocks.length > 0 && setShowClearConfirm(true)}
            style={{
              position: 'absolute', top: 10, right: 10, zIndex: 20,
              padding: '5px 13px', borderRadius: 20,
              border: '1.5px solid rgba(255,255,255,0.13)',
              background: 'rgba(8,6,24,0.72)', color: 'rgba(255,255,255,0.5)',
              fontSize: '0.74rem', fontWeight: 600, cursor: 'pointer',
              backdropFilter: 'blur(8px)',
              opacity: blocks.length > 0 ? 1 : 0.25, transition: 'opacity 0.2s',
            }}
          >
            Clear
          </button>
        )}

        {/* Regroup hint (non-compact, non-readOnly, 8-9 units) */}
        {!compact && !readOnly && (unitsCount === 8 || unitsCount === 9) && !isRegroupingRef.current && (
          <div style={{
            position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
            background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)',
            borderRadius: 20, padding: '4px 14px',
            color: '#34D399', fontSize: '0.73rem', fontWeight: 600,
            pointerEvents: 'none', whiteSpace: 'nowrap', zIndex: 5,
          }}>
            {10 - unitsCount} more unit{10 - unitsCount !== 1 ? 's' : ''} → auto-group!
          </div>
        )}

        {/* Blocks */}
        {blocks.map(block => {
          const isDissolving = dissolvingIds.has(block.id);
          const isBouncing   = bouncingId === block.id;
          const isDragging   = draggingId === block.id;
          const isHighlit    = highlightId === block.id;
          const { w: bw, h: bh } = DIMS[block.type];

          return (
            <div
              key={block.id}
              style={{
                position: 'absolute',
                left: block.x, top: block.y,
                width: bw, height: bh,
                touchAction: 'none',
                cursor:  readOnly ? (onBlockTap ? 'pointer' : 'default') : (isDragging ? 'grabbing' : 'grab'),
                zIndex:  isDragging ? 100 : 2,
                transformOrigin: 'center center',
                animation: isDissolving ? 'blockDissolve 340ms ease-in forwards'
                          : isBouncing  ? 'blockBounce 520ms cubic-bezier(0.34,1.56,0.64,1) forwards'
                          : isHighlit   ? 'blockHighlight 600ms ease-out'
                          : undefined,
                borderRadius: 6,
              }}
              onPointerDown={e => readOnly ? e.stopPropagation() : handlePointerDown(e, block.id, block.type)}
              onPointerMove={e => handlePointerMove(e, block.id)}
              onPointerUp={e => {
                if (readOnly) {
                  e.stopPropagation();
                  handlePointerUp(e, block.id);
                } else {
                  handlePointerUp(e, block.id);
                }
              }}
            >
              {block.type === 'unit' && <UnitSVG s={UNIT_S} />}
              {block.type === 'rod'  && <RodSVG  w={ROD_W} h={ROD_H} />}
              {block.type === 'flat' && <FlatSVG s={FLAT_S} />}

              {/* Delete button — hidden in readOnly or compact */}
              {!isDissolving && !readOnly && !compact && (
                <button
                  onPointerDown={e => e.stopPropagation()}
                  onClick={e => { e.stopPropagation(); deleteBlock(block.id); }}
                  style={{
                    position: 'absolute', top: -9, right: -9,
                    width: 20, height: 20, borderRadius: '50%',
                    border: '1.5px solid rgba(255,255,255,0.25)',
                    background: '#1a0a2e', color: 'rgba(255,255,255,0.6)',
                    fontSize: '0.82rem', fontWeight: 800,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', lineHeight: 1, padding: 0, margin: 0,
                    zIndex: 10, boxShadow: '0 1px 6px rgba(0,0,0,0.5)',
                  }}
                  aria-label="Delete block"
                >
                  ×
                </button>
              )}
            </div>
          );
        })}

        {/* Empty state hint (non-readOnly, non-compact only) */}
        {!readOnly && !compact && blocks.length === 0 && (
          <div style={{
            position: 'absolute', inset: 0, display: 'flex',
            alignItems: 'center', justifyContent: 'center', pointerEvents: 'none',
          }}>
            <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.18)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: 8 }}>📦</div>
              <div style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.04em' }}>
                Tap a block below to add it
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── Palette — hidden in readOnly ────────────────────────────────────── */}
      {!readOnly && (
        <div style={{
          display: 'flex', gap: 10,
          padding: compact ? '6px 8px 10px' : '10px 12px 20px',
          flexShrink: 0, justifyContent: 'center',
        }}>
          {PALETTE.map(({ type, label, value }) => (
            <button
              key={type}
              onClick={() => spawnBlock(type)}
              style={{
                flex: 1, maxWidth: 116, minHeight: compact ? 56 : 74,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 7,
                background: 'rgba(255,255,255,0.05)',
                border: '1.5px solid rgba(255,255,255,0.1)',
                borderRadius: 14, cursor: 'pointer',
                touchAction: 'manipulation', padding: '10px 6px',
                WebkitTapHighlightColor: 'transparent',
              }}
              onPointerDown={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
                e.currentTarget.style.transform = 'scale(0.96)';
              }}
              onPointerUp={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              onPointerLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <PalettePreview type={type} />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.83rem' }}>{label}</span>
                <span style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', fontWeight: 600 }}>+{value}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* ── Break-apart dialog ─────────────────────────────────────────────── */}
      {splitTarget && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 300,
            background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
          }}
          onClick={() => setSplitTarget(null)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#14082b', border: '1.5px solid rgba(255,255,255,0.13)',
              borderRadius: 22, padding: '32px 24px',
              maxWidth: 320, width: '100%', textAlign: 'center',
              boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
            }}
          >
            <div style={{ fontSize: '2.4rem', marginBottom: 14, lineHeight: 1 }}>
              {splitTarget.type === 'rod' ? '🟩' : '🟨'}
            </div>
            <div style={{ fontWeight: 800, fontSize: '1.15rem', marginBottom: 8, color: '#fff' }}>
              Break apart this {splitTarget.type}?
            </div>
            <div style={{ color: 'rgba(255,255,255,0.52)', fontSize: '0.92rem', marginBottom: 28, lineHeight: 1.55 }}>
              {splitTarget.type === 'rod'
                ? 'Turn 1 rod (10) into 10 individual units (1s)'
                : 'Turn 1 flat (100) into 10 individual rods (10s)'}
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button
                onClick={() => setSplitTarget(null)}
                style={{ flex: 1, padding: '13px', borderRadius: 13, border: '1.5px solid rgba(255,255,255,0.18)', background: 'transparent', color: 'rgba(255,255,255,0.58)', fontWeight: 600, fontSize: '0.92rem', cursor: 'pointer', touchAction: 'manipulation' }}
              >
                Cancel
              </button>
              <button
                onClick={confirmSplit}
                style={{ flex: 1, padding: '13px', borderRadius: 13, border: 'none', background: splitTarget.type === 'rod' ? '#34D399' : '#FBBF24', color: '#000', fontWeight: 800, fontSize: '0.92rem', cursor: 'pointer', touchAction: 'manipulation' }}
              >
                Yes, split!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Clear-all confirmation ──────────────────────────────────────────── */}
      {showClearConfirm && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 300,
            background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
          }}
          onClick={() => setShowClearConfirm(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#14082b', border: '1.5px solid rgba(255,255,255,0.13)',
              borderRadius: 22, padding: '32px 24px',
              maxWidth: 300, width: '100%', textAlign: 'center',
              boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
            }}
          >
            <div style={{ fontWeight: 800, fontSize: '1.15rem', marginBottom: 8, color: '#fff' }}>
              Clear everything?
            </div>
            <div style={{ color: 'rgba(255,255,255,0.48)', fontSize: '0.9rem', marginBottom: 28 }}>
              All {blocks.length} block{blocks.length !== 1 ? 's' : ''} will be removed.
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button
                onClick={() => setShowClearConfirm(false)}
                style={{ flex: 1, padding: '13px', borderRadius: 13, border: '1.5px solid rgba(255,255,255,0.18)', background: 'transparent', color: 'rgba(255,255,255,0.58)', fontWeight: 600, fontSize: '0.92rem', cursor: 'pointer', touchAction: 'manipulation' }}
              >
                Cancel
              </button>
              <button
                onClick={confirmClear}
                style={{ flex: 1, padding: '13px', borderRadius: 13, border: 'none', background: '#EF4444', color: '#fff', fontWeight: 800, fontSize: '0.92rem', cursor: 'pointer', touchAction: 'manipulation' }}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
