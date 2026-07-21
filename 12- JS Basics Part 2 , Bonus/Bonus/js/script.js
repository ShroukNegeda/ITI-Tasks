let students = [
    {
        id: 1,
        name: "Shrouk Negeda",
        age: 22,
        city: "Cairo",
        grade: 95,
        isGraduated: true,
        skills: ["HTML", "CSS", "JS"]
    },
    {
        id: 2,
        name: "Aml Mohamed",
        age: 25,
        city: "Alex",
        grade: 60,
        isGraduated: false,
        skills: ["HTML"]
    },
    {
        id: 3,
        name: "Sara Ali",
        age: 24,
        city: "Mansoura",
        grade: 88,
        isGraduated: true,
        skills: ["HTML", "CSS", "JS", "React"]
    }
];

let outputBox = document.querySelector("#output");

function clearOutput() {
    outputBox.textContent = "";
}

function print(line) {
    console.log(line);
    outputBox.textContent = outputBox.textContent + line + "\n";
}

function part1() {
    print("PART 1: Number of students");
    print(students.length);
}

function part2() {
    print("PART 2: First student name");
    print(students[0].name);
}

function part3() {
    print("PART 3: Last student name");
    print(students[students.length - 1].name);
}

function part4() {
    print("PART 4: All names (for loop)");
    for (let i = 0; i < students.length; i++) {
        print(students[i].name);
    }
}

function part5() {
    print("PART 5: Print each student formatted");
    for (let i = 0; i < students.length; i++) {
        print("Name : " + students[i].name);
        print("Age : " + students[i].age);
        print("City : " + students[i].city);
        print("Grade : " + students[i].grade);
        print("-------------");
    }
}

function part6() {
    print("PART 6: Students older than 18");
    for (let i = 0; i < students.length; i++) {
        if (students[i].age > 18) {
            print(students[i].name);
        }
    }
}

function part7() {
    print("PART 7: Students with grade > 90");
    for (let i = 0; i < students.length; i++) {
        if (students[i].grade > 90) {
            print(students[i].name);
        }
    }
}

function part8() {
    print("PART 8: Graduated students");
    for (let i = 0; i < students.length; i++) {
        if (students[i].isGraduated === true) {
            print(students[i].name);
        }
    }
}

function part9() {
    print("PART 9: Not graduated students");
    for (let i = 0; i < students.length; i++) {
        if (students[i].isGraduated === false) {
            print(students[i].name);
        }
    }
}

function part10() {
    print("PART 10: Sum of all grades");
    let sumGrades = 0;
    let i = 0;
    while (i < students.length) {
        sumGrades = sumGrades + students[i].grade;
        i++;
    }
    print(sumGrades);
}

function part11() {
    print("PART 11: Average grade");
    let sumGrades = 0;
    for (let i = 0; i < students.length; i++) {
        sumGrades = sumGrades + students[i].grade;
    }
    print(sumGrades / students.length);
}

function part12() {
    print("PART 12: Highest grade");
    let maxGrade = students[0].grade;
    for (let i = 1; i < students.length; i++) {
        if (students[i].grade > maxGrade) {
            maxGrade = students[i].grade;
        }
    }
    print(maxGrade);
}

function part13() {
    print("PART 13: Lowest grade");
    let minGrade = students[0].grade;
    for (let i = 1; i < students.length; i++) {
        if (students[i].grade < minGrade) {
            minGrade = students[i].grade;
        }
    }
    print(minGrade);
}

function part14() {
    print("PART 14: Names sorted alphabetically");
    let namesForSort = [];
    for (let i = 0; i < students.length; i++) {
        namesForSort.push(students[i].name);
    }
    print(namesForSort.sort().join(", "));
}

function part15() {
    print("PART 15: Names reversed");
    let namesForReverse = [];
    for (let i = 0; i < students.length; i++) {
        namesForReverse.push(students[i].name);
    }
    print(namesForReverse.reverse().join(", "));
}

function part16() {
    print("PART 16: Letters count / first / last letter");
    for (let i = 0; i < students.length; i++) {
        let studentName = students[i].name;
        print("Name: " + studentName);
        print("Letters count: " + studentName.length);
        print("First letter: " + studentName[0]);
        print("Last letter: " + studentName[studentName.length - 1]);
        print("-------------");
    }
}

function part17() {
    print("PART 17: Names to Capital (upper case)");
    for (let i = 0; i < students.length; i++) {
        print(students[i].name.toUpperCase());
    }
}

function part18() {
    print("PART 18: Names to small (lower case)");
    for (let i = 0; i < students.length; i++) {
        print(students[i].name.toLowerCase());
    }
}

function part19() {
    print("PART 19: Does the name include 'Ali'?");
    for (let i = 0; i < students.length; i++) {
        if (students[i].name.includes("Ali")) {
            print(students[i].name + " -> true");
        } else {
            print(students[i].name + " -> false");
        }
    }
}

function part20() {
    print("PART 20: Split name into words");
    for (let i = 0; i < students.length; i++) {
        print(students[i].name.split(" ").join(" | "));
    }
}

function part21() {
    print("PART 21: Join words again");
    for (let i = 0; i < students.length; i++) {
        let parts = students[i].name.split(" ");
        print(parts.join(" "));
    }
}

function part22() {
    print("PART 22: Trim extra spaces");
    let messyName = "   Shrouk Negeda   ";
    print("Before trim: '" + messyName + "'");
    print("After trim: '" + messyName.trim() + "'");
}

function part23() {
    print("PART 23: Skills count for each student");
    for (let i = 0; i < students.length; i++) {
        print(students[i].name + " -> " + students[i].skills.length + " skills");
    }
}

