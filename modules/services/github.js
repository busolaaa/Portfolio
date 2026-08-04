export async function fetchRepository(owner, repository) {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repository}`);

    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }

    return response.json();
}

export async function fetchRepositories(repositoriesToLoad) {
    return Promise.all(
        repositoriesToLoad.map(function (repo) {
            return fetchRepository(repo.owner, repo.name);
        })
    );
}

export function toPortfolioRepository(repository) {
    return {
        name: repository.name,
        description: repository.description ?? "No description",
        language: repository.language ?? "Not specified",
        stars: repository.stargazers_count,
        url: repository.html_url
    };
}
