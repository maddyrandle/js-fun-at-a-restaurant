class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;

  }

  greetCustomer(customerName, morningTime) {
    if(morningTime === true) {
      return "Good morning, " + customerName + "!";
    } else {
      return "Hello, " + customerName + "!";
    }
  }

  checkForFood(foodItem) {
    let menu = this.restaurant.menus;
    let menuItemType = foodItem.type;
    let menuItemTypeArr = menu[menuItemType];

    if(menuItemTypeArr.length === 0) {
      return `Sorry, we aren't serving ${foodItem.name} today.`;
    } else {
       for (var i = 0; i <= menuItemTypeArr.length; i++) {
         return `Yes, we're serving ${foodItem.name} today!`;
       };
    };
  }
}

module.exports = Chef;
