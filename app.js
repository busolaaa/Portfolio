// const myName = "Busola";
// const myAge = 37;
// const isCompEngStudent = true;
// const skills = 10;
// console.log(typeof myName);
// console.log(typeof myAge);
// console.log(typeof isCompEngStudent);
// console.log(typeof skills);

// let productPrice = 5000;
// let productQuantity = 5;
// let totalCost = productPrice * productQuantity;
// console.log(totalCost)

// let testScore = 70;
// let passMark = 50;
// let isPassed = testScore >= passMark;
// console.log(isPassed)

// const userName = "Busola";
// let queryMessage = "Enter you pin, " + userName;
// console.log(queryMessage)

// let number = 15;
// let isNumberEven = number % 2 == 0;
// console.log(isNumberEven);

// let grade = 49;
// // if(grade>= 50){
// //     console.log("You passed!")
// // }
// if (grade >= 70) {
//     console.log("A");
// }
// else if (grade >= 60) {
//     console.log("B");
// }
// else if (grade >= 50) {
//     console.log("C");
// }
// else if (grade >= 40) {
//     console.log("D");
// }
// else {
//     console.log("F")
// }

// const age = 18;
// if (age >= 18) {
//     console.log("You can be registered");
// }
// else {
//     console.log("You can't register");
// }

// let day = "Saturday";
// switch (day) {
//     case "Monday":
//         console.log("Start of the week");
//         break;
//     case "Tuesday":
//         console.log("It's the second day of the week");
//         break;
//     case "Wednesday":
//         console.log("It's the 3rd week of the day");
//         break;
//     case "Thursday":
//         console.log("It's the 3rd day");
//         break;
//     case "friday":
//         console.log("It's the last day of the week");
//         break;
//     case "Saturday":
//     case "Sunday":
//         console.log("It's the weekend");
//         break;
//     default:
//         console.log("It's a day of the week");
// }

// function greeting(name) {
//     console.log(`Welcome, ${name}.`);
// }

// greeting("Busola");

// function myCost(product, quantity) {
//     return product * quantity;
// }

// console.log(myCost(2000, 10));

// function evenNumber(number) {
//     if (number % 2 == 0) {
//         console.log("This is an even number");
//     }
//     else {
//         console.log("It's not an even number!")
//     }
// }

// evenNumber(39)

// function gradeChecker(grade) {
//     if (grade >= 70) {
//         console.log("A");
//     }
//     else if (grade >= 60) {
//         console.log("B");
//     }
//     else if (grade >= 50) {
//         console.log("C");
//     }
//     else if (grade >= 40) {
//         console.log("D");
//     }
//     else {
//         console.log("F")
//     }
// }
// gradeChecker(70)

// // basically return needs a console.log to print out the answer
// function ageCalc(currentYear, birthYear) {
//     return currentYear - birthYear;
// }
// console.log(ageCalc(2026, 1993));

// let fruits = ["Orange", "Apple", "Watermelon", "Grapes"];
// console.log(fruits[0]);
// console.log(fruits[3]);
// fruits.push("Kiwi");
// console.log(fruits);
// fruits.shift();
// console.log(fruits);
// console.log(fruits.includes("JavaScript"));
// console.log(fruits.length)

// Busola = {
//     name: "Olubusola",
//     age: 37,
//     school: "Bowen",
//     mySkills: ["HTML", "CSS", "JavaScript"]
// }
// console.log(Busola.name);
// Busola.age = 27;
// console.log(Busola);
// Busola.goal = "Backend-dev";
// console.log(Busola);

// projectArray = [
//     {
//         title: "Portfolio-website",
//         completed: true
//     },
//     {
//         title: "Resturant Landing-page",
//         completed: true
//     },
//     {
//         title: "Recipe-Page",
//         completed: true
//     }
// ]
// console.log(projectArray[1].title)

// for (i = 1; i <= 10; i++) {
//     console.log(i)
// }

// const myfruits = ["Orange", "Apple", "Watermelon", "Grapes"];
// // let length = myfruits.length;
// for (i = 0; i <= myfruits.length; i++) {
//     console.log(myfruits[i]);
// }

