// Email triggers — calls Netlify serverless functions (API key lives server-side only)

const BASE = '/.netlify/functions';

async function post(fn, body) {
  try {
    await fetch(`${BASE}/${fn}`, {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify(body),
    });
  } catch (_) {
    // Fire-and-forget — never block the UI if email fails
  }
}

/**
 * Sent after a parent creates their account via onboarding.
 */
export function sendWelcomeEmail({ parentName, parentEmail, childName, childAge, subjectLabels, state }) {
  return post('send-welcome', { parentName, parentEmail, childName, childAge, subjectLabels, state });
}

/**
 * Sent when a child passes a lesson quiz (score >= 3/5).
 */
export function sendLessonCompleteEmail({ parentEmail, parentName, childName, lessonTitle, subjectLabel, badge, explore }) {
  return post('send-lesson-complete', { parentEmail, parentName, childName, lessonTitle, subjectLabel, badge, explore });
}

/**
 * Weekly progress digest — call this from the parent dashboard on Sunday.
 * Pass all-time stats; the email labels them as "this week's progress".
 */
export function sendWeeklyReport({ parentEmail, parentName, childName, totalLessons, badges, subjects }) {
  return post('send-weekly-report', { parentEmail, parentName, childName, totalLessons, badges, subjects });
}
