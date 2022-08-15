function createRestaurant(name) {
  return pizzaRestaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    },
  }
}

function addMenuItem(pizzaRestaurant, menuItem) {
  let typeOfMeal = menuItem.type
  !pizzaRestaurant.menus[typeOfMeal].includes(menuItem) &&
    pizzaRestaurant.menus[typeOfMeal].push(menuItem);
}

function removeMenuItem(pizzaRestaurant, menuItemName, typeOfMeal) {
  let typeOfMealArr = pizzaRestaurant.menus[typeOfMeal];
  let error1 = `No one is eating our ${menuItemName} - it has been removed from the ${typeOfMeal} menu!`;
  let error2 = `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`;

 if(typeOfMealArr.length === 0) {
   return error2;
 } else {
    for (var i = 0; i <= typeOfMealArr.length; i++) {
      typeOfMealArr.splice(typeOfMealArr[i], 1);
      return error1;
    };
 };
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
