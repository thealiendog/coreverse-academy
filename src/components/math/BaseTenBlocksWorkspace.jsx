// BaseTenBlocksWorkspace — interactive base-ten block manipulative for ages 9-10.
// Supports: spawn, drag, delete, auto-regroup (10→1), break-apart, clear-all.
// Standalone — no parent props required. Designed mobile-first (pointer events).
import { useState, useEffect, useRef } from 'react';

// ── Dimensions (px) ───────────────────────────────────────────────────────────
const UNIT_S = 28;
const ROD_W  = 28;
const ROD_H  = 280;   // 10 × 28
const FLAT_S = 140;   // 10 × 14 cells

const DIMS = {
  unit: { w: UNIT_S, h: UNIT_S },
  rod:  { w: ROD_W,  h: ROD_H  },
  flat: { w: FLAT_S, h: FLAT_S },
};
const VALUE = { unit: 1, rod: 10, flat: 100 };

let _id = 0;
const uid = () => `b${++_id}`;

// ── SVG Block Renderers ───────────────────────────────────────────────────────
function UnitSVG({ s = UNIT_S }) {
  return (
    <svg width={s} height={s} style={{ display: 'block' }}>
      <rect x={1} y={1} width={s - 2} height={s - 2}
        fill="#60A5FA" stroke="#2563EB" strokeWidth={1.5} rx={4} />
    </svg>
  );
}

