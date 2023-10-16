let searchCandidateText = "";

function setText(text) {
  searchCandidateText = text.trim();
}
function getText() {
  return searchCandidateText.trim();
}
function clearText() {
  setText("");
}
async function search(text) {
  await chrome.search.query({ text: text, disposition: "NEW_TAB" });
}

chrome.runtime.onMessage.addListener((message) => {
  const { text } = message;
  setText(text);
});

chrome.commands.onCommand.addListener(async (command) => {
  switch (command) {
    case "search": {
      const text = getText();
      if (text) {
        await search(text);
        clearText();
        break;
      }
    }
  }
});
