import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Initialize OpenAI with API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export const runtime = "edge";

let lastRequestTime = 0;
const RATE_LIMIT_DELAY = 2000; // 2 seconds delay for rate limiting

// Define the type for the incoming request structure
interface ChatRequest {
  messages: { role: "user" | "assistant" | "system"; content: string }[];
}

export const POST = async (req: Request): Promise<Response> => {
  const now = Date.now();
  if (now - lastRequestTime < RATE_LIMIT_DELAY) {
    return new Response("Rate limit exceeded. Please wait a moment.", { status: 429 });
  }
  lastRequestTime = now;

  try {
    const { messages }: ChatRequest = await req.json();
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages,
    });
    
    const stream = OpenAIStream(response);
    return new StreamingTextResponse(stream);
  } catch (error: any) {
    console.error("error:", error);
    if (error?.status === 429) {
      return new Response("Quota exceeded or rate limit hit. Please try again later.", { status: 429 });
    }
    return new Response("Error with OpenAI API", { status: 500 });
  }
};