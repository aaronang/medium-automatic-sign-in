function clickGoogleButton() {
  setTimeout(() => {
    const googleButton = document.querySelector(".js-googleButton");
    if (googleButton) googleButton.click();
  }, 1);
}

function handleNodeInserted(e) {
  if (e.target.classList.contains("overlay")) {
    clickGoogleButton();
  }
}

const body = document.querySelector(
  "body.browser-chrome.os-mac.is-withMagicUnderlinesv-glyph.v-glyph--m2.is-js.is-withMagicUnderlines"
);
if (body) {
  body.addEventListener("DOMNodeInserted", handleNodeInserted);
}

const userButton = document.querySelector(".js-userActions");
if (!userButton) {
  const button = document.querySelector(".metabar .js-signInButton");
  if (button) setTimeout(() => button.click(), 1);
}

clickGoogleButton();
