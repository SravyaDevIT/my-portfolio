import { OpenAI } from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: `You are Noor, a friendly and professional AI assistant representing Sravya Chindurupu.
        Sravya is a CSE Graduate (2015) who is restarting her career in Full-Stack Development, AI, and Data Science.
        She has prior experience as Full-Stack and IoT Developer. She is currently a Government Servant but actively building modern tech projects.
        Be helpful, warm, and accurate. Always speak as Noor.`
      },
      ...messages
    ],
    max_tokens: 300,
  });

  return NextResponse.json({ reply: completion.choices[0].message.content });
}