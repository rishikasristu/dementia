import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/speak', async (req, res) => {
  try {
    const { text, language } = req.body;

    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    const voiceMap = {
      en: 'en-IN-NeerjaNeural',
      hi: 'hi-IN-SwaraNeural',
      te: 'te-IN-ShrutiNeural',
      as: 'as-IN-PriyomNeural'
    };

    const voice = voiceMap[language] || voiceMap.en;

    const escapeXml = (value) =>
      value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');

    const ssml = `
      <speak version="1.0"
        xmlns="http://www.w3.org/2001/10/synthesis"
        xml:lang="${language === 'as' ? 'as-IN' : language + '-IN'}">
        <voice name="${voice}">
          <prosody rate="-15%">
            ${escapeXml(text)}
          </prosody>
        </voice>
      </speak>
    `;

    const response = await fetch(
      'https://centralindia.tts.speech.microsoft.com/cognitiveservices/v1',
      {
        method: 'POST',
        headers: {
          'Ocp-Apim-Subscription-Key': process.env.AZURE_SPEECH_KEY,
          'Content-Type': 'application/ssml+xml',
          'X-Microsoft-OutputFormat': 'audio-24khz-48kbitrate-mono-mp3'
        },
        body: ssml
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Azure Speech Error:', errorText);

      return res.status(response.status).json({
        error: 'Azure Speech request failed'
      });
    }

    const audioBuffer = Buffer.from(await response.arrayBuffer());

    res.set({
      'Content-Type': 'audio/mpeg',
      'Content-Length': audioBuffer.length
    });

    res.send(audioBuffer);

  } catch (error) {
    console.error('Speech server error:', error);

    res.status(500).json({
      error: 'Speech service error'
    });
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Speech server running on http://localhost:${PORT}`);
});