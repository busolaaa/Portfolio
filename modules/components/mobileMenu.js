import { qs } from "../utils/dom.js";

export function initMobileMenu() {
    const menuToggle = qs(".menu-toggle");
    const navLinks = qs(".nav-links");

    if (!menuToggle || !navLinks) {
        return;
    }

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("is-open");
    });
}
