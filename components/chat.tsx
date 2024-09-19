"use client";
import { AiChat, ChatAdapter, StreamingAdapterObserver } from "@nlux/react";
import { highlighter } from "@nlux/highlighter";
import "@nlux/themes/nova.css";

export default function Chat({
  welcome,
  teacherName,
  systemPrompt,
}: {
  welcome: string;
  teacherName: string;
  systemPrompt: string;
}) {
  const chatAdapter: ChatAdapter = {
    streamText: async (prompt: string, observer: StreamingAdapterObserver) => {
      const response = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ prompt: prompt, systemPrompt: systemPrompt }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.status !== 200) {
        observer.error(new Error("Failed to connect to the server"));
        return;
      }

      if (!response.body) {
        return;
      }

      // Read a stream of server-sent events
      // and feed them to the observer as they are being generated
      const reader = response.body.getReader();
      const textDecoder = new TextDecoder();

      while (true) {
        const { value, done } = await reader.read();
        if (done) {
          break;
        }

        const content = textDecoder.decode(value);
        if (content) {
          observer.next(content);
        }
      }

      observer.complete();
    },
  };

  return (
    <AiChat
      adapter={chatAdapter}
      personaOptions={{
        assistant: {
          name: teacherName,
          avatar: "https://docs.nlkit.com/nlux/images/personas/alex.png",
          tagline: welcome,
        },
      }}
      displayOptions={{ colorScheme: "dark" }}
      messageOptions={{ syntaxHighlighter: highlighter }}></AiChat>
  );
}
