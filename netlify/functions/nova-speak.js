exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  try {
    const { text } = JSON.parse(event.body || '{}');
    if (!text) return { statusCode: 400, body: JSON.stringify({ error: 'Missing text' }) };

    const voiceId = process.env.ELEVENLABS_VOICE_ID || 'aUNOP2y8xEvi4nZebjIw';
    const apiKey  = process.env.ELEVENLABS_API_KEY;

    if (!apiKey) {
      return { statusCode: 500, body: JSON.stringify({ error: 'ELEVENLABS_API_KEY not set' }) };
    }

    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'xi-api-key':   apiKey,
        'Content-Type': 'application/json',
        'Accept':       'audio/mpeg',
      },
      body: JSON.stringify({
        text,
        model_id: 'eleven_turbo_v2_5',
        voice_settings: {
          stability:        0.5,
          similarity_boost: 0.75,
          style:            0.3,
          use_speaker_boost: true,
        },
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error(`ElevenLabs error ${response.status}:`, detail);
      return { statusCode: 502, body: JSON.stringify({ error: `ElevenLabs ${response.status}`, detail }) };
    }

    const buffer = Buffer.from(await response.arrayBuffer());
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ audio: buffer.toString('base64') }),
    };
  } catch (err) {
    console.error('nova-speak error:', err.message);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
