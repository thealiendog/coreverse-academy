// Shared HTML email shell — dark navy, purple accents, brand-consistent

function logoMark() {
  return `
    <table cellpadding="0" cellspacing="0" role="presentation" align="center">
      <tr>
        <td style="width:44px;height:44px;background:#7C3AED;border-radius:11px;text-align:center;vertical-align:middle;">
          <span style="color:#ffffff;font-size:22px;font-weight:bold;font-family:Georgia,serif;line-height:44px;">I</span>
        </td>
        <td style="padding-left:12px;vertical-align:middle;">
          <span style="color:#ffffff;font-size:19px;font-weight:bold;font-family:Georgia,serif;">Innerverse Academy</span>
        </td>
      </tr>
    </table>`;
}

function divider() {
  return `<div style="height:1px;background:rgba(124,58,237,0.18);margin:28px 0;"></div>`;
}

function sectionLabel(text) {
  return `<p style="color:rgba(255,255,255,0.35);font-size:10px;font-family:Arial,sans-serif;text-transform:uppercase;letter-spacing:1.4px;margin:0 0 10px;">${text}</p>`;
}

function card(inner, opts = {}) {
  const border = opts.green
    ? 'rgba(16,185,129,0.25)'
    : opts.purple
    ? 'rgba(124,58,237,0.3)'
    : 'rgba(255,255,255,0.06)';
  const bg = opts.green
    ? 'rgba(16,185,129,0.07)'
    : opts.purple
    ? 'rgba(124,58,237,0.09)'
    : 'rgba(255,255,255,0.03)';
  return `
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:12px;">
      <tr>
        <td style="background:${bg};border:1px solid ${border};border-radius:14px;padding:18px 22px;">
          ${inner}
        </td>
      </tr>
    </table>`;
}

function ctaButton(label, url) {
  return `
    <div style="text-align:center;margin-top:36px;">
      <a href="${url}"
         style="display:inline-block;background:#7C3AED;color:#ffffff;font-family:Georgia,serif;font-size:16px;font-weight:bold;text-decoration:none;padding:16px 40px;border-radius:12px;letter-spacing:0.3px;">
        ${label}
      </a>
    </div>`;
}

function signOff(line1, line2 = '') {
  return `
    <p style="color:rgba(255,255,255,0.35);font-size:13px;font-family:Arial,sans-serif;text-align:center;margin:28px 0 0;line-height:1.7;">
      ${line1}${line2 ? `<br><span style="color:#A78BFA;">${line2}</span>` : ''}
    </p>`;
}

function emailBase(title, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="color-scheme" content="dark">
  <title>${title}</title>
</head>
<body style="margin:0;padding:0;background:#080618;-webkit-text-size-adjust:100%;">
<table width="100%" cellpadding="0" cellspacing="0" role="presentation"
       style="background:#080618;min-height:100%;">
  <tr>
    <td align="center" style="padding:48px 20px 60px;">
      <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
             style="max-width:560px;width:100%;">

        <!-- Logo -->
        <tr>
          <td align="center" style="padding-bottom:28px;">
            ${logoMark()}
          </td>
        </tr>

        <!-- Main card -->
        <tr>
          <td style="background:#0F0B2E;border:1px solid rgba(124,58,237,0.22);border-radius:20px;padding:40px 36px;">
            ${content}
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td align="center" style="padding-top:28px;">
            <p style="color:rgba(255,255,255,0.2);font-size:12px;font-family:Arial,sans-serif;margin:0 0 6px;">
              Innerverse Academy &nbsp;·&nbsp;
              <a href="https://innerverseacademy.ai" style="color:#7C3AED;text-decoration:none;">innerverseacademy.ai</a>
            </p>
            <p style="color:rgba(255,255,255,0.1);font-size:11px;font-family:Arial,sans-serif;margin:0;">
              You're receiving this as an Innerverse Academy family.
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

module.exports = { emailBase, divider, sectionLabel, card, ctaButton, signOff };
