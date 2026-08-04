import { projects } from "../data/projects.js";
import { qs, qsa } from "../utils/dom.js";

export function initPortfolioProjects() {
    const projectContainer = qs(".projects-grid");
    const filterButtons = qsa(".project-filters button");

    if (!projectContainer) {
        return;
    }

    function renderLoadingState() {
        projectContainer.innerHTML = '<div class="loading-wrapper"><div class="loader" aria-label="Loading"></div></div>';
    }

    function renderEmptyState() {
        projectContainer.innerHTML = "<p>No projects found.</p>";
    }

    function renderErrorState(message) {
        projectContainer.innerHTML = `<p>Error: ${message}</p>`;
    }

    function createProjectCard(project) {
        const article = document.createElement("article");
        article.classList.add("project-card");
        article.dataset.category = project.categories.join(" ");

        const heading = document.createElement("h3");
        heading.textContent = project.title;

        const summary = document.createElement("p");
        summary.textContent = project.summary;

        const tagsWrapper = document.createElement("div");
        tagsWrapper.classList.add("project-tags");

        project.tags.forEach(function (tag) {
            const span = document.createElement("span");
            span.textContent = tag;
            tagsWrapper.appendChild(span);
        });

        const linksWrapper = document.createElement("div");
        linksWrapper.classList.add("project-links");

        const demoLink = document.createElement("a");
        demoLink.href = project.links.demo;
        demoLink.textContent = "Live Demo";

        const sourceLink = document.createElement("a");
        sourceLink.href = project.links.source;
        sourceLink.textContent = "Source Code";

        linksWrapper.append(demoLink, sourceLink);
        article.append(heading, summary, tagsWrapper, linksWrapper);

        return article;
    }

    function renderProjectCards(projectList, container) {
        container.innerHTML = "";
        projectList.forEach(function (project) {
            container.appendChild(createProjectCard(project));
        });
    }

    function getProjectsByCategory(projectList, category) {
        if (category === "all") {
            return projectList;
        }

        return projectList.filter(function (project) {
            return project.categories.includes(category);
        });
    }

    async function loadPortfolioProjects() {
        renderLoadingState();

        try {
            if (projects.length === 0) {
                renderEmptyState();
                return;
            }

            renderProjectCards(projects, projectContainer);
        } catch (error) {
            renderErrorState(error.message);
        }
    }

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedFilter = button.dataset.filter;
            const filteredProjects = getProjectsByCategory(projects, selectedFilter);

            renderProjectCards(filteredProjects, projectContainer);

            filterButtons.forEach(function (filterButton) {
                filterButton.classList.remove("active");
            });

            button.classList.add("active");
        });
    });

    loadPortfolioProjects();
}
