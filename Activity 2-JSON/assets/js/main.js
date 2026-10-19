// Recipe data (JSON). Add a new recipe by copying one object below.
var recipes = [
  {
    name: "Chicken Adobo",
    category: "Main Dish",
    difficulty: "Easy",
    time: 45,
    servings: 4,
    image: "assets/img/Adobo.jpg",
    ingredients: [
      "1 kg chicken thighs",
      "1/2 cup soy sauce",
      "1/3 cup vinegar",
      "1 head garlic, crushed",
      "3 bay leaves",
      "1 tsp whole peppercorns",
    ],
    steps:
      "Marinate the chicken in soy sauce and garlic for 30 minutes. Simmer with vinegar, bay leaves, and peppercorns until tender, then reduce the sauce.",
  },
  {
    name: "Sinigang na Baboy",
    category: "Soup",
    difficulty: "Medium",
    time: 70,
    servings: 5,
    image: "assets/img/sinigang.jpg",
    ingredients: [
      "1 kg pork ribs",
      "1 pack sinigang mix or fresh tamarind",
      "2 tomatoes",
      "1 onion",
      "1 radish (labanos)",
      "1 bunch kangkong",
      "Fish sauce to taste",
    ],
    steps:
      "Boil pork with onion and tomatoes until tender. Add the sour base and radish, then the greens. Season with fish sauce.",
  },
  {
    name: "Kare-Kare",
    category: "Main Dish",
    difficulty: "Hard",
    time: 150,
    servings: 6,
    image: "assets/img/karekare.jpg",
    ingredients: [
      "1 kg oxtail or beef shank",
      "1/2 cup peanut butter",
      "1/4 cup ground toasted rice",
      "1 eggplant",
      "1 bunch bok choy",
      "String beans",
      "Bagoong (shrimp paste) for serving",
    ],
    steps:
      "Boil the beef until very tender. Stir in peanut butter and ground rice to thicken the broth. Add vegetables and serve with bagoong.",
  },
  {
    name: "Pancit Canton",
    category: "Noodles",
    difficulty: "Easy",
    time: 30,
    servings: 4,
    image: "assets/img/pancit.jpg",
    ingredients: [
      "250 g pancit canton noodles",
      "200 g chicken, sliced",
      "1 carrot, sliced thin",
      "1 cup cabbage",
      "3 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "Calamansi for serving",
    ],
    steps:
      "Saute garlic, onion, and chicken. Add vegetables, sauces, and a cup of broth. Toss in the noodles until they absorb the liquid.",
  },
  {
    name: "Leche Flan",
    category: "Dessert",
    difficulty: "Medium",
    time: 90,
    servings: 8,
    image: "assets/img/letche flan.jpg",
    ingredients: [
      "10 egg yolks",
      "1 can condensed milk",
      "1 can evaporated milk",
      "1 tsp vanilla",
      "3/4 cup sugar (for caramel)",
    ],
    steps:
      "Caramelize the sugar in the mold. Mix the remaining ingredients, strain, pour in, and steam for 45 minutes. Chill before unmolding.",
  },
  {
    name: "Halo-Halo",
    category: "Dessert",
    difficulty: "Easy",
    time: 20,
    servings: 2,
    image: "assets/img/HALOHALO.jpg",
    ingredients: [
      "2 cups shaved ice",
      "Sweet beans and nata de coco",
      "Sweetened banana (saba)",
      "Leche flan slice",
      "Ube halaya",
      "Evaporated milk",
    ],
    steps:
      "Layer the sweet ingredients in a tall glass. Pack with shaved ice, pour evaporated milk, and top with ube and flan.",
  },
];

var elParent = document.getElementById("parent");
var elFilters = document.getElementById("filters");
var elSearch = document.getElementById("search");
var elEmpty = document.getElementById("emptyState");
var elCount = document.getElementById("recipeCount");

var activeCategory = "All";

function buildCard(recipe) {
  var ingredientList = "";
  for (var j = 0; j < recipe.ingredients.length; j++) {
    ingredientList += "<li>" + recipe.ingredients[j] + "</li>";
  }

  return (
    `<div class="col">
      <article class="recipe-card">
        <div class="img-container">
          <img src="` + recipe.image + `" alt="` + recipe.name + `" loading="lazy" />
          <span class="tag">` + recipe.category + `</span>
        </div>
        <div class="recipe-body">
          <h3>` + recipe.name + `</h3>
          <div class="recipe-stats">
            <span><strong>` + recipe.time + `</strong> min</span>
            <span>Serves <strong>` + recipe.servings + `</strong></span>
            <span><strong>` + recipe.difficulty + `</strong></span>
          </div>
          <h4>Ingredients</h4>
          <ul>` + ingredientList + `</ul>
          <h4>Instructions</h4>
          <p>` + recipe.steps + `</p>
        </div>
      </article>
    </div>`
  );
}

function showRecipes() {
  var query = elSearch.value.trim().toLowerCase();
  var html = "";
  var shown = 0;

  for (var i = 0; i < recipes.length; i++) {
    var matchesCategory =
      activeCategory === "All" || recipes[i].category === activeCategory;
    var matchesSearch = recipes[i].name.toLowerCase().indexOf(query) !== -1;

    if (matchesCategory && matchesSearch) {
      html += buildCard(recipes[i]);
      shown++;
    }
  }

  elParent.innerHTML = html;
  elEmpty.classList.toggle("d-none", shown !== 0);
  elCount.textContent = shown + " of " + recipes.length + " recipes";
}

function buildFilters() {
  var categories = ["All"];
  for (var i = 0; i < recipes.length; i++) {
    if (categories.indexOf(recipes[i].category) === -1) {
      categories.push(recipes[i].category);
    }
  }
  for (var k = 0; k < categories.length; k++) {
    elFilters.innerHTML +=
      `<button type="button" class="btn btn-filter rounded-pill` +
      (k === 0 ? " active" : "") +
      `" data-category="` + categories[k] + `">` + categories[k] + `</button>`;
  }
}

elFilters.addEventListener("click", function (e) {
  if (e.target.tagName !== "BUTTON") return;
  var buttons = elFilters.querySelectorAll("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  e.target.classList.add("active");
  activeCategory = e.target.getAttribute("data-category");
  showRecipes();
});

elSearch.addEventListener("input", showRecipes);

buildFilters();
showRecipes();
