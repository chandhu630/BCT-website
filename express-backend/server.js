const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors({ origin: "*" }));

const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());


// OpenAI API Key from Environment Variables
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

if (!OPENAI_API_KEY) {
  console.error("Error: OpenAI API key is missing. Please set it in the .env file.");
  process.exit(1);
}

// Sample NGO Data
const ngoData = {
  overview: {
    established: "1976",
    focus: "Rural prosperity through integrated rural development programs.",
    vision: "Transform villages into self-sustaining models.",
  },
  education: {
    bct_residential_high_school: {
      inception: "1995",
      approach: "Value-based, skill-oriented, and rurally-biased education.",
    },
  },
  programs: {
    agriculture: "Improved farming practices benefiting 45,000 farmers annually.",
    rehabilitation: "Empowering persons with disabilities through health and skill programs.",
  },
  mainpersons: {
    Bct: "Sri B Sri Ram Murty MIIM (USA) Secretary Heading the organization since 2009, he has been in the field of grassroots development for 26 years now. With the experience of working in Global Fortune 500 company, at BCT, he has handled many projects in education, skilling, livelihoods, rehabilitation of persons with disabilities, community development,women empowerment. He founded the Grameena Incubation Center(GIC) with an aim of developing entrepreneurship and creating access to appropriate technologies. GIC also aims to build an ecosystem for rural start-ups.",
    Founder: "Dr. BV Parameswara Rao: Visionary in rural development, blending local wisdom with scientific advancements. Founded BCT in 1976 with a mission to empower rural communities through education, skill development, and sustainable practices."
  },
  maindata: "BCT, established in 1976, focuses on transforming rural communities in Andhra Pradesh through education, skill development, healthcare, and sustainable agricultural practices. Its mission is to empower villages to become self-reliant hubs of literacy, health, and economic growth.",
};

// API Endpoint to Handle User Queries
app.post("/query", async (req, res) => {
  const { userMessage } = req.body;

  if (!userMessage) {
    return res.status(400).json({ error: "Missing userMessage in request body" });
  }

  try {
    // Format content for GPT
    const context = JSON.stringify(ngoData, null, 2);
    const prompt = `
You are a chatbot for Bhagavatula Charitable Trust (BCT). Answer the user's questions based on the following data:

${context}

User: ${userMessage}
Chatbot:`;

    // OpenAI API Call
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 200,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    // Respond with GPT's answer
    const botMessage = response.data.choices[0]?.message?.content || "No response from GPT";
    res.json({ botMessage });
  } catch (error) {
    console.error("Error calling OpenAI API:", error.response?.data || error.message);
    res.status(500).json({ error: "Failed to get response from GPT" });
  }
});

// Start Server
app.get('/get', (req, res) => {
  res.send('Hello');
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
