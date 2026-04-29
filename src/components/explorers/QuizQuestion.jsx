// QuizQuestion — Day 5 placeholder (will render individual quiz questions)
export default function QuizQuestion({ question, accent, onAnswer }) {
  return (
    <div style={{ padding: '24px', background: 'rgba(255,255,255,0.05)', borderRadius: 16 }}>
      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.6 }}>{question?.question}</p>
      <div style={{ color: accent, fontSize: '0.8rem', marginTop: 12 }}>Coming Day 5</div>
    </div>
  );
}
