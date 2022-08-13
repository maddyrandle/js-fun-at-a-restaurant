function nameMenuItem(name) {
 return `Delicious ${name}`;
}

function createMenuItem(menuItemName, price, type) {
  return menuItem = {
    name: nameMenuItem("French Toast"),
    price: price,
    type: type
  };
}

function addIngredients(ingredient, ingredients) {
  !ingredients.includes(ingredient) &&
    ingredients.push(ingredient);
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`;
}

function decreasePrice(price) {
  return price - (price / 10);
}

function createRecipe(title, ingredients,type) {
  return recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  };
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
