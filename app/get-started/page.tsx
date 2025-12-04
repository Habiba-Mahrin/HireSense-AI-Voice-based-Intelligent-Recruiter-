"use client";

import { useState, useEffect } from "react";
import Vapi from "@vapi-ai/web";

export default function GetStartedPage() {
  const [questions, setQuestions] = useState<string[] | null>(null);
  const [vapi, setVapi] = useState<any>(null);

  // ✅ Initialize Vapi on the client side ONLY
  useEffect(() => {
    if (typeof window !== "undefined") {
      const v = new Vapi(process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY!);
      setVapi(v);
    }
  }, []);

  // ==========================
  // FETCH TEXT INTERVIEW
  // ==========================
  async function startInterview() {
    const res = await fetch("/api/interviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        jobDescription: "Software Engineer",
      }),
    });

    const data = await res.json();
    setQuestions(data.questions);
  }

  // ==========================
  // START VAPI MOCK INTERVIEW
  // ==========================
  async function startMockInterview() {
    if (!vapi) {
      alert("Vapi is still loading...");
      return;
    }

    await vapi.startSession({
      assistant: process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID!,
      input: {
        model: {
          prompt:
            "You are a technical interviewer. Ask questions one at a time, wait for the answer, then ask a follow-up question. Keep the interview structured.",
        },
      },
    });
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl mb-4">AI Interview</h1>

      {/* TEXT Q/A INTERVIEW */}
      <button
        onClick={startInterview}
        className="p-3 bg-blue-600 text-white rounded mr-3"
      >
        Start Interview
      </button>

      {/* VAPI VOICE INTERVIEW */}
      <button
        onClick={startMockInterview}
        className="p-3 bg-purple-600 text-white rounded"
      >
        Start Mock Interview (Voice)
      </button>

      {questions && (
        <pre className="mt-6 bg-gray-100 p-4 rounded whitespace-pre-wrap">
          {questions}
        </pre>
      )}
    </div>
  );
}
