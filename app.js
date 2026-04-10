export default function handler(req, res) {
  // 🌍 CORS HEADERS (MUSS VOR ALLES)
  res.setHeader("Access-Control-Allow-Origin", "https://winner0283tech.github.io");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Preflight Request (WICHTIG)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only POST allowed
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { prompt, code } = req.body || {};

  return res.status(200).json({
    result: `AI received: ${prompt || "empty prompt"}`
  });
}
