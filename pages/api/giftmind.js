export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Méthode non autorisée" });
  const { messages, system, maxTokens } = req.body;
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return res.status(500).json({ error: "Clé API manquante" });
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-api-key": apiKey, "anthropic-version": "2023-06-01" },
      body: JSON.stringify({ model: "claude-sonnet-4-5", max_tokens: maxTokens || 1000, system: system || "", messages }),
    });
    const data = await response.json();
    const text = data.content?.filter(b => b.type === "text").map(b => b.text).join("") || "";
    return res.status(200).json({ text });
  } catch (err) {
    return res.status(500).json({ error: "Erreur interne" });
  }
}
