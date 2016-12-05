(function () {
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.name="toBuyList";
    toBuyList.itemName = "";
    toBuyList.itemQuantity ;

    toBuyList.addItemToBuyList = function () {
    ShoppingListCheckOffService.addItemToBuyList(toBuyList.itemName, toBuyList.itemQuantity);
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

    var toBuyItems = [{"cookies":"10"},{"cola":"5"}];

    service.getToBuyItems = function () {
    return toBuyItems;
   };

    service.addItemToBuyList = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    toBuyItems.push(item);
  };

    var boughtItems = [];

  }


})();
