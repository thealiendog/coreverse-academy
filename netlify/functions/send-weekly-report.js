const { Resend } = require('resend');
const { emailBase, divider, sectionLabel, card, ctaButton, signOff } = require('./_emailBase');

function buildHtml({ parentName, childName, totalLessons, badges, subjects }) {
  const firstName = (parentName || '').split(' ')[0] || 'there';
  const badgeList  = badges  || [];
  const subjectList = subjects || [];

  const statCard = (value, label) => `
    <td style="width:33%;text-align:center;padding:0 8px;">
      <div style="background:rgba(124,58,237,0.09);border:1px solid rgba(124,58,237,0.2);border-radius:14px;padding:20px 12px;">
        <p style="color:#ffffff;font-size:28px;font-family:Georgia,serif;font-weight:bold;margin:0 0 6px;">${value}</p>
        <p style="color:rgba(255,255,255,0.4);font-size:11px;font-family:Arial,sans-serif;text-transform:uppercase;letter-spacing:1px;margin:0;">${label}</p>
      </div>
    </td>`;

  const content = `
    <h1 style="color:#ffffff;font-size:26px;font-family:Georgia,serif;font-weight:normal;margin:0 0 6px;">
      ${childName}'s Weekly Progress
    </h1>
    <p style="color:#A78BFA;font-size:15px;font-family:Georgia,serif;margin:0 0 28px;">
      Here's a look at what ${childName} accomplished this week.
    </p>

    ${divider()}

    <!-- Stats row -->
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:28px;">
      <tr>
        ${statCard(totalLessons || 0, 'Lessons')}
        ${statCard(badgeList.length, 'Badges')}
        ${statCard(subjectList.length, 'Subjects')}
      </tr>
    </table>

    ${badgeList.length > 0 ? `
      ${sectionLabel('Badges Earned This Week')}
      ${card(
        badgeList.map(b => `
          <table cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
            <tr>
              <td style="width:28px;height:28px;background:rgba(124,58,237,0.2);border-radius:50%;text-align:center;vertical-align:middle;">
                <span style="color:#A78BFA;font-size:14px;">✦</span>
              </td>
              <td style="padding-left:12px;vertical-align:middle;">
                <span style="color:#ffffff;font-size:14px;font-family:Arial,sans-serif;">${b}</span>
              </td>
            </tr>
          </table>`).join(''),
        { purple: true }
      )}
    ` : ''}

    ${subjectList.length > 0 ? `
      ${sectionLabel('Subjects Covered')}
      <div style="margin-bottom:16px;">
        ${subjectList.map(s => `
          <span style="display:inline-block;background:rgba(124,58,237,0.1);border:1px solid rgba(124,58,237,0.25);
                       border-radius:20px;padding:5px 14px;margin:4px;
                       color:#A78BFA;font-size:13px;font-family:Arial,sans-serif;">${s}</span>
        `).join('')}
      </div>
    ` : ''}

    ${divider()}

    ${sectionLabel('A note for you')}
    ${card(`
      <p style="color:#ffffff;font-size:15px;font-family:Georgia,serif;margin:0 0 10px;line-height:1.7;">
        "${firstName}, every lesson ${childName} completes is a seed planted. You're not just teaching — you're shaping a mind that will change something in this world."
      </p>
      <p style="color:#A78BFA;font-size:13px;font-family:Arial,sans-serif;margin:0;">— Innerverse Academy</p>
    `)}

    ${ctaButton('Open This Week\'s Lessons', 'https://innerverseacademy.ai')}

    ${signOff('See you next week.', '— The Innerverse Academy Team')}`;

  return emailBase(`${childName}'s Weekly Progress Report`, content);
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  try {
    const body = JSON.parse(event.body || '{}');
    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: 'Innerverse Academy <hello@innerverseacademy.ai>',
      to:   [body.parentEmail],
      subject: `${body.childName}'s weekly progress at Innerverse Academy`,
      html:  buildHtml(body),
    });

    if (error) return { statusCode: 500, body: JSON.stringify({ error }) };
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
