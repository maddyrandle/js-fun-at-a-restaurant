function takeOrder(order, deliveryOrders) {
  return deliveryOrders.length < 3 &&
    deliveryOrders.push(order);
}

function refundOrder(orderNumber, deliveryOrders) {

  for (i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1)
    }
  }
}

function listItems(deliveryOrders) {
  let orderNames = [];
  deliveryOrders.forEach((order, i) => {
    orderNames.push(order.item)
  });
  return orderNames.join(', ');
}

function searchOrder(deliveryOrders, orderItem) {
  let newArr = [];
  for(var i = 0; i < deliveryOrders.length; i++) {
    newArr.push(deliveryOrders[i].item)
  }

  return newArr.includes(orderItem);
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
