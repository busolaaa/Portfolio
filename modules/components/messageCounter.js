import { qs } from "../utils/dom.js";

export function initMessageCounter() {
    const messageInput = qs("#message");
    const characterCount = qs(".character-count");

    if (!messageInput || !characterCount) {
        return;
    }

    messageInput.addEventListener("input", function () {
        const count = messageInput.value.length;
        characterCount.textContent = `${count} characters`;
    });
}
