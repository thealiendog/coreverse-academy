// ============================================================
// BaseTenBlocksWorkspace.jsx — Coreverse Academy
// Unified base-ten blocks manipulative for all age bands.
//
// complexityLevel prop:
//   "littlestars"    → units only, tap add/remove, max 20
//   "explorers"      → units + rods, tap or drag, max 999, regroup up
//   "upperexplorers" → units + rods + flats, full drag + auto-regroup
//                      both directions, max 9999
//
// ALL block positioning lives in ONE function: calculateBlockLayout().
// No positioning math exists anywhere else in this file.
// ============================================================

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";

// ── Static geometry constants (sizes only — never positions) ──
const BLOCK_DIMS = {
  unit: { w: 30, h: 30 },
  rod: { w: 200, h: 30 }, // 10 segments of 20px
  flat: { w: 130, h: 130 }, // 10×10 grid of 13px cells
};

const BLOCK_VALUES = { unit: 1, rod: 10, flat: 100 };

const LEVEL_CONFIG = {
  littlestars: { types: ["unit"], max: 20, drag: false, regroup: false },
  explorers: { types: ["unit", "rod"], max: 999, drag: true, regroup: true },
  upperexplorers: {
    types: ["unit", "rod", "flat"],
    max: 9999,
    drag: true,
    regroup: true,
  },
};

const BLOCK_COLORS = {
  unit: { fill: "#facc15", stroke: "#a16207" }, // gold
  rod: { fill: "#38bdf8", stroke: "#0369a1" }, // sky
  flat: { fill: "#a78bfa", stroke: "#6d28d9" }, // violet
};

let nextBlockId = 1;
const makeBlock = (type) => ({
  id: `b${nextBlockId++}`,
  type,
  manual: false, // becomes true once the kid drags it
  x: 0,
  y: 0,
  merging: false, // true during regroup-up animation
});

// ============================================================
// calculateBlockLayout — THE single source of truth for where
// every block sits. Given the block list and workspace size,
// returns { [blockId]: { x, y, w, h } }.
//
// Rules:
//  • Manual (dragged) blocks keep their x/y, clamped to bounds.
//  • Auto blocks are laid out in type zones, top to bottom:
//    flats → rods → units, wrapping into rows.
//  • Regroup animations converge blocks toward the slot the
//    replacement block will occupy — also computed here.
// ============================================================
export function calculateBlockLayout(blocks, width, height) {
  const PAD = 10;
  const GAP = 8;
  const layout = {};
  if (!width || !height) return layout;

  // Zone order: flats on top, rods middle, units bottom of auto area.
  const zoneOrder = ["flat", "rod", "unit"];
  let cursorY = PAD;

  for (const type of zoneOrder) {
    const dims = BLOCK_DIMS[type];
    const autoBlocks = blocks.filter(
      (b) => b.type === type && !b.manual
    );
    if (autoBlocks.length === 0) continue;

    const perRow = Math.max(
      1,
      Math.floor((width - PAD * 2 + GAP) / (dims.w + GAP))
    );
    autoBlocks.forEach((b, i) => {
      const row = Math.floor(i / perRow);
      const col = i % perRow;
      layout[b.id] = {
        x: PAD + col * (dims.w + GAP),
        y: cursorY + row * (dims.h + GAP),
        w: dims.w,
        h: dims.h,
      };
    });
    const rows = Math.ceil(autoBlocks.length / perRow);
    cursorY += rows * (dims.h + GAP) + GAP;
  }

  // Manual blocks: keep dragged position, clamped inside workspace.
  for (const b of blocks) {
    if (!b.manual) continue;
    const dims = BLOCK_DIMS[b.type];
    layout[b.id] = {
      x: Math.min(Math.max(b.x, 0), Math.max(0, width - dims.w)),
      y: Math.min(Math.max(b.y, 0), Math.max(0, height - dims.h)),
      w: dims.w,
      h: dims.h,
    };
  }

  // Merging blocks converge toward the centroid of the merge group.
  const merging = blocks.filter((b) => b.merging);
  if (merging.length > 0) {
    let cx = 0;
    let cy = 0;
    let n = 0;
    for (const b of merging) {
      const p = layout[b.id];
      if (p) {
        cx += p.x;
        cy += p.y;
        n++;
      }
    }
    if (n > 0) {
      cx /= n;
      cy /= n;
      for (const b of merging) {
        const p = layout[b.id];
        if (p) layout[b.id] = { ...p, x: cx, y: cy };
      }
    }
  }

  return layout;
}