function RodSVG({ w = ROD_W, h = ROD_H, segs = 10 }) {
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

function FlatSVG({ s = FLAT_S, cells = 10 }) {
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

// Small previews for the palette buttons
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
export default function BaseTenBlocksWorkspace() {
  // blocks: { id, type, x, y }
  const [blocks, setBlocks] = useState([]);
  // IDs currently in the dissolve animation (phase 1 of regroup)
  const [dissolvingIds, setDissolvingIds] = useState(new Set());
  // ID of the newly spawned block getting the bounce-in animation
  const [bouncingId, setBouncingId] = useState(null);
  // ID of the block currently being dragged (for cursor + z-index)
  const [draggingId, setDraggingId] = useState(null);
  // Block tapped for break-apart dialog
  const [splitTarget, setSplitTarget] = useState(null);
  // Clear-all confirmation dialog
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  const workspaceRef    = useRef(null);
  const isRegroupingRef = useRef(false);
  // Ref copy of dissolving IDs so the effect closure sees current value
  const dissolvingIdsRef = useRef(new Set());
  // Drag state: { id, type, startPX, startPY, startBX, startBY, hasMoved }
  const dragRef = useRef(null);

  // ── Total ──────────────────────────────────────────────────────────────────
  const total = blocks.reduce((sum, b) => sum + (VALUE[b.type] || 0), 0);

  // ── Spawn ──────────────────────────────────────────────────────────────────
  function spawnBlock(type) {
    setBlocks(prev => [
      ...prev,
      { id: uid(), type, x: 24 + Math.random() * 56, y: 24 + Math.random() * 56 },
    ]);
  }

  // ── Auto-regroup ───────────────────────────────────────────────────────────
  // Triggers whenever blocks array changes.
  // Phase 1 (320ms): dissolve animation on the 10 source blocks.
  // Phase 2 (500ms): new block bounces in at their average position.
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

    // Phase 2: after dissolve CSS completes
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

      // Clear bounce flag + unlock after animation finishes
      setTimeout(() => {
        setBouncingId(null);
        isRegroupingRef.current = false;
      }, 520);
    }, 340);
  }, [blocks]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Drag ───────────────────────────────────────────────────────────────────
  function handlePointerDown(e, id, type) {
    e.stopPropagation();
    if (dissolvingIdsRef.current.has(id)) return;
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
    if (!d || d.id !== id) return;
    const wasTap = !d.hasMoved;
    dragRef.current = null;
    setDraggingId(null);

    if (wasTap) {
      const block = blocks.find(b => b.id === id);
      if (block && (block.type === 'rod' || block.type === 'flat')) {
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

    // Lay children out in a column (rod → units) or row (flat → rods)
    const children = Array.from({ length: 10 }, (_, i) => ({
      id: uid(),
      type: childType,
      // units stack vertically under the rod position; rods lay horizontally
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
  const flats = blocks.filter(b => b.type === 'flat').length;
  const rods  = blocks.filter(b => b.type === 'rod').length;
  const units = blocks.filter(b => b.type === 'unit').length;
  const breakdown = [
    flats && `${flats} flat${flats > 1 ? 's' : ''}`,
    rods  && `${rods}  rod${rods  > 1 ? 's' : ''}`,
    units && `${units} unit${units > 1 ? 's' : ''}`,
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
          0%   { transform: scale(1) rotate(0deg);   opacity: 1; }
          100% { transform: scale(0.05) rotate(25deg); opacity: 0; }
        }
        @keyframes blockBounce {
          0%   { transform: scale(0.15) rotate(-10deg); opacity: 0; }
          55%  { transform: scale(1.18) rotate(4deg);   opacity: 1; }
          78%  { transform: scale(0.93) rotate(-2deg); }
          100% { transform: scale(1)    rotate(0deg); }
        }
        @keyframes flashRing {
          0%, 100% { box-shadow: 0 0 0 0px rgba(255,255,255,0); }
          50%       { box-shadow: 0 0 0 8px rgba(255,255,255,0.35); }
        }
      `}</style>

      {/* ── Counter ────────────────────────────────────────────────────────── */}
      <div style={{ textAlign: 'center', padding: '18px 0 6px', flexShrink: 0 }}>
        <div style={{
          fontSize: 'clamp(3rem, 14vw, 5rem)', fontWeight: 800,
          letterSpacing: '-0.04em', lineHeight: 1, color: '#fff',
          transition: 'color 0.12s',
        }}>
          {total}
        </div>
        <div style={{
          fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em',
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginTop: 4,
        }}>
          Your Number
        </div>
        <div style={{
          fontSize: '0.8rem', color: 'rgba(255,255,255,0.38)', marginTop: 5,
          letterSpacing: '0.02em', minHeight: '1.1em',
        }}>
          {breakdown || 'Add blocks below ↓'}
        </div>
      </div>

      {/* ── Workspace ──────────────────────────────────────────────────────── */}
      <div
        ref={workspaceRef}
        style={{
          flex: 1, position: 'relative',
          margin: '8px 12px',
          borderRadius: 16,
          background: 'rgba(255,255,255,0.025)',
          border: '1.5px solid rgba(255,255,255,0.07)',
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.11) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          overflow: 'hidden',
          touchAction: 'none',
        }}
      >
        {/* Clear button */}
        <button
          onClick={() => blocks.length > 0 && setShowClearConfirm(true)}
          style={{
            position: 'absolute', top: 10, right: 10, zIndex: 20,
            padding: '5px 13px', borderRadius: 20,
            border: '1.5px solid rgba(255,255,255,0.13)',
            background: 'rgba(8,6,24,0.72)', color: 'rgba(255,255,255,0.5)',
            fontSize: '0.74rem', fontWeight: 600, cursor: 'pointer',
            backdropFilter: 'blur(8px)',
            opacity: blocks.length > 0 ? 1 : 0.25,
            transition: 'opacity 0.2s',
          }}
        >
          Clear
        </button>

        {/* Regroup hint — shown briefly when 8-9 units are present */}
        {units + rods * 10 + flats * 100 > 0 && (units === 8 || units === 9) && !isRegroupingRef.current && (
          <div style={{
            position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
            background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)',
            borderRadius: 20, padding: '4px 14px',
            color: '#34D399', fontSize: '0.73rem', fontWeight: 600,
            pointerEvents: 'none', whiteSpace: 'nowrap', zIndex: 5,
          }}>
            {10 - units} more unit{10 - units !== 1 ? 's' : ''} → auto-group!
          </div>
        )}

        {/* Blocks */}
        {blocks.map(block => {
          const isDissolving = dissolvingIds.has(block.id);
          const isBouncing   = bouncingId === block.id;
          const isDragging   = draggingId === block.id;
          return (
            <div
              key={block.id}
              style={{
                position: 'absolute',
                left: block.x, top: block.y,
                width:  DIMS[block.type].w,
                height: DIMS[block.type].h,
                touchAction: 'none',
                cursor:  isDragging ? 'grabbing' : 'grab',
                zIndex:  isDragging ? 100 : 2,
                transformOrigin: 'center center',
                animation: isDissolving ? 'blockDissolve 340ms ease-in forwards'
                          : isBouncing  ? 'blockBounce 520ms cubic-bezier(0.34,1.56,0.64,1) forwards'
                          : undefined,
                borderRadius: 6,
              }}
              onPointerDown={e => handlePointerDown(e, block.id, block.type)}
              onPointerMove={e => handlePointerMove(e, block.id)}
              onPointerUp={e => handlePointerUp(e, block.id)}
            >
              {block.type === 'unit' && <UnitSVG />}
              {block.type === 'rod'  && <RodSVG />}
              {block.type === 'flat' && <FlatSVG />}

              {/* Delete button — sits in top-right corner */}
              {!isDissolving && (
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

        {/* Empty state hint */}
        {blocks.length === 0 && (
          <div style={{
            position: 'absolute', inset: 0, display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            pointerEvents: 'none',
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

      {/* ── Palette ────────────────────────────────────────────────────────── */}
      <div style={{
        display: 'flex', gap: 10,
        padding: '10px 12px 20px',
        flexShrink: 0, justifyContent: 'center',
      }}>
        {PALETTE.map(({ type, label, value }) => (
          <button
            key={type}
            onClick={() => spawnBlock(type)}
            style={{
              flex: 1, maxWidth: 116, minHeight: 74,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 7,
              background: 'rgba(255,255,255,0.05)',
              border: '1.5px solid rgba(255,255,255,0.1)',
              borderRadius: 14, cursor: 'pointer',
              touchAction: 'manipulation',
              padding: '10px 6px',
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
              <span style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.7rem' }}>+{value}</span>
            </div>
          </button>
        ))}
      </div>

      {/* ── Break-apart dialog ─────────────────────────────────────────────── */}
      {splitTarget && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 300,
            background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 24,
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
            <div style={{
              color: 'rgba(255,255,255,0.52)', fontSize: '0.92rem',
              marginBottom: 28, lineHeight: 1.55,
            }}>
              {splitTarget.type === 'rod'
                ? 'Turn 1 rod (10) into 10 individual units (1s)'
                : 'Turn 1 flat (100) into 10 individual rods (10s)'}
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button
                onClick={() => setSplitTarget(null)}
                style={{
                  flex: 1, padding: '13px', borderRadius: 13,
                  border: '1.5px solid rgba(255,255,255,0.18)',
                  background: 'transparent', color: 'rgba(255,255,255,0.58)',
                  fontWeight: 600, fontSize: '0.92rem', cursor: 'pointer',
                  touchAction: 'manipulation',
                }}
              >
                Cancel
              </button>
              <button
                onClick={confirmSplit}
                style={{
                  flex: 1, padding: '13px', borderRadius: 13, border: 'none',
                  background: splitTarget.type === 'rod' ? '#34D399' : '#FBBF24',
                  color: '#000',
                  fontWeight: 800, fontSize: '0.92rem', cursor: 'pointer',
                  touchAction: 'manipulation',
                }}
              >
                Yes, split!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Clear-all confirmation dialog ──────────────────────────────────── */}
      {showClearConfirm && (
        <div
          style={{
            position: 'fixed', inset: 0, zIndex: 300,
            background: 'rgba(0,0,0,0.72)', backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: 24,
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
                style={{
                  flex: 1, padding: '13px', borderRadius: 13,
                  border: '1.5px solid rgba(255,255,255,0.18)',
                  background: 'transparent', color: 'rgba(255,255,255,0.58)',
                  fontWeight: 600, fontSize: '0.92rem', cursor: 'pointer',
                  touchAction: 'manipulation',
                }}
              >
                Cancel
              </button>
              <button
                onClick={confirmClear}
                style={{
                  flex: 1, padding: '13px', borderRadius: 13, border: 'none',
                  background: '#EF4444', color: '#fff',
                  fontWeight: 800, fontSize: '0.92rem', cursor: 'pointer',
                  touchAction: 'manipulation',
                }}
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
