const employees = [
    { id: 1, name: "Ahmed", age: 22, salary: 6000, department: "IT", active: true },
    { id: 2, name: "Sara", age: 27, salary: 8500, department: "HR", active: true },
    { id: 3, name: "Ali", age: 20, salary: 4500, department: "IT", active: false },
    { id: 4, name: "Mona", age: 30, salary: 10000, department: "Finance", active: true },
    { id: 5, name: "Omar", age: 24, salary: 7000, department: "Marketing", active: false },
    { id: 6, name: "Youssef", age: 29, salary: 12000, department: "IT", active: true }
];

function print(elementId, text) {
    document.getElementById(elementId).textContent = text;
    console.log(text);
}

function p1_for() {
    let output = "";
    for (let i = 0; i < employees.length; i++) {
        output += employees[i].name + "\n";
    }
    print("p1Output", output);
}

function p1_forOf() {
    let output = "";
    for (const emp of employees) {
        output += emp.name + "\n";
    }
    print("p1Output", output);
}

function p1_forEach() {
    let output = "";
    employees.forEach((emp) => {
        output += emp.name + "\n";
    });
    print("p1Output", output);
}

function p1_forIn() {
    let output = "";
    for (const index in employees) {
        output += index + "\n";
    }
    print("p1Output", output);
}

function p1_active() {
    let output = "";
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].active) {
            output += JSON.stringify(employees[i]) + "\n";
        }
    }
    print("p1Output", output);
}

function p2_arrow() {
    const welcome = (name) => "Welcome " + name;
    print("p2Output", welcome("Ahmed"));
}

function p2_destructuring() {
    const employee = employees[0];
    const { name, salary } = employee;
    print("p2Output", `name: ${name}, salary: ${salary}`);
}

function p2_spread() {
    const employee = employees[0];
    const newEmployee = { ...employee, country: "Egypt" };
    print("p2Output", JSON.stringify(newEmployee));
}

function p2_template() {
    const employee = employees[0];
    const output = `${employee.name} works in ${employee.department} and earns ${employee.salary}`;
    print("p2Output", output);
}

function p3_names() {
    const result = employees.map((emp) => emp.name);
    print("p3Output", JSON.stringify(result));
}

function p3_salaries() {
    const result = employees.map((emp) => emp.salary);
    print("p3Output", JSON.stringify(result));
}

function p3_nameDept() {
    const result = employees.map((emp) => `${emp.name} (${emp.department})`);
    print("p3Output", JSON.stringify(result, null, 2));
}

function p3_raise() {
    const result = employees.map((emp) => ({ ...emp, salary: emp.salary + 1000 }));
    print("p3Output", JSON.stringify(result, null, 2));
}

function p4_salaryAbove7000() {
    const result = employees.filter((emp) => emp.salary > 7000);
    print("p4Output", JSON.stringify(result, null, 2));
}

function p4_it() {
    const result = employees.filter((emp) => emp.department === "IT");
    print("p4Output", JSON.stringify(result, null, 2));
}

function p4_active() {
    const result = employees.filter((emp) => emp.active);
    print("p4Output", JSON.stringify(result, null, 2));
}

function p4_ageBelow25() {
    const result = employees.filter((emp) => emp.age < 25);
    print("p4Output", JSON.stringify(result, null, 2));
}

function p4_itAndSalary() {
    const result = employees.filter((emp) => emp.department === "IT" && emp.salary > 5000);
    print("p4Output", JSON.stringify(result, null, 2));
}

function p5_salaryAbove9000() {
    const result = employees.find((emp) => emp.salary > 9000);
    print("p5Output", JSON.stringify(result));
}

function p5_hr() {
    const result = employees.find((emp) => emp.department === "HR");
    print("p5Output", JSON.stringify(result));
}

function p5_inactive() {
    const result = employees.find((emp) => !emp.active);
    print("p5Output", JSON.stringify(result));
}

function p5_id100() {
    const result = employees.find((emp) => emp.id === 100);
    print("p5Output", "Result: " + result);
}

function p6_activeNames() {
    const result = employees.filter((emp) => emp.active).map((emp) => emp.name);
    print("p6Output", JSON.stringify(result));
}

function p6_itNames() {
    const result = employees.filter((emp) => emp.department === "IT").map((emp) => emp.name);
    print("p6Output", JSON.stringify(result));
}

function p6_highSalaryNames() {
    const result = employees.filter((emp) => emp.salary > 7000).map((emp) => emp.name);
    print("p6Output", JSON.stringify(result));
}

function p6_bonus() {
    const result = employees.map((emp) => ({
        employee: emp.name,
        bonus: emp.salary * 0.1
    }));
    print("p6Output", JSON.stringify(result, null, 2));
}

function p6_firstLetters() {
    const result = employees.map((emp) => emp.name.charAt(0));
    print("p6Output", JSON.stringify(result));
}

const numbers = [5, 12, 8, 20, 15, 30, 3, 40];

function p7_above10() {
    const result = numbers.filter((n) => n > 10);
    print("p7Output", JSON.stringify(result));
}

function p7_double() {
    const result = numbers.map((n) => n * 2);
    print("p7Output", JSON.stringify(result));
}

function p7_firstAbove25() {
    const result = numbers.find((n) => n > 25);
    print("p7Output", JSON.stringify(result));
}

function p7_printAll() {
    let output = "";
    numbers.forEach((n) => {
        output += n + "\n";
    });
    print("p7Output", output);
}

function p7_strings() {
    const result = numbers.map((n) => `Number is ${n}`);
    print("p7Output", result.join("\n"));
}

const product = {
    id: 1,
    title: "Laptop",
    price: 25000,
    category: "Electronics"
};

function p8_keys() {
    let output = "";
    for (const key in product) {
        output += key + "\n";
    }
    print("p8Output", output);
}

function p8_values() {
    let output = "";
    for (const key in product) {
        output += product[key] + "\n";
    }
    print("p8Output", output);
}

function p8_addStock() {
    const newProduct = { ...product, stock: 15 };
    print("p8Output", JSON.stringify(newProduct, null, 2));
}

function p8_destructuring() {
    const { title, price } = product;
    print("p8Output", `title: ${title}, price: ${price}`);
}

function dashboard() {
    const total = employees.length;
    const activeCount = employees.filter((emp) => emp.active).length;
    const inactiveCount = total - activeCount;
    const itCount = employees.filter((emp) => emp.department === "IT").length;
    const highestSalary = employees.reduce((max, emp) => emp.salary > max ? emp.salary : max, 0);
    const firstHR = employees.find((emp) => emp.department === "HR");
    const names = employees.map((emp) => emp.name).join("\n");

    const output =
`Total Employees : ${total}

Active Employees : ${activeCount}

Inactive Employees : ${inactiveCount}

IT Employees : ${itCount}

Highest Salary : ${highestSalary}

First HR Employee : ${firstHR ? firstHR.name : "None"}

Employee Names :

${names}`;

    print("p9Output", output);
}

function b_total() {
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    print("bonusOutput", `Total Salaries: ${total}`);
}

function b_average() {
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    const average = total / employees.length;
    print("bonusOutput", `Average Salary: ${average}`);
}

function b_highest() {
    const highest = employees.reduce((max, emp) => emp.salary > max ? emp.salary : max, 0);
    print("bonusOutput", `Highest Salary: ${highest}`);
}

function b_activeCount() {
    const count = employees.reduce((acc, emp) => emp.active ? acc + 1 : acc, 0);
    print("bonusOutput", `Active Employees Count: ${count}`);
}