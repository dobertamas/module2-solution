(function () {
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;

    //toBuyList.name="toBuyList";
    toBuyList.itemName = "";
    toBuyList.itemQuantity= "";

    toBuyList.addItemToBuyList = function () {
    ShoppingListCheckOffService.addItemToBuyList(toBuyList.name, toBuyList.quantity);
  }

  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();
  console.log(toBuyList.items);

  }


  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtList = this;

  }


  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [{name:"cookies",quantity:"10"},{name:"cola",quantity:"5"},{name:"ice cream",quantity:"3"}];

    service.getToBuyItems = function () {
    return toBuyItems;
   };

    service.addItemToBuyList = function (itemName, itemQuantity) {
    var item = {
      name: itemName,
      quantity: itemQuantity
    };
    toBuyItems.push(item);
  };

    var boughtItems = [];

  }


})();
