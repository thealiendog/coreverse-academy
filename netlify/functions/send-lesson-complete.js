const { Resend } = require('resend');
const { emailBase, divider, sectionLabel, card, ctaButton, signOff } = require('./_emailBase');

function buildHtml({ parentName, childName, lessonTitle, subjectLabel, badge, explore }) {
  const firstName = (parentName || '').split(' ')[0] || 'there';

  const content = `
    <h1 style="color:#ffffff;font-size:26px;font-family:Georgia,serif;font-weight:normal;margin:0 0 6px;">
      ${childName} just levelled up.
    </h1>
    <p style="color:#A78BFA;font-size:15px;font-family:Georgia,serif;margin:0 0 28px;">
      Another lesson complete — a real reason to celebrate.
    </p>

    ${divider()}

    ${sectionLabel('Lesson Completed')}
    ${card(`
      <p style="color:rgba(255,255,255,0.4);font-size:11px;font-family:Arial,sans-serif;text-transform:uppercase;letter-spacing:1px;margin:0 0 8px;">
        ${subjectLabel || ''}
      </p>
      <p style="color:#ffffff;font-size:17px;font-family:Georgia,serif;margin:0;">${lessonTitle}</p>
    `, { purple: true })}

    ${badge ? `
      ${sectionLabel('Badge Earned')}
      ${card(`
        <table cellpadding="0" cellspacing="0">
          <tr>
            <td style="width:36px;height:36px;background:rgba(124,58,237,0.25);border-radius:50%;text-align:center;vertical-align:middle;">
              <span style="color:#A78BFA;font-size:18px;font-family:Georgia,serif;">✦</span>
            </td>
            <td style="padding-left:14px;vertical-align:middle;">
              <p style="color:#A78BFA;font-size:15px;font-family:Georgia,serif;margin:0;font-weight:bold;">${badge}</p>
              <p style="color:rgba(255,255,255,0.4);font-size:12px;font-family:Arial,sans-serif;margin:4px 0 0;">Added to ${childName}'s badge collection</p>
            </td>
          </tr>
        </table>
      `, { purple: true })}
    ` : ''}

    ${explore ? `
      ${divider()}

      ${sectionLabel("Tonight's Family Adventure")}
      ${card(`
        <p style="color:rgba(255,255,255,0.5);font-size:11px;font-family:Arial,sans-serif;text-transform:uppercase;letter-spacing:1px;margin:0 0 10px;">
          Offline Activity
        </p>
        <p style="color:#ffffff;font-size:14px;font-family:Arial,sans-serif;margin:0;line-height:1.7;">
          ${explore}
        </p>
      `, { green: true })}
      <p style="color:rgba(255,255,255,0.4);font-size:13px;font-family:Arial,sans-serif;margin:12px 0 0;line-height:1.6;text-align:center;">
        Learning doesn't stop at the screen. This activity deepens what ${childName} explored today.
      </p>
    ` : ''}

    ${ctaButton('Continue Learning', 'https://innerverseacademy.ai')}

    ${signOff(
      `Keep going, ${firstName}. You're raising something extraordinary.`,
      '— The Innerverse Academy Team'
    )}`;

  return emailBase(`${childName} completed a lesson!`, content);
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
      subject: `${body.childName} just completed "${body.lessonTitle}"`,
      html:  buildHtml(body),
    });

    if (error) return { statusCode: 500, body: JSON.stringify({ error }) };
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
