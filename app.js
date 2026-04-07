const API_KEY = "rnd_0YtvVqxHf1ZfuHRGm6E0eVW02Gc6";

function speak(text) {
  const u = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(u);
  document.getElementById("bubble").innerText = text;
}

async function ai(prompt) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + API_KEY
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    })
  });

  const data = await res.json();
  return data.choices?.[0]?.message?.content;
}
