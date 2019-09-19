(function () {
'use strict';

angular.module('buyapp',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

//To buy list
	ToBuyController.$inject =['ShoppingListService'];
	function ToBuyController (ShoppingListService){
		var buy = this;

		buy.items = ShoppingListService.buyItems();

		buy.removeItem = function(itemIndex){
			ShoppingListService.bought(itemIndex);
		};

	}

	//Already bought list
	AlreadyBoughtController.$inject =['ShoppingListService'];
	function AlreadyBoughtController (ShoppingListService){
		var bought = this;

		bought.items = ShoppingListService.boughtItems();
	}

//Shopping list service
	function ShoppingListService(){
		var service = this;

		var buyItems = [
		{name: "cookies",
		 quantity: 10
		},
		{name: "bananas",
		 quantity: 12
		},
		{name: "soda",
		 quantity: 10
		},
		{name: "cheese",
		 quantity: 2
		},
		{name: "bread",
		 quantity: 2
		}];
		//var buyItems = [{name:"a",quantity:10}];
		var boughtItems = [];

		service.bought = function(itemIndex) {
			boughtItems.push(buyItems[itemIndex]);
			buyItems.splice(itemIndex, 1);
		};

		service.boughtItems = function(){
			return boughtItems;
		};

		service.buyItems = function(){
			return buyItems;
		};
	}

})();