// arrayScores = [70, 80, 90, 60];
// let totalArrayScore = 0
// for (arrayScore of arrayScores) {
//     totalArrayScore += arrayScore;
// }
// console.log(totalArrayScore);

// arrayScores = [70, 80, 90, 60];
// for (const arrayScore of arrayScores) {
//     if (arrayScore == 90) {
//         console.log(arrayScore);
//     }
// }

// myprojectArrays = [
//     {
//         title: "Portfolio-website",
//         completed: true
//     },
//     {
//         title: "Resturant Landing-page",
//         completed: true
//     },
//     {
//         title: "Recipe-Page",
//         completed: true
//     }
// ]
// // let projectLength = myprojectArrays.length
// // for(i=0; i<= projectLength; i++){
// //     console.log(myprojectArrays.title);
// // }
// for (myprojectArray of myprojectArrays) {
//     console.log(myprojectArray.title);
// }

// const studentRecords = [
//     {
//         studentName: "Afolabi Esther",
//         scores: [50, 40, 60]
//     },
//     {
//         studentName: "Michael David",
//         scores: [70, 80, 90]
//     },
//     {
//         studentName: "Nelson Bolu",
//         scores: [95, 85, 75]
//     }
// ];

// const recordLength = studentRecords.length;
// for (let i = 0; i < recordLength; i++) {
//     let totalStudentScore = 0;

//     for (let j = 0; j < studentRecords[i].scores.length; j++) {
//         totalStudentScore += studentRecords[i].scores[j];
//     }

//     const average = totalStudentScore / studentRecords[i].scores.length;
//     console.log(studentRecords[i].studentName);
//     console.log(`Average: ${average}`);
// }

//portfolio website javascript
const yearElement = document.querySelector("#year");
const currentYear = new Date().getFullYear();

yearElement.textContent = currentYear;

//Feature 2: Theme Toggle With Saved Preference
const themeToggle = document.querySelector(".theme-toggle");
// STEP 1
const savedTheme = localStorage.getItem("theme");

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
    if (currentTheme === "dark") {
        return "light";
    }

    return "dark";
}

// Step 2
if (savedTheme) {
    applyTheme(savedTheme);
} else {
    document.body.dataset.theme = "light";
}

themeToggle.addEventListener("click", function () {
    // Step 3
    const currentTheme = document.body.dataset.theme || "light";
    const nextTheme = getNextTheme(currentTheme);

    applyTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
});

// Feature 3: Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("is-open");
});

const heroHeading = document.querySelector("h1");
console.log(heroHeading);


// Feature 4: Contact Form Validation (Refactored)
const contactForm = document.querySelector(".contact-form");

// 1. READ — pull all form values into one clean object
function getInquiryData(form) {
    const data = new FormData(form);

    return {
        name: data.get("name")?.trim() ?? "",
        email: data.get("email")?.trim().toLowerCase() ?? "",
        message: data.get("message")?.trim() ?? ""
    };
}

// 2. SMALL VALIDATION FUNCTIONS — one rule, one function
function validateName(name) {
    return name.trim() === "" ? "Please enter your name." : null;
}

function validateEmail(email) {
    if (email.trim() === "") {
        return "Please enter a valid email.";
    }
    if (!email.includes("@")) {
        return "Email must contain @";
    }
    return null;
}

function validateMessage(message) {
    return message.trim().length < 10
        ? "Your message should be at least 10 characters."
        : null;
}

// 3. STRUCTURED ERRORS — combine all rules into one result
function validateInquiry(formData) {
    const errors = {
        name: validateName(formData.name),
        email: validateEmail(formData.email),
        message: validateMessage(formData.message)
    };

    const hasErrors = Object.values(errors).some(Boolean);

    return {
        isValid: !hasErrors,
        errors
    };
}

// 4. ACCESSIBLE ERROR DISPLAY — one error at a time
function displayFieldError(fieldName, message) {
    console.log("This is for:", fieldName);
    const field = document.querySelector(`.form-${fieldName}`);

    if (!field) {
        return;
    }

    console.log(`Field ${fieldName} exists!`);

    field.textContent = message;
}

// 5. DISPLAY ALL ERRORS AT ONCE
function displayFormErrors(errors) {
    Object.keys(errors).forEach(function (fieldName) {
        displayFieldError(fieldName, errors[fieldName]);
    });
}

