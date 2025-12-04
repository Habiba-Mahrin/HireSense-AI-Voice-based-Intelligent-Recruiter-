import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { jobDescription } = await req.json();

    const prompt = `Generate 5 interview questions for the following job role: ${jobDescription}`;

    // NEW OpenAI SDK format
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are an interview question generator." },
        { role: "user", content: prompt }
      ],
      max_tokens: 300
    });

    const questions = completion.choices[0].message.content;

    return NextResponse.json({ questions });
  } catch (error: any) {
    console.error("API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
