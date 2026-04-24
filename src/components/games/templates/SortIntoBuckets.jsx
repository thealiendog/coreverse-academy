import { useState, useEffect } from 'react';
import { sfx } from '../sounds';
import KaraokeText from '../KaraokeText';

// Fallback palette when bucket.color is not provided
const BUCKET_COLORS = ['#7C3AED', '#F59E0B', '#34D399', '#60A5FA', '#F472B6'];

export default function SortIntoBuckets({ step, onReady, disabled, karaokeWords = [], karaokeIdx = -1 }) {
  const rawBuckets = step.buckets || [
    { label: 'Living',     color: '#34D399' },
    { label: 'Non-living', color: '#60A5FA' },
  ];
  // Inject fallback colors so downstream code can always read bucket.color
  const buckets = rawBuckets.map((b, i) => ({ ...b, color: b.color || BUCKET_COLORS[i % BUCKET_COLORS.length] }));
  const items   = step.items || [];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [counts,     setCounts]     = useState(Array(buckets.length).fill(0));
  const [flash,      setFlash]      = useState(null); // bucket index flashing correct/wrong
  const [wrongFlash, setWrongFlash] = useState(null);
  const [done,       setDone]       = useState(false);
  const [bounceItem, setBounceItem] = useState(false);

  useEffect(() => {
    setCurrentIdx(0);
    setCounts(Array(buckets.length).fill(0));
    setDone(false);
    // All TTS handled by GameLessonPlayer.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const currentItem = items[currentIdx];

  function sort(bucketIdx) {
    if (done || !currentItem || disabled) return;
    const correct = currentItem.bucket === bucketIdx;
    if (correct) {
      sfx.plop();
      setCounts(prev => {
        const next = [...prev];
        next[bucketIdx]++;
        return next;
      });
      setFlash(bucketIdx);
      setTimeout(() => setFlash(null), 500);
      const next = currentIdx + 1;
      if (next >= items.length) {
        setDone(true);
        sfx.fanfare();
        setTimeout(() => onReady?.(), 1000);
      } else {
        setCurrentIdx(next);
      }
    } else {
      sfx.boing?.() || sfx.buzz();
      setWrongFlash(bucketIdx);
      setBounceItem(true);
      setTimeout(() => { setWrongFlash(null); setBounceItem(false); }, 600);
    }
  }

  return (
    <div style={{ padding: '16px 16px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, overflowY: 'auto' }}>
      <style>{`
        @keyframes sib-bounce { 0%,100%{transform:translateY(0)}30%{transform:translateY(-12px)}60%{transform:translateY(4px)} }
        @keyframes sib-pop    { 0%{transform:scale(0.8);opacity:0}60%{transform:scale(1.15)}100%{transform:scale(1);opacity:1} }
        @keyframes sib-shake  { 0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}75%{transform:translateX(8px)} }
      `}</style>

      {/* Instruction */}
      <p style={{ color:'#fff', fontWeight:800, fontSize:'clamp(1.1rem,3.5vw,1.4rem)', textAlign:'center', margin:0 }}>
        {done ? 'Great sorting!' : <KaraokeText text={step.instruction || 'Sort each item into the right bucket!'} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} />}
      </p>

      {/* Current item to sort */}
      {!done && currentItem && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          animation: bounceItem ? 'sib-bounce 0.5s ease' : 'sib-pop 0.4s ease',
        }}>
          {currentItem.image ? (
            <img
              src={currentItem.image}
              alt={currentItem.label || ''}
              draggable={false}
              style={{ width: 96, height: 96, objectFit: 'contain', borderRadius: 12 }}
            />
          ) : currentItem.emoji ? (
            <div style={{ fontSize: '4rem', lineHeight: 1 }}>{currentItem.emoji}</div>
          ) : null}
          {currentItem.label && (
            <p style={{ color:'rgba(255,255,255,0.8)', fontWeight:700, fontSize:'1.1rem', margin:0 }}>
              {currentItem.label}
            </p>
          )}
          <p style={{ color:'rgba(255,255,255,0.45)', fontSize:'0.85rem', margin:0 }}>
            Tap a bucket to sort it!
          </p>
        </div>
      )}

      {/* Progress */}
      {!done && (
        <p style={{ color:'rgba(255,255,255,0.4)', fontSize:'0.85rem', margin:0 }}>
          {currentIdx} / {items.length} sorted
        </p>
      )}

      {/* Buckets */}
      <div style={{ display:'flex', gap:16, width:'100%', maxWidth:400, justifyContent:'center' }}>
        {buckets.map((bucket, bi) => (
          <button
            key={bi}
            onClick={() => sort(bi)}
            style={{
              flex: 1,
              minHeight: 110,
              borderRadius: 20,
              border: `2px solid ${flash === bi ? bucket.color : wrongFlash === bi ? '#EF4444' : bucket.color + '55'}`,
              background: flash === bi
                ? `${bucket.color}22`
                : wrongFlash === bi
                  ? 'rgba(239,68,68,0.12)'
                  : `${bucket.color}11`,
              cursor: done ? 'default' : 'pointer',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              transition: 'all 0.2s ease',
              animation: wrongFlash === bi ? 'sib-shake 0.5s ease' : 'none',
              boxShadow: flash === bi ? `0 0 20px ${bucket.color}55` : 'none',
            }}
          >
            {bucket.image ? (
              <img src={bucket.image} alt={bucket.label || ''} draggable={false}
                style={{ width:40, height:40, objectFit:'contain', borderRadius:8 }} />
            ) : (
              <div style={{ width:20, height:20, borderRadius:'50%', background:bucket.color, boxShadow:`0 0 10px ${bucket.color}88` }} />
            )}
            <span style={{ color: bucket.color, fontWeight:800, fontSize:'0.95rem' }}>{bucket.label}</span>
            <span style={{ color:'rgba(255,255,255,0.5)', fontSize:'0.8rem' }}>{counts[bi]} items</span>
          </button>
        ))}
      </div>

      {done && (
        <p style={{ color:'#FCD34D', fontWeight:900, fontSize:'1.2rem', margin:0 }}>
          You sorted everything!
        </p>
      )}
    </div>
  );
}
