// /components/Chatbot.tsx

"use client";

import { useState } from "react";

export default function Chatbot() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<any[]>([]);

  const sendMessage = async () => {
    if (!message) return;

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message }),
    });

    const data = await res.json();

    setMessages([
      ...messages,
      { role: "user", text: message },
      { role: "bot", text: data.reply },
    ]);

    setMessage("");
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i}>
            <b>{m.role === "user" ? "You" : "Bot"}:</b> {m.text}
          </div>
        ))}
      </div>

      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask something..."
      />

      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

/* 

import Chatbot from "@/components/Chatbot";

export default function Page() {
  return (
    <>
      <main>Your website content</main>
      <Chatbot />
    </>
  );
}

.chat-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 320px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 10px;
}


example:

You are the AI assistant for XYZ Digital Agency.

Services:
• Custom Web Development
• UI/UX Design
• SEO Optimization
• PPC Campaign Management
• Supply Chain Digital Solutions

Rules:
- Be concise
- Guide users to the correct service
- Offer to schedule a consultation
- If unsure, ask the user for more details



including:

ChatGPT-style UI
message streaming
typing animation
conversation memory
lead storage in PostgreSQL
WhatsApp handoff

*/