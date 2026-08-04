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
