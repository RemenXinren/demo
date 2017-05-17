



var app = angular.module("shopping",[]);
app.controller("shopInfo",function($scope){
	$scope.shopInfoList = [
		{
			'img':'../img/sp1.jpg',
			'inner':'精亚无声静音可充电无线鼠标电脑笔记本台式游戏办公无限鼠标',
			'price':26.90,
			'amount':1,
			'check':false
		},
		{
			'img':'../img/sp2.jpg',
			'inner':'精亚无声静音可充电无线鼠标电脑笔记本台式游戏办公无限鼠标',
			'price':28.99,
			'amount':2,
			'check':false
		},
		{
			'img':'../img/sp3.jpg',
			'inner':'【男神专享】男装 麻棉衬衫(短袖) 183598 优衣库UNIQLO',
			'price':149.90,
			'amount':1,
			'check':false
		}	
	];
	$scope.shopList = [];
    $scope.shopList = $scope.shopInfoList;


	
//	减少	
	$scope.reduce = function($index){
		if( parseInt($scope.shopList[$index].amount) >= 1 ){
			$scope.shopList[$index].amount = parseInt($scope.shopList[$index].amount) - 1 ;
		}
	};
//	增加
	$scope.add = function($index){		
		$scope.shopList[$index].amount = parseInt($scope.shopList[$index].amount) + 1 ;
	};
//总价
	$scope.totalPrice = function(){
		$scope.total = 0;
		angular.forEach($scope.shopList, function(value, key){
			if(value.check){
				$scope.total = $scope.total + value.price*(parseInt(value.amount));
			}
		});
		return $scope.total.toFixed(2);
	};
//总数量
	$scope.totalNum = function(){
		$scope.shopNum = 0;
		angular.forEach($scope.shopList, function(value, key){
			if( value.amount == '' || value.amount < 0  ){
				value.amount = 0;
			}
			if(value.check){
				$scope.shopNum = $scope.shopNum + (parseInt(value.amount));
			}
		});
		return $scope.shopNum;
	};
	
//全选
	$scope.checkAll=function(){
		for(var i in $scope.shopList){
			 $scope.shopList[i].check=$scope.all;
		}
	};
//删除
	$scope.removeLine = function(index) {
		if(confirm("你确定删除该物品？")){
			$scope.shopList.splice(index, 1);
		}else{
			
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
});

