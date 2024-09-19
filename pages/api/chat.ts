import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import type { NextApiRequest, NextApiResponse } from "next";

const openai = createOpenAI({
  // custom settings, e.g.
  compatibility: "strict", // strict mode, enable when using the OpenAI API
  // https://wx.fastx-ai.com/v1
  baseURL: "https://aigc.x-see.cn/v1",
});

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { prompt, systemPrompt } = req.body;

      const { textStream } = await streamText({
        model: openai("gpt-4o-mini"),
        messages: [
          {
            role: "user",
            content: prompt,
          },
          {
            role: "system",
            content: systemPrompt,
          },
        ],
        async onFinish({ text, toolCalls, toolResults, usage, finishReason }) {
          // implement your own logic here, e.g. for storing messages
          // or recording token usage
        },
      });
      for await (const textPart of textStream) {
        res.write(textPart);
      }
      res.end();
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "Failed to get chat completion from OpenAI" });
    }
  } else {
    // Handle any other HTTP method
    res.status(401).json({ error: "Failed to get chat completion from OpenAI" });
  }
}
