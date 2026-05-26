exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

  try {
    const { text, voiceId: requestedVoiceId, modelId: requestedModelId } = JSON.parse(event.body || '{}');
    if (!text) return { statusCode: 400, body: JSON.stringify({ error: 'Missing text' }) };

    const voiceId = requestedVoiceId || process.env.ELEVENLABS_VOICE_ID || 'XfNU2rGpBa01ckF309OY';
    const modelId = requestedModelId || 'eleven_turbo_v2_5';
    const apiKey  = process.env.ELEVENLABS_API_KEY;
    console.log(`[nova-speak] requestedVoiceId="${requestedVoiceId}" resolvedVoiceId="${voiceId}" modelId="${modelId}" textLen=${text?.length}`);

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
        model_id: modelId,
        voice_settings: {
          stability:        0.5,
          similarity_boost: 0.75,
          style:            0.3,
          use_speaker_boost: true,
          speed:            0.85,
        },
      }),
    });

    console.log(`[nova-speak] ElevenLabs response status=${response.status} for voiceId="${voiceId}"`);
    if (!response.ok) {
      const detail = await response.text();
      console.error(`ElevenLabs error ${response.status}:`, detail);
      return { statusCode: 502, body: JSON.stringify({ error: `ElevenLabs ${response.status}`, detail }) };
    }

    // /with-timestamps returns JSON: { audio_base64, alignment, normalized_alignment }
    const data = await response.json();

    // Return raw binary audio as the body (avoids iOS Safari bugs with large
    // base64 data URIs in Audio elements — truncation, silent failures, etc.).
    // Alignment timestamps travel in the X-Alignment header so the client can
    // drive karaoke without a second request.
    const audioBuffer = Buffer.from(data.audio_base64, 'base64');
    return {
      statusCode:      200,
      isBase64Encoded: true,       // tells Netlify the body is base64-encoded binary
      headers: {
        'Content-Type':  'audio/mpeg',
        'X-Alignment':   JSON.stringify(data.alignment),
        'Cache-Control': 'no-store',
      },
      body: audioBuffer.toString('base64'),
    };
  } catch (err) {
    console.error('nova-speak error:', err.message);
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