function focusFirstInvalidField(errors) {
  const firstErrorField = Object.keys(errors).find(function (fieldName) {
    return errors[fieldName] !== "";
  });

  if (firstErrorField) {
    document.querySelector(`[name="${firstErrorField}"]`)?.focus();
  }
}

// 6. COORDINATOR — ties everything together on submit
let isSubmitting = false;
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (isSubmitting){
        return;
    }
    const formData = getInquiryData(contactForm);
    const validation = validateInquiry(formData);
    console.log("Validation Object: ", validation);

    displayFormErrors(validation.errors);

    const formMessage = document.querySelector(".form-result");

    if (!validation.isValid) {
        formMessage.textContent = "";
        focusFirstInvalidField(validation.errors);
        return;
    }

    isSubmitting = true;
    const submitButton = contactForm.querySelector("button[type='submit']");
    if (submitButton){
        submitButton.disabled = true;
    }
    formMessage.textContent = "Thank you. Your message is ready to be sent.";
    contactForm.reset();
});
//Message Character Counter
const messageInput = document.querySelector("#message");
const characterCount = document.querySelector(".character-count");

messageInput.addEventListener("input", function () {
    const count = messageInput.value.length;
    characterCount.textContent = `${count} characters`;
});

//Project Filtering
const filterButtons = document.querySelectorAll(".project-filters button");


// 1. DATA — your project card as an object
const projectContainer = document.querySelector(".projects-grid");
function renderLoadingState() {
  projectContainer.innerHTML = '<div class="loading-wrapper"><div class="loader" aria-label="Loading"></div></div>';
}

function renderEmptyState() {
  projectContainer.innerHTML = "<p>No projects found.</p>";
}

function renderErrorState(message) {
  projectContainer.innerHTML = `<p>Error: ${message}</p>`;
}

function hideLoadingState() {
  // intentionally empty for now — renderProjectList/renderErrorState already replace the loading message
}

function renderProjectList(projects, container){
    renderProjectCards(projects, container);
}

function fetchProjects(shouldFail = false) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (shouldFail) {
        reject(new Error("Projects could not be loaded."));
        return;
      }

      resolve(projects);
    }, 1000);
  });
}

async function loadPortfolioProjects() {
  renderLoadingState();

  try {
    const loadedProjects = await fetchProjects(false);

    if (loadedProjects.length === 0) {
      renderEmptyState();
      return;
    }

    renderProjectList(loadedProjects, projectContainer);
  } catch (error) {
    renderErrorState(error.message);
  } finally {
    hideLoadingState();
  }
}


const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        summary: "A personal portfolio website built with semantic HTML, modern CSS, and responsive layout principles.",
        categories: ["html", "css"],
        tags: ["HTML", "CSS", "Cards", "javascript"],
        links: {
            demo: "#",
            source: "#"
        }
    },
    {
        id: 2,
        title: "Quiz Game with Timer",
        summary: "A multiple-choice quiz app with a countdown timer per question, score tracking, and a results summary screen at the end.",
        categories: ["javascript", "css"],
        tags: ["JavaScript", "setInterval", "Game Logic", "Animations"],
        links: { demo: "#", source: "#" }
    },
    {
        id: 3,
        title: "Weather Dashboard",
        summary: "A live weather app that fetches real-time forecasts from a public API based on the user's searched city.",
        categories: ["javascript", "api"],
        tags: ["JavaScript", "Fetch API", "Async/Await", "JSON"],
        links: { demo: "#", source: "#" }
    },
    {
        id: 4,
        title: "E-Commerce Cart",
        summary: "A shopping cart interface with product filtering, quantity controls, and a running total calculated live as items are added or removed.",
        categories: ["javascript", "css"],
        tags: ["JavaScript", "State Management", "Local Storage", "CSS Grid"],
        links: { demo: "#", source: "#" }
    },
    {
        id: 5,
        title: "To-Do List",
        summary: "A simple to-do list app built to practice DOM manipulation, event listeners, and array methods.",
        categories: ["javascript"],
        tags: ["JavaScript", "DOM", "Events"],
        links: {
            demo: "#",
            source: "#"
        }
    }
];

