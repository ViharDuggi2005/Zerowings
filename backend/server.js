import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { getKnowledgeBaseContext } from "./knowledgeBase.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"], // Vite default port
    credentials: true,
  }),
);
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Validate API Key
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ Error: GEMINI_API_KEY is not set in .env file");
  process.exit(1);
}

// Initialize Gemini AI
let ai;
let model;

try {
  ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const modelName = "gemini-2.5-flash";
  model = ai.models.generateContent;
  console.log(`✅ Gemini AI initialized successfully with model: ${modelName}`);
} catch (error) {
  console.error("❌ Failed to initialize Gemini AI:", error.message);
  process.exit(1);
}

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running" });
});

// Function to clean markdown formatting
function cleanMarkdown(text) {
  return text
    .replace(/\*\*/g, "") // Remove bold **text**
    .replace(/\*/g, "") // Remove italic *text*
    .replace(/_/g, "") // Remove underscores
    .replace(/#+\s/g, "") // Remove headings
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // Convert markdown links
    .trim();
}

// Chat endpoint
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    // Validate input
    if (!message || typeof message !== "string" || message.trim() === "") {
      return res.status(400).json({
        error: "Invalid input",
        message: "Message field is required and must be a non-empty string",
      });
    }

    console.log(`📨 User message: ${message.substring(0, 50)}...`);

    // Get knowledge base context
    const knowledgeBaseContext = getKnowledgeBaseContext();

    // Create a detailed system prompt that emphasizes the knowledge base
    const systemPrompt = `You are a specialized chatbot for Zerowings Aerospace. Your ONLY job is to answer questions about Zerowings products, services, and company information using the knowledge base below.

IMPORTANT INSTRUCTIONS:
1. You ONLY provide information from the knowledge base provided
2. Never mention general AI capabilities
3. Always respond as if you represent Zerowings Aerospace
4. Be specific and reference product/service names when relevant
5. If asked about something not in the knowledge base, say "I don't have information about that, please contact us for more details"

${knowledgeBaseContext}
---END OF KNOWLEDGE BASE---

Now answer the user's question using ONLY the information above:`;

    // Make request to Gemini API with system prompt
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `${systemPrompt}\n\nUser Question: ${message}`,
            },
          ],
        },
      ],
    });

    // Extract text from response
    let reply = "";

    if (result.candidates && result.candidates[0]) {
      const content = result.candidates[0].content;
      if (content && content.parts && content.parts[0]) {
        reply = content.parts[0].text || "No response generated";
      }
    } else if (result.text) {
      reply = result.text;
    } else {
      reply = "No response generated";
    }

    console.log(`✅ Bot reply: ${reply.substring(0, 50)}...`);

    res.json({
      success: true,
      reply: reply,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("❌ Chat error:", error.message);

    res.status(500).json({
      success: false,
      error: "Failed to process your message",
      message: error.message || "Internal server error",
    });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: "Not Found",
    message: `Route ${req.method} ${req.path} does not exist`,
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("❌ Unhandled error:", err);
  res.status(500).json({
    error: "Internal Server Error",
    message: err.message || "Something went wrong",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════╗
║  🚀 Zerowings Backend Server Started   ║
║  📍 URL: http://localhost:${PORT}         ║
╚════════════════════════════════════════╝
  `);
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("\n👋 Shutting down gracefully...");
  process.exit(0);
});
