(function(){
  'use strict';

  var products = [{prodName : "Lechuga", prodQty: "1 bag"},
{prodName : "Lechuga", prodQty: "1 bag"},
{prodName : "Lechuga", prodQty: "1 bag"},
{prodName : "Lechuga", prodQty: "1 bag"},
{prodName : "Lechuga", prodQty: "1 bag"}];

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService){

    var list=this;
    list.hideNoMoreBuy=false;
    list.Buy = function (itemIndex){
      ShoppingListCheckOffService.addItem(itemIndex);
    };
    list.items = ShoppingListCheckOffService.getItems("buy");

  }

  AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService){
    var list=this;
    list.items = ShoppingListCheckOffService.getItems("bought");
  }



  function ShoppingListCheckOffService(){
    var service = this;
    var toBuyItems = [{prodName : "Lechuga", prodQty: "1 bag"},
        {prodName : "Lechuga", prodQty: "1 bag"},
        {prodName : "Lechuga", prodQty: "1 bag"},
        {prodName : "Lechuga", prodQty: "1 bag"},
        {prodName : "Lechuga", prodQty: "1 bag"}];
    var alreadyBoughtItems=[]//[{prodName : "Lechuga", prodQty: "2 bags"}];
    var hideNoMoreBuy = 0;
    service.addItem = function(itemIndex){
      var item = toBuyItems[itemIndex];
      toBuyItems.splice(itemIndex,1);
      alreadyBoughtItems.push(item);
    };


    service.getItems = function(array){
      if(array=="buy")
        return toBuyItems;
      else {
        return alreadyBoughtItems;
      }
    };




  }

})()