// 2. BUILD ONE CARD from a single project object
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

// 3. RENDER ALL CARDS into a container
function renderProjectCards(projects, container) {
    container.innerHTML = "";

    projects.forEach(function (project) {
        container.appendChild(createProjectCard(project));
    });
}

// 4. FILTER projects by category
function getProjectsByCategory(projects, category) {
    if (category === "all") {
        return projects;
    }

    return projects.filter(function (project) {
        return project.categories.includes(category);
    });
}
loadPortfolioProjects();
// 5. WIRING — find the container and trigger the render

const projectCards = document.querySelectorAll(".project-card");
filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedFilter = button.dataset.filter;

        projectCards.forEach(function (card) {
            const categories = card.dataset.category;

            if (selectedFilter === "all" || categories.includes(selectedFilter)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

const filteredButtons = document.querySelector("filter-btn");

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", () => {
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active");
        }
        filterButtons[i].classList.add("active");
    });
}

const titles = projects.map(function (project) {
    return project.title;
});
console.log(titles);

const ids = projects.find(function (project) {
    return project.id === 3
});
console.log(ids);

function toDisplayProject(project) {
    return {
        id: project.id,
        title: project.title ?? "Untitled Project",
        summary: project.summary ?? "No summary available.",
        categories: project.categories ?? [],
        tags: project.tags ?? [],
        demoUrl: project.links?.demo ?? "Not available",
        sourceUrl: project.links?.source ?? "Not available"
    };
}
const displayProjects = projects.map(toDisplayProject);

console.log(displayProjects[0]);

function addCategory(project, category) {
    return {
        ...project,
        categories: [...project.categories, category]
    };
}
const original = projects[0];
const updated = addCategory(original, "Responsive")
console.log(updated.categories);

async function fetchRepository(owner, repository) {
  const response = await fetch(
    `https://api.github.com/repos/${owner}/${repository}`
  );

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}
function toPortfolioRepository(repository) {
  return {
    name: repository.name,
    description: repository.description ?? "No description",
    language: repository.language ?? "Not specified",
    stars: repository.stargazers_count,
    url: repository.html_url
  };
}
function renderRepositoryLoading() {
  document.getElementById("loading").textContent = "Loading...";
}
function hideRepositoryLoading() {
//   document.getElementById("loading").textContent = "";
  // replace the loading indicator when they overwrite the container's contents
}
// function renderErrorState(message) {
//   document.getElementById("error").textContent = message;
// }
function renderRepository(repository) {

  document.getElementById("repository").innerHTML = `
    <h2>${repository.name}</h2>
    <p>${repository.description}</p>
    <p>Language: ${repository.language}</p>
    <p>Stars: ${repository.stars}</p>
    <a href="${repository.url}" target="_blank">
      View Repository
    </a>
  `;
}
async function loadRepository(owner, repository) {
  renderRepositoryLoading();

  try {
    const rawRepository =
      await fetchRepository(owner, repository);

    const repositoryModel =
      toPortfolioRepository(rawRepository);

    renderRepository(repositoryModel);
  } catch (error) {
    renderRepositoryError(error.message);
  } finally {
    hideRepositoryLoading();
  }
}

//to check if the repository works
fetchRepository("facebook", "react").then(console.log);
const repositoriesToLoad = [
  { owner: "yourusername", name: "your-repo-1" },
  { owner: "yourusername", name: "your-repo-2" }
];

async function loadAllRepositories() {
  repositoryContainer.innerHTML = `<div class="loader" aria-label="Loading"></div>`;

  try {
    const rawRepositories = await Promise.all(
      repositoriesToLoad.map(function (repo) {
        return fetchRepository(repo.owner, repo.name);
      })
    );

    const repositoryModels = rawRepositories.map(toPortfolioRepository);

    repositoryContainer.innerHTML = "";
    repositoryModels.forEach(function (repository) {
      repositoryContainer.appendChild(createRepositoryCard(repository));
    });
  } catch (error) {
    repositoryContainer.innerHTML = `<p>Couldn't load repositories: ${error.message}</p>`;
  }
}
//23rd july 2026 outreach to promote
loadAllRepositories();