// ── SVG renderers for each block type ──
function BlockVisual({ type }) {
  const { fill, stroke } = BLOCK_COLORS[type];
  const { w, h } = BLOCK_DIMS[type];
  if (type === "unit") {
    return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <rect
          x="1" y="1" width={w - 2} height={h - 2} rx="4"
          fill={fill} stroke={stroke} strokeWidth="2"
        />
      </svg>
    );
  }
  if (type === "rod") {
    const seg = (w - 2) / 10;
    return (
      <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
        <rect
          x="1" y="1" width={w - 2} height={h - 2} rx="4"
          fill={fill} stroke={stroke} strokeWidth="2"
        />
        {Array.from({ length: 9 }, (_, i) => (
          <line
            key={i}
            x1={1 + seg * (i + 1)} y1="3"
            x2={1 + seg * (i + 1)} y2={h - 3}
            stroke={stroke} strokeWidth="1" opacity="0.5"
          />
        ))}
      </svg>
    );
  }
  // flat: 10×10 grid
  const cell = (w - 2) / 10;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <rect
        x="1" y="1" width={w - 2} height={h - 2} rx="4"
        fill={fill} stroke={stroke} strokeWidth="2"
      />
      {Array.from({ length: 9 }, (_, i) => (
        <React.Fragment key={i}>
          <line
            x1={1 + cell * (i + 1)} y1="3"
            x2={1 + cell * (i + 1)} y2={h - 3}
            stroke={stroke} strokeWidth="1" opacity="0.4"
          />
          <line
            x1="3" y1={1 + cell * (i + 1)}
            x2={w - 3} y2={1 + cell * (i + 1)}
            stroke={stroke} strokeWidth="1" opacity="0.4"
          />
        </React.Fragment>
      ))}
    </svg>
  );
}

