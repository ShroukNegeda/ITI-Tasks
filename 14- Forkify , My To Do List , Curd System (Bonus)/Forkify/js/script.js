let searchInput = document.querySelector(`#searchInput`);
let userSelect = document.querySelector(`#userSelect`);
let dataRow = document.querySelector(`#dataRow`);
let statusMsg = document.querySelector(`#statusMsg`);

(function () {
  const recipesList = ["carrot", "broccoli", "asparagus", "cauliflower", "corn", "cucumber",
    "green pepper", "lettuce", "mushrooms", "onion", "potato", "pumpkin",
    "red pepper", "tomato", "beetroot", "brussel sprouts", "peas", "zucchini",
    "radish", "sweet potato", "artichoke", "leek", "cabbage", "celery", "chili",
    "garlic", "basil", "coriander", "parsley", "dill", "rosemary", "oregano",
    "cinnamon", "saffron", "green bean", "bean", "chickpea", "lentil", "apple",
    "apricot", "avocado", "banana", "blackberry", "blackcurrant", "blueberry",
    "boysenberry", "cherry", "coconut", "fig", "grape", "grapefruit", "kiwifruit",
    "lemon", "lime", "lychee", "mandarin", "mango", "melon", "nectarine", "orange",
    "papaya", "passion fruit", "peach", "pear", "pineapple", "plum", "pomegranate",
    "quince", "raspberry", "strawberry", "watermelon", "salad", "pizza", "pasta",
    "popcorn", "lobster", "steak", "bbq", "pudding", "hamburger", "pie", "cake",
    "sausage", "tacos", "kebab", "poutine", "seafood", "chips", "fries", "masala",
    "paella", "som tam", "chicken", "toast", "marzipan", "tofu", "ketchup",
    "hummus", "chili", "maple syrup", "parma ham", "fajitas", "champ", "lasagna",
    "poke", "chocolate", "croissant", "arepas", "bunny chow", "pierogi", "donuts",
    "rendang", "sushi", "ice cream", "duck", "curry", "beef", "goat", "lamb",
    "turkey", "pork", "fish", "crab", "bacon", "ham", "pepperoni", "salami", "ribs"];

  let selectOptions = `<option value="pizza">All ingredients…</option>`;
  for (let option of recipesList) {
    selectOptions += `
      <option value="${option}">${option}</option>
    `;
  }
  userSelect.innerHTML = selectOptions;
})();

async function getRecipes(searchTerm = `Pizza`) {
  statusMsg.classList.remove(`is-error`);
  statusMsg.textContent = `Looking through the shelf…`;
  dataRow.innerHTML = ``;

  try {
    let response = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchTerm}`);
    response = await response.json();
    displayRecipes(response.data.recipes);
  } catch {
    statusMsg.textContent = `Something went wrong fetching recipes. Try again.`;
    statusMsg.classList.add(`is-error`);
    console.log(`error`);
  }
}
getRecipes();

function displayRecipes(arrayOfRecipes) {
  if (!arrayOfRecipes || arrayOfRecipes.length === 0) {
    statusMsg.textContent = `No recipes found. Try a different search.`;
    statusMsg.classList.add(`is-error`);
    dataRow.innerHTML = ``;
    return;
  }

  let contentContainer = ``;
  arrayOfRecipes.forEach((recipe, index) => {
    contentContainer += `
      <div class="col-md-3 col-sm-6">
        <div class="recipe-card">
          <span class="tag">No. ${String(index + 1).padStart(3, `0`)}</span>
          <img src="${recipe.image_url}" alt="${recipe.title}" class="thumb">
          <div class="inner">
            <h2>${recipe.title}</h2>
            <p>${recipe.publisher}</p>
          </div>
        </div>
      </div>
    `;
  });

  dataRow.innerHTML = contentContainer;
  statusMsg.textContent = `${arrayOfRecipes.length} recipe${arrayOfRecipes.length === 1 ? `` : `s`} found`;
}

searchInput.addEventListener(`input`, function (e) {
  getRecipes(e.target.value.toLowerCase());
});

userSelect.addEventListener(`change`, function (e) {
  searchInput.value = ``;
  getRecipes(e.target.value.toLowerCase());
});