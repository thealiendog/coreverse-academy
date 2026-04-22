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

    // Use the /with-timestamps endpoint so we get character-level timing data
    // alongside the audio. This powers accurate word-level karaoke in the client.
    const response = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/with-timestamps`, {
      method: 'POST',
      headers: {
        'xi-api-key':   apiKey,
        'Content-Type': 'application/json',
        'Accept':       'application/json',
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

    // /with-timestamps returns JSON: { audio_base64, alignment, normalized_alignment }
    const data = await response.json();
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ audio: data.audio_base64, alignment: data.alignment }),
    };
  } catch (err) {
    console.error('nova-speak error:', err.message);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