// ============================================================
// Main component
// ============================================================
export default function BaseTenBlocksWorkspace({
  complexityLevel = "upperexplorers",
  initialBlocks = null, // e.g. { flats: 4, rods: 5, units: 8 }
  resetKey = 0, // change to clear the workspace
  mode = "build", // "build" | "inspect" (inspect = locked, taps report)
  highlightType = null, // block type to pulse (inspect feedback)
  onTotalChange = null,
  onBlockTap = null, // (type) => void — used in inspect mode
  onChange = null, // fires on any workspace mutation (for hint timers)
}) {
  const cfg = LEVEL_CONFIG[complexityLevel] || LEVEL_CONFIG.upperexplorers;
  const [blocks, setBlocks] = useState([]);
  const [popover, setPopover] = useState(null); // { id }
  const workspaceRef = useRef(null);
  const [wsSize, setWsSize] = useState({ w: 0, h: 0 });

  // Drag state lives in refs — no positioning math here, just gesture data.
  const dragRef = useRef(null); // { id, offsetX, offsetY, startX, startY, moved, startTime }
  const touchActiveRef = useRef(false); // touch takes priority over mouse

  // ── Measure workspace ──
  useEffect(() => {
    const el = workspaceRef.current;
    if (!el) return;
    const measure = () =>
      setWsSize({ w: el.clientWidth, h: el.clientHeight });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // ── Reset / preload ──
  useEffect(() => {
    const seed = [];
    if (initialBlocks) {
      for (let i = 0; i < (initialBlocks.flats || 0); i++)
        seed.push(makeBlock("flat"));
      for (let i = 0; i < (initialBlocks.rods || 0); i++)
        seed.push(makeBlock("rod"));
      for (let i = 0; i < (initialBlocks.units || 0); i++)
        seed.push(makeBlock("unit"));
    }
    setBlocks(seed);
    setPopover(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetKey]);

  // ── Total ──
  // Merging blocks keep full value: 10 units mid-animation total 10,
  // and the rod that replaces them is also 10 — counter never flickers.
  const total = useMemo(
    () => blocks.reduce((sum, b) => sum + BLOCK_VALUES[b.type], 0),
    [blocks]
  );

  useEffect(() => {
    if (onTotalChange) onTotalChange(total);
  }, [total, onTotalChange]);

  const notifyChange = useCallback(() => {
    if (onChange) onChange();
  }, [onChange]);

  // ── Regroup up: 10 units → 1 rod, 10 rods → 1 flat ──
  const regroupTimer = useRef(null);
  useEffect(() => {
    if (!cfg.regroup) return;
    if (blocks.some((b) => b.merging)) return; // one animation at a time

    const tryMerge = (fromType, toType) => {
      if (!cfg.types.includes(toType)) return false;
      const group = blocks
        .filter((b) => b.type === fromType && !b.merging)
        .slice(0, 10);
      if (group.length < 10) return false;
      const ids = new Set(group.map((b) => b.id));
      // Phase 1: mark merging → calculateBlockLayout converges them.
      setBlocks((prev) =>
        prev.map((b) => (ids.has(b.id) ? { ...b, merging: true } : b))
      );
      // Phase 2: after the converge animation, swap in the new block.
      regroupTimer.current = setTimeout(() => {
        setBlocks((prev) => [
          ...prev.filter((b) => !ids.has(b.id)),
          makeBlock(toType),
        ]);
      }, 480);
      return true;
    };

    if (!tryMerge("unit", "rod")) tryMerge("rod", "flat");
    return () => clearTimeout(regroupTimer.current);
  }, [blocks, cfg]);

  // ── Spawn from palette ──
  const spawn = (type) => {
    if (mode !== "build") return;
    if (total + BLOCK_VALUES[type] > cfg.max) return; // cap
    setBlocks((prev) => [...prev, makeBlock(type)]);
    setPopover(null);
    notifyChange();
  };

  // ── Remove / break apart ──
  const removeBlock = (id) => {
    setBlocks((prev) => prev.filter((b) => b.id !== id));
    setPopover(null);
    notifyChange();
  };

  const breakApart = (id) => {
    setBlocks((prev) => {
      const target = prev.find((b) => b.id === id);
      if (!target || target.type === "unit") return prev;
      const childType = target.type === "flat" ? "rod" : "unit";
      const children = Array.from({ length: 10 }, () =>
        makeBlock(childType)
      );
      return [...prev.filter((b) => b.id !== id), ...children];
    });
    setPopover(null);
    notifyChange();
  };

  // ── Tap handling ──
  const handleBlockTap = (block) => {
    if (mode === "inspect") {
      if (onBlockTap) onBlockTap(block.type);
      return;
    }
    if (complexityLevel === "littlestars") {
      removeBlock(block.id); // simplest interaction for 3-5
      return;
    }
    setPopover((p) => (p && p.id === block.id ? null : { id: block.id }));
  };

  // ── Drag gesture (touch-first; mouse guarded behind touchActiveRef) ──
  const layout = useMemo(
    () => calculateBlockLayout(blocks, wsSize.w, wsSize.h),
    [blocks, wsSize]
  );

  const beginDrag = (block, clientX, clientY) => {
    if (mode !== "build" || !cfg.drag) {
      dragRef.current = {
        id: block.id, startX: clientX, startY: clientY,
        moved: false, startTime: Date.now(), tapOnly: true,
      };
      return;
    }
    const pos = layout[block.id];
    const rect = workspaceRef.current.getBoundingClientRect();
    dragRef.current = {
      id: block.id,
      offsetX: clientX - rect.left - (pos ? pos.x : 0),
      offsetY: clientY - rect.top - (pos ? pos.y : 0),
      startX: clientX,
      startY: clientY,
      moved: false,
      startTime: Date.now(),
      tapOnly: false,
    };
  };

  const moveDrag = (clientX, clientY) => {
    const d = dragRef.current;
    if (!d) return;
    if (
      Math.abs(clientX - d.startX) > 8 ||
      Math.abs(clientY - d.startY) > 8
    )
      d.moved = true;
    if (d.tapOnly || !d.moved) return;
    const rect = workspaceRef.current.getBoundingClientRect();
    const nx = clientX - rect.left - d.offsetX;
    const ny = clientY - rect.top - d.offsetY;
    setBlocks((prev) =>
      prev.map((b) =>
        b.id === d.id ? { ...b, manual: true, x: nx, y: ny } : b
      )
    );
  };

  const endDrag = (clientX, clientY) => {
    const d = dragRef.current;
    dragRef.current = null;
    if (!d) return;
    const block = blocks.find((b) => b.id === d.id);
    if (!block) return;

    if (!d.moved && Date.now() - d.startTime < 400) {
      handleBlockTap(block);
      return;
    }
    if (d.moved && !d.tapOnly) {
      // Drop onto palette = delete
      const paletteEl = document.getElementById("btb-palette");
      if (paletteEl) {
        const pr = paletteEl.getBoundingClientRect();
        if (
          clientY >= pr.top && clientY <= pr.bottom &&
          clientX >= pr.left && clientX <= pr.right
        ) {
          removeBlock(d.id);
          return;
        }
      }
      notifyChange();
    }
  };

  // Touch handlers (priority) + mouse fallback with guard
  const blockTouchStart = (block) => (e) => {
    touchActiveRef.current = true;
    const t = e.touches[0];
    beginDrag(block, t.clientX, t.clientY);
  };
  const blockMouseDown = (block) => (e) => {
    if (touchActiveRef.current) return;
    beginDrag(block, e.clientX, e.clientY);
  };

  useEffect(() => {
    const tm = (e) => {
      if (!dragRef.current) return;
      e.preventDefault();
      const t = e.touches[0];
      moveDrag(t.clientX, t.clientY);
    };
    const te = (e) => {
      if (!dragRef.current) return;
      const t = e.changedTouches[0];
      endDrag(t.clientX, t.clientY);
      setTimeout(() => (touchActiveRef.current = false), 500);
    };
    const mm = (e) => {
      if (touchActiveRef.current || !dragRef.current) return;
      moveDrag(e.clientX, e.clientY);
    };
    const me = (e) => {
      if (touchActiveRef.current || !dragRef.current) return;
      endDrag(e.clientX, e.clientY);
    };
    window.addEventListener("touchmove", tm, { passive: false });
    window.addEventListener("touchend", te);
    window.addEventListener("mousemove", mm);
    window.addEventListener("mouseup", me);
    return () => {
      window.removeEventListener("touchmove", tm);
      window.removeEventListener("touchend", te);
      window.removeEventListener("mousemove", mm);
      window.removeEventListener("mouseup", me);
    };
  });

  // ── Palette tap/click (touch-first with guard) ──
  const paletteTouch = (type) => (e) => {
    e.preventDefault();
    touchActiveRef.current = true;
    spawn(type);
    setTimeout(() => (touchActiveRef.current = false), 500);
  };
  const paletteClick = (type) => () => {
    if (touchActiveRef.current) return;
    spawn(type);
  };

  const popBlock = popover ? blocks.find((b) => b.id === popover.id) : null;
  const popPos = popBlock ? layout[popBlock.id] : null;

  return (
    <div className="flex flex-col h-full w-full select-none">
      {/* ── Live counter ── */}
      <div className="flex items-center justify-center py-2">
        <div className="px-6 py-2 rounded-2xl bg-indigo-950/80 border border-indigo-400/40 shadow-lg">
          <span className="text-3xl font-bold text-amber-300 tabular-nums tracking-wide">
            {total.toLocaleString()}
          </span>
        </div>
      </div>

      {/* ── Workspace ── */}
      <div
        ref={workspaceRef}
        className="relative flex-1 mx-2 rounded-2xl bg-indigo-950/40 border-2 border-dashed border-indigo-400/30 overflow-hidden"
        style={{ touchAction: "none", minHeight: 220 }}
      >
        {blocks.map((b) => {
          const pos = layout[b.id];
          if (!pos) return null;
          const glow =
            mode === "inspect" && highlightType === b.type;
          return (
            <div
              key={b.id}
              onTouchStart={blockTouchStart(b)}
              onMouseDown={blockMouseDown(b)}
              className={glow ? "animate-pulse" : ""}
              style={{
                position: "absolute",
                left: pos.x,
                top: pos.y,
                width: pos.w,
                height: pos.h,
                transition: dragRef.current?.id === b.id
                  ? "none"
                  : "left 0.45s ease, top 0.45s ease, opacity 0.45s ease, transform 0.45s ease",
                opacity: b.merging ? 0.25 : 1,
                transform: b.merging ? "scale(0.5)" : "scale(1)",
                zIndex: dragRef.current?.id === b.id ? 30 : 10,
                cursor: cfg.drag && mode === "build" ? "grab" : "pointer",
                filter: glow
                  ? "drop-shadow(0 0 8px rgba(252,211,77,0.9))"
                  : "none",
              }}
            >
              <BlockVisual type={b.type} />
            </div>
          );
        })}

        {/* Tap popover: × delete + break apart */}
        {popBlock && popPos && mode === "build" && (
          <div
            className="absolute z-40 flex gap-1"
            style={{
              left: Math.min(popPos.x, Math.max(0, wsSize.w - 120)),
              top: Math.max(0, popPos.y - 40),
            }}
          >
            <button
              onTouchStart={(e) => {
                e.preventDefault();
                removeBlock(popBlock.id);
              }}
              onClick={() => removeBlock(popBlock.id)}
              className="px-3 py-1.5 rounded-full bg-rose-500 text-white text-sm font-bold shadow-lg"
            >
              ×
            </button>
            {popBlock.type !== "unit" && cfg.regroup && (
              <button
                onTouchStart={(e) => {
                  e.preventDefault();
                  breakApart(popBlock.id);
                }}
                onClick={() => breakApart(popBlock.id)}
                className="px-3 py-1.5 rounded-full bg-sky-500 text-white text-sm font-bold shadow-lg whitespace-nowrap"
              >
                Break apart
              </button>
            )}
          </div>
        )}

        {blocks.length === 0 && mode === "build" && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="text-indigo-300/50 text-lg">
              Tap a block below to add it
            </p>
          </div>
        )}
      </div>

      {/* ── Palette (also the drop-to-delete zone) ── */}
      {mode === "build" && (
        <div
          id="btb-palette"
          className="flex items-center justify-center gap-6 px-4 py-3 mx-2 mt-2 rounded-2xl bg-indigo-900/60 border border-indigo-400/30"
        >
          {cfg.types.map((type) => (
            <button
              key={type}
              onTouchStart={paletteTouch(type)}
              onClick={paletteClick(type)}
              className="flex flex-col items-center gap-1 active:scale-90 transition-transform"
              style={{ touchAction: "manipulation" }}
            >
              <div
                style={{
                  transform: type === "flat" ? "scale(0.5)" : "scale(0.8)",
                  transformOrigin: "center",
                  height: type === "flat" ? 70 : 30,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <BlockVisual type={type} />
              </div>
              <span className="text-xs text-indigo-200 font-semibold capitalize">
                {type === "unit" ? "1" : type === "rod" ? "10" : "100"}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
