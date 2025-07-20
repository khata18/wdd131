const recipes = [
  {
    name: "Sweet Potato Waffles",
    image: "./images/sweet-potato-waffle-md.jpg",
    rating: 4,
    tags: ["Waffles", "Sweet Potato", "Side"],
    description: "Savory waffles made with Sweet potato with a hint of Ginger"
  },
  {
    name: "Chicken Curry",
    image: "./images/chicken-curry.webp",
    rating: 5,
    tags: ["chicken", "entree", "Indian"],
    description: "Quick and easy Chicken curry recipe made with easy to find ingredients."
  },
  {
    name: "Escalope de Poulet a la Creme",
    image: "./images/escalopes-de-poulet-a-la-creme.webp",
    rating: 4.5,
    tags: ["Chicken", "Entree"],
    description: "Creamy rice dish with mushrooms, lemon, and mustard."
  },
  {
    name: "Oven Roasted Potato Slices",
    image: "./images/roasted-potatoes.webp",
    rating: 4,
    tags: ["Potatoes", "Side"],
    description: "Easy and delicious oven roasted potatoes that go great with anything."
  },
  {
    name: "Black Beans and Rice",
    image: "./images/black-beans-and-rice.jpg",
    rating: 3,
    tags: ["Southwest", "Entree"],
    description: "Black beans and tomatoes over rice, topped with cheese and tortilla chips."
  },
  {
    name: "Chocolate Chip Cookies",
    image: "./images/chocolate-chip-cookies.jpg",
    rating: 5,
    tags: ["Dessert"],
    description: "Soft cookies loaded with chocolate chips and coconut."
  },
  {
    name: "Gooseberry Cake with Vanilla Cream",
    image: "./images/german-gooseberry-cake.jpg",
    rating: 5,
    tags: ["Dessert", "German"],
    description: "Tart gooseberries layered with vanilla cream and buttery crumble."
  },
  {
    name: "Apple Crisp",
    image: "./images/apple-crisp.jpg",
    rating: 4,
    tags: ["Dessert"],
    description: "Simple apple crisp with cinnamon oat topping—perfect warm with ice cream."
  }
];

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
  return list[random(list.length)];
}

function renderStars(rating) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    html += `<span aria-hidden="true" class="${i <= rating ? 'icon-star' : 'icon-star-empty'}">${i <= rating ? '⭐' : '☆'}</span>`;
  }
  return html;
}

function recipeTemplate(recipe) {
  return `
    <article class="recipe-card">
      <img src="${recipe.image}" alt="Image of ${recipe.name}" />
      <div class="recipe-details">
        ${recipe.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        <h2>${recipe.name}</h2>
        <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
          ${renderStars(recipe.rating)}
        </span>
        <p class="description">${recipe.description}</p>
      </div>
    </article>
  `;
}

function renderRecipes(recipeList) {
  const container = document.querySelector('.recipes');
  container.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
}

function filterRecipes(query) {
  const lowerQuery = query.toLowerCase();

  const filtered = recipes.filter(recipe => {
    return (
      recipe.name.toLowerCase().includes(lowerQuery) ||
      recipe.description.toLowerCase().includes(lowerQuery) ||
      recipe.tags.find(tag => tag.toLowerCase().includes(lowerQuery))
    );
  });

  return filtered.sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
  e.preventDefault();
  const input = document.querySelector('.search-bar input');
  const query = input.value.trim();
  renderRecipes(filterRecipes(query));
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);

  const form = document.querySelector('.search-bar');
  form.addEventListener('submit', searchHandler);
}

window.addEventListener('DOMContentLoaded', init);
