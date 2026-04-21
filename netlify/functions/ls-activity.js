const Anthropic = require('@anthropic-ai/sdk');

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  try {
    const { sectionText } = JSON.parse(event.body || '{}');
    if (!sectionText) return { statusCode: 400, body: JSON.stringify({ error: 'sectionText required' }) };

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    const response = await client.messages.create({
      model:      'claude-haiku-4-5-20251001',
      max_tokens: 200,
      system:     'You generate simple interactive activities for ages 3-5. Return ONLY valid JSON, no other text, no markdown.',
      messages: [{
        role:    'user',
        content: `Based on this lesson section for ages 3-5, generate ONE simple interactive activity. Return JSON only, no other text.

Section: ${sectionText}

Return exactly one of these formats (pick whichever best fits the section content):
{"type":"tap_emoji","instruction":"Tap the happy face!","emojis":["😊","😢","😠","😴"],"correctIndex":0}
{"type":"tap_count","instruction":"How many stars? Tap the right number!","options":["2","3","5","4"],"correctIndex":1}
{"type":"find_it","instruction":"Which one is biggest?","emojis":["🐜","🐘","🐕","🐈"],"correctIndex":1}

Rules:
- instruction must be a short, fun question (max 8 words)
- emojis/options must have exactly 4 choices
- correctIndex must be 0, 1, 2, or 3
- Make it directly related to the section content`,
      }],
    });

    const raw = response.content[0].text.trim();
    // Extract JSON object from response (handle any stray text)
    const match = raw.match(/\{[\s\S]*\}/);
    if (!match) throw new Error('No JSON in response');
    const activity = JSON.parse(match[0]);

    // Validate structure
    const validTypes = ['tap_emoji', 'tap_count', 'find_it'];
    if (!validTypes.includes(activity.type)) throw new Error('Invalid activity type');
    if (typeof activity.instruction !== 'string') throw new Error('Missing instruction');
    if (typeof activity.correctIndex !== 'number') throw new Error('Missing correctIndex');
    const choices = activity.emojis || activity.options;
    if (!Array.isArray(choices) || choices.length !== 4) throw new Error('Must have 4 choices');

    return {
      statusCode: 200,
      headers:    { 'Content-Type': 'application/json' },
      body:       JSON.stringify(activity),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
