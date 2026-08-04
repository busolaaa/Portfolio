import { qs } from "../utils/dom.js";
import { getStoredTheme, setStoredTheme } from "../storage/themeStorage.js";

export function initThemeToggle() {
    const themeToggle = qs(".theme-toggle");

    if (!themeToggle) {
        return;
    }

    const savedTheme = getStoredTheme();

    function applyTheme(theme) {
        if (theme === "dark") {
            document.body.classList.add("dark-theme");
            document.body.dataset.theme = "dark";
        } else {
            document.body.classList.remove("dark-theme");
            document.body.dataset.theme = "light";
        }
    }

    function getNextTheme(currentTheme) {
        return currentTheme === "dark" ? "light" : "dark";
    }

    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        document.body.dataset.theme = "light";
    }

    themeToggle.addEventListener("click", function () {
        const currentTheme = document.body.dataset.theme || "light";
        const nextTheme = getNextTheme(currentTheme);

        applyTheme(nextTheme);
        setStoredTheme(nextTheme);
    });
}
