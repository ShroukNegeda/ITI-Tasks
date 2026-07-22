const numbers = [1, 2, 3, 4];
const nums = [10, 25, 5, 30, 15, 40];
const users = [
    { name: "Ali", age: 20 },
    { name: "Sara", age: 28 },
    { name: "Omar", age: 30 }
];
const names = ["ali", "mona", "ahmed"];

function runQ1() {
    let output = "";
    numbers.forEach((num) => {
        output += (num * 2) + "\n";
    });
    print("part3Output", output);
}

function runQ2() {
    const result = nums.filter((num) => num > 20);
    print("part3Output", JSON.stringify(result));
}

function runQ3() {
    const user = users.find((item) => item.age > 25);
    print("part3Output", JSON.stringify(user));
}

function runQ4() {
    const result = names.map((name) => name.toUpperCase());
    print("part3Output", JSON.stringify(result));
}

const fruits = ["Apple", "Banana", "Orange"];

function runForOf() {
    let output = "";
    for (const fruit of fruits) {
        output += fruit + "\n";
    }
    print("part4Output", output);
}

function runForIn() {
    let output = "";
    for (const index in fruits) {
        output += index + "\n";
    }
    print("part4Output", output);
}

function runForEach() {
    let output = "";
    fruits.forEach((fruit, index) => {
        output += `${index} -> ${fruit}\n`;
    });
    print("part4Output", output);
}

function runArrow() {
    const sum = (a, b) => a + b;
    print("part5Output", `sum(3, 5) = ${sum(3, 5)}`);
}

function runDestructuring() {
    const userObj = { name: "Mostafa", age: 25 };
    const { name, age } = userObj;
    print("part5Output", `name: ${name}, age: ${age}`);
}

function runTemplate() {
    const name2 = "Mostafa";
    print("part5Output", `Hello ${name2}`);
}

function runSpread() {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const merged = [...arr1, ...arr2];
    print("part5Output", JSON.stringify(merged));
}


const students = [
    { name: "Ali", degree: 70 },
    { name: "Sara", degree: 95 },
    { name: "Ahmed", degree: 40 },
    { name: "Mona", degree: 85 },
    { name: "Omar", degree: 55 }
];

function runStudentNames() {
    const studentNames = students.map((student) => student.name);
    print("part6Output", JSON.stringify(studentNames));
}

function runPassedStudents() {
    const passedStudents = students.filter((student) => student.degree >= 60);
    print("part6Output", JSON.stringify(passedStudents));
}

function runTopStudent() {
    const topStudent = students.find((student) => student.degree > 90);
    print("part6Output", JSON.stringify(topStudent));
}

function runForEachStudents() {
    let output = "";
    students.forEach((student) => {
        output += student.name + "\n";
    });
    print("part6Output", output);
}

function runReduce() {
    const numbers2 = [5, 10, 15, 20];
    const total = numbers2.reduce((acc, current) => acc + current, 0);
    print("bonusOutput", `Total: ${total}`);
}

function print(elementId, text) {
    document.getElementById(elementId).textContent = text;
    console.log(text);
}