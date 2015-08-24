var AppDispatcher = require('../dispatcher/AppDispatcher');
var FluxCartConstants = require('../constants/FluxCartConstants');

// Define action methods
var FluxCartActions = {

  // Receive inital product data
  receiveProduct: function(data) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.RECEIVE_DATA,
      data: data
    })
  },


  // Add item to cart
  addToCart: function(update) {
    AppDispatcher.handleAction({
      actionType: FluxCartConstants.CART_ADD,
      update: update
    })
  }

};

module.exports = FluxCartActions;
