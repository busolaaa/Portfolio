import { fetchRepositories, toPortfolioRepository } from "../services/github.js";
import { qs } from "../utils/dom.js";

export function initGitHubRepositories() {
    const repositoryContainer = qs("#repositoryContainer");

    if (!repositoryContainer) {
        return;
    }

    const repositoriesToLoad = [
        { owner: "facebook", name: "react" },
        { owner: "vercel", name: "next.js" }
    ];

    function createRepositoryCard(repository) {
        const card = document.createElement("div");
        card.className = "repository-card";
        card.innerHTML = `
      <h2>${repository.name}</h2>
      <p>${repository.description}</p>
      <p><strong>Language:</strong> ${repository.language}</p>
      <p><strong>Stars:</strong> ${repository.stars}</p>
      <a href="${repository.url}" target="_blank">View Repository</a>
    `;

        return card;
    }

    async function loadAllRepositories() {
        repositoryContainer.innerHTML = '<div class="loader" aria-label="Loading"></div>';

        try {
            const rawRepositories = await fetchRepositories(repositoriesToLoad);
            const repositoryModels = rawRepositories.map(toPortfolioRepository);

            repositoryContainer.innerHTML = "";
            repositoryModels.forEach(function (repository) {
                repositoryContainer.appendChild(createRepositoryCard(repository));
            });
        } catch (error) {
            repositoryContainer.innerHTML = `<p>Couldn't load repositories: ${error.message}</p>`;
        }
    }

    loadAllRepositories();
}
