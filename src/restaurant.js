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
  let itemType = menuItem.type
  !pizzaRestaurant.menus[itemType].includes(menuItem) &&
    pizzaRestaurant.menus[itemType].push(menuItem);
}

function removeMenuItem(pizzaRestaurant, menuItemName, itemType) {
 if(pizzaRestaurant.menus[itemType].length === 0) {
   return `Sorry, we don't sell ${menuItemName}, try adding a new recipe!`;
 } else {
    for (var i = 0; i <= pizzaRestaurant.menus[itemType].length; i++) {
      pizzaRestaurant.menus[itemType].splice(pizzaRestaurant.menus[itemType][i], 1);
      return `No one is eating our ${menuItemName} - it has been removed from the ${itemType} menu!`;
     }
 }
}

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
