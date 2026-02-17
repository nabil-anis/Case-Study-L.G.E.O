
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const getAIClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API Key missing. Intelligence features will be limited.");
  }
  return new GoogleGenAI({ apiKey: apiKey || '' });
};

export const generateInnovationResponse = async (prompt: string): Promise<string> => {
  const ai = getAIClient();
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are the AI technical representative for L.G.E.O (Lead Gen and Email Outreach), an internal system built for Wise Business Plans. You are an expert in n8n automation, Apify web scraping, and Google Sheets integrations. Your goal is to explain how the system scrapes data, saves it to Google Sheets for backup, and uses a staggered email loop to contact leads safely.",
        temperature: 0.7,
      },
    });
    return response.text || "Analyzing request...";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Our AI systems are currently at maximum capacity. Please try again shortly.";
  }
};

export async function* generateInnovationStream(prompt: string) {
  const ai = getAIClient();
  try {
    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are the AI assistant for L.G.E.O. Explain how our internal tool automates lead discovery using React, n8n, Apify, and Google Sheets. Emphasize the two-step process: 1. Scrape & Save to Sheet. 2. User Review & Email Loop.",
        temperature: 0.7,
      },
    });

    for await (const chunk of responseStream) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  } catch (error) {
    console.error("Gemini Stream Error:", error);
    yield "Connection to Intelligence Core interrupted.";
  }
}

export const brainstormIdeas = async (industry: string): Promise<string> => {
  const ai = getAIClient();
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `The user works in the ${industry} industry. Generate 3 specific ways an 'n8n + Apify + Google Sheets' automation architecture could be used for lead generation in their industry. Format as bullet points. Include "Potential Efficiency Gain" for each.`,
    });
    return response.text || "No solutions generated.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error generating solutions.";
  }
};
