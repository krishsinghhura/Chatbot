require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { HfInference } = require("@huggingface/inference");

const app = express();
const PORT = 5000;
const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

app.use(cors());
app.use(bodyParser.json());

app.post("/chat", async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: "Text input is required" });

    const response = await hf.textGeneration({
      model: "tiiuae/falcon-7b-instruct",
      inputs: text,
      parameters: { max_new_tokens: 600, temperature: 0.7, top_p: 0.9 },
    });

    res.json({ response: response.generated_text });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
