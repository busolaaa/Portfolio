const THEME_KEY = "theme";

export function getStoredTheme() {
    try {
        return localStorage.getItem(THEME_KEY);
    } catch (error) {
        console.warn("Theme storage is unavailable.", error);
        return null;
    }
}

export function setStoredTheme(theme) {
    try {
        localStorage.setItem(THEME_KEY, theme);
    } catch (error) {
        console.warn("Theme storage could not be updated.", error);
    }
}