function part24() {
    print("PART 24: All skills");
    for (let i = 0; i < students.length; i++) {
        print(students[i].name + ": " + students[i].skills);
    }
}

function part25() {
    print("PART 25: Add new skill (to first student)");
    students[0].skills.push("Node.js");
    print(students[0].skills.toString());
}

function part26() {
    print("PART 26: Remove last skill (from first student)");
    students[0].skills.pop();
    print(students[0].skills.toString());
}

function part27() {
    print("PART 27: Does the student know JavaScript?");
    for (let i = 0; i < students.length; i++) {
        if (students[i].skills.includes("JS")) {
            print(students[i].name + " knows JavaScript");
        } else {
            print(students[i].name + " does NOT know JavaScript");
        }
    }
}

function part28() {
    print("PART 28: Reverse skills order (3rd student)");
    let skillsCopy = students[2].skills.slice();
    print(skillsCopy.reverse().toString());
}

function part29() {
    print("PART 29: Sort skills alphabetically (3rd student)");
    let skillsCopy = students[2].skills.slice();
    print(skillsCopy.sort().toString());
}

function part30() {
    print("PART 30: Convert skills array to string");
    for (let i = 0; i < students.length; i++) {
        print(students[i].skills.toString());
    }
}

function part31() {
    print("PART 31: All keys");
    print(Object.keys(students[0]).toString());
}

function part32() {
    print("PART 32: All values");
    print(Object.values(students[0]).toString());
}

function part33() {
    print("PART 33: Each key with its value");
    let student = students[0];
    let keys = Object.keys(student);
    for (let i = 0; i < keys.length; i++) {
        print(keys[i] + " : " + student[keys[i]]);
    }
}

function part34() {
    print("PART 34: Add new property country");
    students[0].country = "Egypt";
    print(JSON.stringify(students[0]));
}

function part35() {
    print("PART 35: Change the city");
    students[0].city = "Giza";
    print(JSON.stringify(students[0]));
}

function part36() {
    print("PART 36: Delete the country property");
    delete students[0].country;
    print(JSON.stringify(students[0]));
}

function part37() {
    print("PART 37: Does the object have a 'grade' property?");
    print("grade" in students[0]);
}

function part38() {
    print("PART 38: Grade evaluation");
    for (let i = 0; i < students.length; i++) {
        let grade = students[i].grade;
        let result;

        if (grade >= 90) {
            result = "Excellent";
        } else if (grade >= 80) {
            result = "Very Good";
        } else if (grade >= 70) {
            result = "Good";
        } else if (grade >= 60) {
            result = "Pass";
        } else {
            result = "Failed";
        }

        print(students[i].name + " -> " + result);
    }
}

function part39() {
    print("PART 39: Minor or Adult");
    for (let i = 0; i < students.length; i++) {
        if (students[i].age < 18) {
            print(students[i].name + " -> Minor");
        } else {
            print(students[i].name + " -> Adult");
        }
    }
}

function getStudentName(student) {
    return student.name;
}

function getStudentAge(student) {
    return student.age;
}

function isPassed(student) {
    if (student.grade >= 60) {
        return true;
    } else {
        return false;
    }
}

function getSkillsCount(student) {
    return student.skills.length;
}

function getAverageGrade(studentsList) {
    let total = 0;
    for (let i = 0; i < studentsList.length; i++) {
        total = total + studentsList[i].grade;
    }
    return total / studentsList.length;
}

function part40() {
    print("PART 40: Function returns student name");
    print(getStudentName(students[0]));
}

function part41() {
    print("PART 41: Function returns student age");
    print(getStudentAge(students[0]));
}

function part42() {
    print("PART 42: Function returns pass/fail");
    for (let i = 0; i < students.length; i++) {
        print(students[i].name + " passed? " + isPassed(students[i]));
    }
}

function part43() {
    print("PART 43: Function returns skills count");
    print(getSkillsCount(students[2]));
}

function part44() {
    print("PART 44: Function returns average grades");
    print(getAverageGrade(students));
}

function part45() {
    print("PART 45: Math methods");
    print("Random number: " + Math.random());
    print("Round 4.6: " + Math.round(4.6));
    print("Floor 4.9: " + Math.floor(4.9));
    print("Ceil 4.1: " + Math.ceil(4.1));
    print("Max: " + Math.max(10, 25, 3, 47));
    print("Min: " + Math.min(10, 25, 3, 47));
    print("Pow 2^5: " + Math.pow(2, 5));
}


let allParts = [
    part1, part2, part3, part4, part5, part6, part7, part8, part9, part10,
    part11, part12, part13, part14, part15, part16, part17, part18, part19, part20,
    part21, part22, part23, part24, part25, part26, part27, part28, part29, part30,
    part31, part32, part33, part34, part35, part36, part37, part38, part39, part40,
    part41, part42, part43, part44, part45
];

let btnGrid = document.querySelector("#btnGrid");

for (let i = 0; i < allParts.length; i++) {
    let partNumber = i + 1;
    let btn = document.createElement("button");
    btn.className = "btn btn-part";
    btn.textContent = "Part " + partNumber;
    btn.setAttribute("data-part", partNumber);
    btnGrid.appendChild(btn);
}

let buttons = document.querySelectorAll(".btn-part");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let partNumber = Number(buttons[i].getAttribute("data-part"));
        clearOutput();
        allParts[partNumber - 1]();
    });
}

let clearBtn = document.querySelector("#clearBtn");
clearBtn.addEventListener("click", function () {
    clearOutput();
    outputBox.textContent = "result";
});