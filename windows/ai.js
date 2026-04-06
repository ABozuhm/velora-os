function openAI() {
  createWindow("Velora AI", `
    <input id="aiInput" placeholder="Ask Velora..." />
    <button onclick="runAI()">Run</button>
    <div id="aiOutput"></div>
  `);
}

async function runAI() {
  const input = document.getElementById("aiInput").value;
  const reply = await ai(input);

  document.getElementById("aiOutput").innerText = reply;
  speak(reply);
}
