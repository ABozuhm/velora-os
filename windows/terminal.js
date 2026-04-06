function openTerminal() {
  createWindow("Terminal", `
    <div id="termOut"></div>
    <input id="termInput" placeholder="command..." />
  `);

  document.getElementById("termInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") runCmd();
  });
}

function runCmd() {
  const cmd = document.getElementById("termInput").value;
  let out = "";

  if (cmd === "ls") out = "assets windows app.js";
  else if (cmd === "help") out = "ls, help";
  else out = "unknown command";

  document.getElementById("termOut").innerText += `\n> ${cmd}\n${out}`;
}
