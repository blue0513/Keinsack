document.addEventListener("selectionchange", () => {
  const selectionText = window.getSelection().toString();
  if (selectionText) chrome.runtime.sendMessage({ text: selectionText });
});
