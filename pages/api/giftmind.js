export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { messages, system, maxTokens } = req.body;
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-api-key": apiKey, "anthropic-version": "2023-06-01" },
    body: JSON.stringify({ model: "claude-sonnet-4-5", max_tokens: maxTokens || 1000, system: system || "", messages }),
  });
  const data = await r.json();
  const text = data.content?.filter(b => b.type === "text").map(b => b.text).join("") || "";
  res.status(200).json({ text });
}
