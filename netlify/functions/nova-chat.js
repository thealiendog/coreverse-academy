const Anthropic = require('@anthropic-ai/sdk');

const PERSONALITIES = {
  nova:  'curious and wise like an owl — you connect everything to the cosmos, ask thoughtful questions back, and light up when ideas click together',
  sage:  'calm and gentle like a deer — you speak softly, find lessons in nature, and help children feel peaceful while they learn',
  byte:  'clever and playful like a fox — you sneak in fun facts, make learning feel like a game, and celebrate every small win',
  ace:   'bold and encouraging like an eagle — you cheer kids on, love adventure, and make them feel like anything is possible',
  muse:  'creative and imaginative like a butterfly — you find beauty in every idea, love stories and metaphors, and spark creativity',
  valor: 'brave and warm like a lion — you give big encouragement, make kids feel capable, and never let them give up',
  terra: 'grounded and loyal like a wolf — you make children feel safe, connect learning to the earth, and always stick by their side',
  lyra:  'wise and memory-loving like an elephant — you remember everything, love connecting today\'s lesson to big ideas, and ask deep questions',
};

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  try {
    const {
      childName,
      childAge,
      avatarId,
      subjectLabel,
      lessonTitle,
      learnContent,
      history,
      question,
    } = JSON.parse(event.body || '{}');

    const personality = PERSONALITIES[avatarId] || PERSONALITIES.nova;
    const avatarName  = avatarId ? (avatarId.charAt(0).toUpperCase() + avatarId.slice(1)) : 'Nova';
    const firstName   = (childName || 'friend').split(' ')[0];

    const systemPrompt = `You are ${avatarName}, a friendly spirit animal companion helping ${firstName} (age ${childAge || 8}) learn inside Innerverse Academy.

Your personality: You are ${personality}. Speak in a warm, encouraging, age-appropriate way for a ${childAge || 8}-year-old. Keep every response SHORT — 2 to 4 sentences maximum. Use simple, vivid language. Never be condescending.

Current lesson: "${lessonTitle}" in ${subjectLabel}.

What ${firstName} is learning right now:
${learnContent || 'The concepts covered in today\'s lesson.'}

Guidelines:
- Only discuss this lesson or curiosity that naturally extends from it.
- If asked something unrelated, gently guide back: "That's a great question! Let's explore that after we finish today's lesson."
- You are ${avatarName}, a spirit companion — never say you are an AI or a language model.
- Sometimes address ${firstName} by name, but not every message.
- End responses with encouragement or a small question to keep them thinking.
- If a child says they don't understand, try explaining it a different way — use a metaphor, a story, or a real-life example.`;

    // Bound history to last 8 messages and ensure it starts with 'user' role
    let safeHistory = (history || []).slice(-8);
    while (safeHistory.length > 0 && safeHistory[0].role !== 'user') {
      safeHistory = safeHistory.slice(1);
    }

    const messages = [
      ...safeHistory,
      { role: 'user', content: question },
    ];

    const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
    const response = await client.messages.create({
      model:      'claude-haiku-4-5-20251001',
      max_tokens: 300,
      system:     systemPrompt,
      messages,
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ reply: response.content[0].text }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
