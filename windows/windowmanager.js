function createWindow(title, content) {
  const win = document.createElement("div");
  win.className = "window";
  win.style.top = "100px";
  win.style.left = "100px";

  win.innerHTML = `
    <div class="titlebar">${title}</div>
    ${content}
  `;

  document.body.appendChild(win);
}
