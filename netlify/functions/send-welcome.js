const { Resend } = require('resend');
const { emailBase, divider, sectionLabel, card, ctaButton, signOff } = require('./_emailBase');

const STATE_NOTES = {
  California:   'File a Private School Affidavit by October 15 each year. No mandatory testing required.',
  Texas:        'No formal notification required. Curriculum must cover reading, spelling, math, and good citizenship.',
  Florida:      'Submit a Notice of Intent to your district. Annual portfolio review or standardized test required.',
  'New York':   'File an Annual Notice of Intent by July 1. Quarterly progress reports and annual assessment required.',
  Virginia:     'Notify your school division by August 15. Annual assessment via test or portfolio required.',
  Washington:   'File annual Declaration of Intent. Annual assessment required in grades 3–10.',
  Colorado:     'No notification required. Homeschool is treated as a non-public school.',
  Oregon:       'File a Notice of Intent. Annual assessment or portfolio review required.',
  Pennsylvania: 'File annually with your superintendent. Portfolio review by a certified evaluator required.',
  Illinois:     'No notification required. Curriculum must be equivalent to public school instruction.',
};

function buildHtml({ parentName, childName, childAge, subjectLabels, state }) {
  const firstName = parentName.split(' ')[0];
  const stateNote = STATE_NOTES[state] || `Requirements vary. Visit the Compliance section in your dashboard for full details on ${state || 'your state'}.`;

  const subjectRows = (subjectLabels || []).map(s => `
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:8px;">
      <tr>
        <td style="width:4px;background:#7C3AED;border-radius:3px;"></td>
        <td style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-left:none;
                   border-radius:0 8px 8px 0;padding:10px 16px;">
          <span style="color:#ffffff;font-size:14px;font-family:Arial,sans-serif;">${s}</span>
        </td>
      </tr>
    </table>`).join('');

  const content = `
    <h1 style="color:#ffffff;font-size:26px;font-family:Georgia,serif;font-weight:normal;margin:0 0 6px;">
      Welcome, ${firstName}.
    </h1>
    <p style="color:#A78BFA;font-size:15px;font-family:Georgia,serif;margin:0 0 28px;">
      ${childName}'s learning adventure begins now.
    </p>

    ${divider()}

    ${sectionLabel('Learner Profile')}
    ${card(`
      <p style="color:#ffffff;font-size:18px;font-family:Georgia,serif;margin:0 0 4px;">${childName}</p>
      <p style="color:rgba(255,255,255,0.45);font-size:13px;font-family:Arial,sans-serif;margin:0;">
        Age ${childAge}${state ? ` &nbsp;·&nbsp; ${state}` : ''}
      </p>
    `, { purple: true })}

    ${sectionLabel('Curriculum')}
    ${subjectRows}

    ${divider()}

    ${sectionLabel(state ? `${state} Homeschool Requirements` : 'State Requirements')}
    ${card(`
      <p style="color:rgba(255,255,255,0.75);font-size:13px;font-family:Arial,sans-serif;margin:0;line-height:1.7;">
        ${stateNote}
      </p>
    `, { green: true })}

    ${ctaButton('Open Coreverse Academy', 'https://coreverseacademy.ai')}

    ${signOff(
      `We're honoured to walk alongside ${childName}'s education.`,
      '— The Coreverse Academy Team'
    )}`;

  return emailBase(`Welcome to Coreverse Academy`, content);
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }
  try {
    const body = JSON.parse(event.body || '{}');
    const resend = new Resend(process.env.RESEND_API_KEY);
    const firstName = (body.parentName || '').split(' ')[0] || 'there';

    const { error } = await resend.emails.send({
      from: 'Coreverse Academy <hello@coreverseacademy.ai>',
      to:   [body.parentEmail],
      subject: `Welcome to Coreverse Academy, ${firstName}!`,
      html:  buildHtml(body),
    });

    if (error) return { statusCode: 500, body: JSON.stringify({ error }) };
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
