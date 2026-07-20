var oldWay = "I am declared with var";
let city = "Cairo";
const country = "Egypt";

city = "Nasr City";
console.log(oldWay);
console.log(`I live in ${city}, ${country}`);


var studentName = "Shrouk Negeda";
var studentAge = 22;
var isGraduated = true;
var car = null;
var job;

console.log(typeof studentName);
console.log(typeof studentAge);
console.log(typeof isGraduated);
console.log(typeof car);
console.log(typeof job);

var walletMoney = 500;
var itemPrice = 150;

console.log("Remaining money:", walletMoney - itemPrice);
console.log("Can I buy 3 items?", walletMoney >= itemPrice * 3);
console.log("Is student and graduated?", studentAge > 18 && isGraduated);

var examScore = 75;

if (examScore >= 90) {
  console.log("Grade: Excellent");
} else if (examScore >= 75) {
  console.log("Grade: Very Good");
} else if (examScore >= 60) {
  console.log("Grade: Good");
} else {
  console.log("Grade: Need Improvement");
}

var day = "Sunday";
switch (day) {
  case "Friday":
  case "Saturday":
    console.log(`${day} is a weekend day`);
    break;
  default:
    console.log(`${day} is a working day`);
}

console.log("---- Countdown ----");
for (var count = 5; count >= 1; count--) {
  console.log(count);
}
console.log("Launch!");

console.log("---- Battery Draining ----");
var battery = 100;
while (battery > 0) {
  battery -= 25;
  console.log(`Battery: ${battery}%`);
}

console.log("---- Password Attempts ----");
var attempts = 0;
var correctPassword = "1234";
var enteredPassword = "0000";
do {
  attempts++;
  console.log(`Attempt ${attempts}: Trying password...`);
} while (enteredPassword !== correctPassword && attempts < 3);
console.log("Stopped trying after", attempts, "attempts");

function square(number) {
  return number * number;
}
console.log("Square of 6:", square(6));

const applyDiscount = (price, discountPercent) => {
  return price - (price * discountPercent) / 100;
};
console.log("Price after 20% discount:", applyDiscount(400, 20));

var favoriteMovies = ["Inception", "Interstellar", "The Matrix"];
favoriteMovies.push("Oppenheimer");

console.log("My Movies:", favoriteMovies);
console.log("Second movie:", favoriteMovies[1]);
console.log("Total movies:", favoriteMovies.length);

console.log("---- All Movies ----");
for (var m = 0; m < favoriteMovies.length; m++) {
  console.log(`${m + 1}- ${favoriteMovies[m]}`);
}

var player = {
  name: "Salah",
  team: "Liverpool",
  number: 11,
  isCaptain: false,
  skills: ["Dribbling", "Shooting", "Speed"],
  score: function (goals) {
    console.log(`${this.name} scored ${goals} goals this season!`);
  }
};

console.log(player.name, "plays for", player.team);
console.log("His skills are:", player.skills);
player.score(30);

var team = {
  name: "Liverpool",
  coach: "Arne Slot",
  captain: {
    name: "Van Dijk",
    age: 34
  }
};
console.log(`${team.captain.name} is the captain of ${team.name}, coached by ${team.coach}`);