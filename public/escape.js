// escape.js
document.addEventListener('keydown', function(event) {
    // Check if the pressed key is the backtick
    if (event.key === 'Backtick') {
        newTab();
    }
});

function newTab() {
    const proxyLoc = "https://smodular-prx-1.onrender.com"

    const win = window.open("about:blank", "_blank");
    if (!win) {
      alert("please enable popups);
      return;
    }
  win.document.body.style.margin = "0";
  win.document.body.style.height = "100vh";

  const iframe = win.document.createElement("iframe");
  iframe.style.border = "none";
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.margin = "0";
  iframe.referrerPolicy = "no-referrer";
  iframe.src = proxyLoc;

  win.document.body.appendChild(iframe);
  window.close();
}
