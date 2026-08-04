import { initThemeToggle } from "./modules/components/themeToggle.js";
import { initMobileMenu } from "./modules/components/mobileMenu.js";
import { initContactForm } from "./modules/components/contactForm.js";
import { initMessageCounter } from "./modules/components/messageCounter.js";
import { initPortfolioProjects } from "./modules/features/portfolioProjects.js";
import { initGitHubRepositories } from "./modules/features/githubRepositories.js";

const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const heroHeading = document.querySelector("h1");
console.log(heroHeading);

initThemeToggle();
initMobileMenu();
initContactForm();
initMessageCounter();
initPortfolioProjects();
initGitHubRepositories();
