let studentName = "Shrouk";
let grade = 85;
let isPassed = true;
let extraNotes;
let noValue = null;
let studentId = Symbol("id");
let bigNumber = 9007199254740991;
let studentInfo = {
  name: studentName,
  grade: grade,
};
let subjects = ["Math", "Science", "English"];

console.log("---- Data Types ----");
console.log("String:", studentName, typeof studentName);
console.log("Number:", grade, typeof grade);
console.log("Boolean:", isPassed, typeof isPassed);
console.log("Undefined:", extraNotes, typeof extraNotes);
console.log("Null:", noValue, typeof noValue);
console.log("Symbol:", studentId, typeof studentId);
console.log("BigInt:", bigNumber, typeof bigNumber);
console.log("Object:", studentInfo, typeof studentInfo);
console.log("Array:", subjects, typeof subjects);

function checkGrade(gradeValue) {
  let message = "";
  let studentGrade = gradeValue;

  if (studentGrade >= 90) {
    message = "Excellent";
  } else if (studentGrade >= 80) {
    message = "Good";
  } else if (studentGrade >= 70) {
    message = "Average";
  } else if (studentGrade >= 60) {
    message = "Pass";
  } else {
    message = "Fail";
  }

  return message;
}

console.log("---- Grade Checker (example) ----");
console.log("Grade 85 ->", checkGrade(85));

const gradeInput = document.getElementById("grade-input");
const checkBtn = document.getElementById("check-btn");
const resultEl = document.getElementById("grade-result");

checkBtn.addEventListener("click", function () {
  const value = Number(gradeInput.value);

  if (gradeInput.value === "" || isNaN(value)) {
    resultEl.textContent = "Please enter a valid number.";
    resultEl.className = "mt-4 text-warning";
    return;
  }

  if (value < 0 || value > 100) {
    resultEl.textContent = "Please enter a grade between 0 and 100.";
    resultEl.className = "mt-4 text-warning";
    return;
  }

  const resultMessage = checkGrade(value);
  resultEl.textContent = "Result: " + resultMessage;
  resultEl.className = "mt-4 text-success";
  console.log("Grade " + value + " -> " + resultMessage);
});