import { GoogleGenAI, Modality, GenerateContentResponse } from "@google/genai";

// Access the API key from Vite's environment variables
const apiKey = import.meta.env.VITE_API_KEY;
if (!apiKey) {
  throw new Error("VITE_API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: apiKey });

export const translateText = async (text: string, sourceLang: string, targetLang: string): Promise<string> => {
  if (!text.trim()) return '';
  try {
    const prompt = `Translate the following text from ${sourceLang} to ${targetLang}. Do not add any preamble or explanation, just the translated text.\n\nText: "${text}"`;
    
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    
    return response.text.trim();
  } catch (error) {
    console.error("Error translating text:", error);
    throw new Error("Failed to translate text.");
  }
};

export const textToSpeech = async (text: string): Promise<string> => {
  if (!text.trim()) return '';
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: 'Kore' },
            },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) {
        throw new Error("No audio data received from API.");
    }
    return base64Audio;
  } catch (error) {
    console.error("Error generating speech:", error);
    throw new Error("Failed to generate speech.");
  }
};
