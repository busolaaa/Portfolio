const myName = "Busola";
const myAge = 37;
const isCompEngStudent = true;
const skills = 10;
console.log(typeof myName);
console.log(typeof myAge);
console.log(typeof isCompEngStudent);
console.log(typeof skills);

let productPrice = 5000;
let productQuantity = 5;
let totalCost = productPrice * productQuantity;
console.log(totalCost)

let testScore = 70;
let passMark = 50;
let isPassed = testScore >= passMark;
console.log(isPassed)

const userName = "Busola";
let queryMessage = "Enter you pin, " + userName;
console.log(queryMessage)

let number = 15;
let isNumberEven = number % 2 == 0;
console.log(isNumberEven);

let grade = 49;
// if(grade>= 50){
//     console.log("You passed!")
// }
if (grade >= 70) {
    console.log("A");
}
else if (grade >= 60) {
    console.log("B");
}
else if (grade >= 50) {
    console.log("C");
}
else if (grade >= 40) {
    console.log("D");
}
else {
    console.log("F")
}

const age = 18;
if (age >= 18) {
    console.log("You can be registered");
}
else {
    console.log("You can't register");
}

let day = "Saturday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Tuesday":
        console.log("It's the second day of the week");
        break;
    case "Wednesday":
        console.log("It's the 3rd week of the day");
        break;
    case "Thursday":
        console.log("It's the 3rd day");
        break;
    case "friday":
        console.log("It's the last day of the week");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend");
        break;
    default:
        console.log("It's a day of the week");
}

function greeting(name) {
    console.log(`Welcome, ${name}.`);
}

greeting("Busola");

function myCost(product, quantity) {
    return product * quantity;
}

console.log(myCost(2000, 10));

function evenNumber(number) {
    if (number % 2 == 0) {
        console.log("This is an even number");
    }
    else {
        console.log("It's not an even number!")
    }
}

evenNumber(39)

function gradeChecker(grade) {
    if (grade >= 70) {
        console.log("A");
    }
    else if (grade >= 60) {
        console.log("B");
    }
    else if (grade >= 50) {
        console.log("C");
    }
    else if (grade >= 40) {
        console.log("D");
    }
    else {
        console.log("F")
    }
}
gradeChecker(70)

// basically return needs a console.log to print out the answer
function ageCalc(currentYear, birthYear) {
    return currentYear - birthYear;
}
console.log(ageCalc(2026, 1993));

let fruits = ["Orange", "Apple", "Watermelon", "Grapes"];
console.log(fruits[0]);
console.log(fruits[3]);
fruits.push("Kiwi");
console.log(fruits);
fruits.shift();
console.log(fruits);
console.log(fruits.includes("JavaScript"));
console.log(fruits.length)

Busola = {
    name: "Olubusola",
    age: 37,
    school: "Bowen",
    mySkills: ["HTML", "CSS", "JavaScript"]
}
console.log(Busola.name);
Busola.age = 27;
console.log(Busola);
Busola.goal = "Backend-dev";
console.log(Busola);

projectArray = [
    {
        title: "Portfolio-website",
        completed: true
    },
    {
        title: "Resturant Landing-page",
        completed: true
    },
    {
        title: "Recipe-Page",
        completed: true
    }
]
console.log(projectArray[1].title)

for (i = 1; i <= 10; i++) {
    console.log(i)
}

const myfruits = ["Orange", "Apple", "Watermelon", "Grapes"];
// let length = myfruits.length;
for (i = 0; i <= myfruits.length; i++) {
    console.log(myfruits[i]);
}

arrayScores = [70, 80, 90, 60];
let totalArrayScore = 0
for (arrayScore of arrayScores) {
    totalArrayScore += arrayScore;
}
console.log(totalArrayScore);

arrayScores = [70, 80, 90, 60];
for (const arrayScore of arrayScores) {
    if (arrayScore == 90) {
        console.log(arrayScore);
    }
}

myprojectArrays = [
    {
        title: "Portfolio-website",
        completed: true
    },
    {
        title: "Resturant Landing-page",
        completed: true
    },
    {
        title: "Recipe-Page",
        completed: true
    }
]
// let projectLength = myprojectArrays.length
// for(i=0; i<= projectLength; i++){
//     console.log(myprojectArrays.title);
// }
for (myprojectArray of myprojectArrays) {
    console.log(myprojectArray.title);
}

const studentRecords = [
    {
        studentName: "Afolabi Esther",
        scores: [50, 40, 60]
    },
    {
        studentName: "Michael David",
        scores: [70, 80, 90]
    },
    {
        studentName: "Nelson Bolu",
        scores: [95, 85, 75]
    }
];

const recordLength = studentRecords.length;
for (let i = 0; i < recordLength; i++) {
    let totalStudentScore = 0;

    for (let j = 0; j < studentRecords[i].scores.length; j++) {
        totalStudentScore += studentRecords[i].scores[j];
    }

    const average = totalStudentScore / studentRecords[i].scores.length;
    console.log(studentRecords[i].studentName);
    console.log(`Average: ${average}`);
}

//portfolio website javascript
const yearElement = document.querySelector("#year");
const currentYear = new Date().getFullYear();

yearElement.textContent = currentYear;

//Feature 2: Theme Toggle With Saved Preference
const themeToggle = document.querySelector(".theme-toggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
}

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");

    if (isDark) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// Feature 3: Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("is-open");
});

const heroHeading = document.querySelector("h1");
console.log(heroHeading);

// Feature 4: Contact Form Validation
const contactForm = document.querySelector(".contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const formMessage = document.querySelector(".form-message");
const formMessage1 = document.querySelector(".form-message1");
const formMessage2 = document.querySelector(".form-message2");
const formMessage3 = document.querySelector(".form-message3");



contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "") {
        formMessage1.textContent = "Please enter your name.";
        return;
    }
    else {
        formMessage1.textContent = "";
    }

    if (email === "") {
        formMessage2.textContent = "Please enter valid email.";
        return;
    }
    else if (!email.includes("@")) {
        formMessage2.textContent = "Email must contain @";
        return;
    }
    else {
        formMessage2.textContent = "";
    }
    if (message.length < 10) {
        formMessage3.textContent = "Your message should be at least 10 characters.";
        return;
    }
    else {
        formMessage3.textContent = ""
    }
    formMessage.textContent = "Thank you. Your message is ready to be sent.";
        contactForm.reset();


});
//Message Character Counter
const characterCount = document.querySelector(".character-count");

messageInput.addEventListener("input", function () {
    const count = messageInput.value.length;
    characterCount.textContent = `${count} characters`;
});

//Project Filtering
const filterButtons = document.querySelectorAll(".project-filters button");
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

for(let i=0; i< filterButtons.length; i++){
    filterButtons[i].addEventListener("click", () => {
        for(let j=0; j<filterButtons.length; j++){
            filterButtons[j].classList.remove("active");
        }
        filterButtons[i].classList.add("active");
    });
}