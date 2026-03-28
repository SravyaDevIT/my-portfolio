import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    // Build a clean prompt (this avoids the role error completely)
    const prompt = messages
      .map((msg: any) => {
        if (msg.role === 'user') return `User: ${msg.content}`;
        if (msg.role === 'assistant') return `Noor: ${msg.content}`;
        return msg.content;
      })
      .join('\n\n');

    const result = await model.generateContent(
      `You are Noor, a friendly and professional AI assistant for Sravya Chindurupu.\n` +
      `Sravya is a CSE Graduate (2015) restarting her career in Full-Stack Development, AI, and Data Science.\n` +
      `Be helpful, warm, and accurate. Always reply as Noor.\n\n` +
      prompt
    );

    const reply = result.response.text();

    return NextResponse.json({ reply });

  } catch (error: any) {
    console.error("🚨 Gemini Error:", error);
    return NextResponse.json(
      { error: error.message || "Noor is not responding right now" },
      { status: 500 }
    );
  }
}