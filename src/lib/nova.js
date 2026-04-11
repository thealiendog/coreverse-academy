// Nova AI tutor — calls the Netlify function so the API key stays server-side

const BASE = '/.netlify/functions';

/**
 * Ask Nova a question about the current lesson.
 * @param {object} opts
 * @param {string}   opts.childName
 * @param {number}   opts.childAge
 * @param {string}   opts.avatarId      — child's selected spirit animal id
 * @param {string}   opts.subjectLabel
 * @param {string}   opts.lessonTitle
 * @param {string}   opts.learnContent  — lesson.learn joined as numbered list
 * @param {Array}    opts.history        — prior {role, content} messages (max 8)
 * @param {string}   opts.question       — child's current question
 * @returns {Promise<string>} Nova's reply text
 */
export async function askNova({ childName, childAge, avatarId, subjectLabel, lessonTitle, learnContent, history, question }) {
  const res = await fetch(`${BASE}/nova-chat`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ childName, childAge, avatarId, subjectLabel, lessonTitle, learnContent, history, question }),
  });
  if (!res.ok) throw new Error('Nova is unavailable right now');
  const data = await res.json();
  return data.reply;
}
