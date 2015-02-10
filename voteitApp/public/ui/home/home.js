angular.module('voteit').controller('HomeCtrl',function($scope,$firebase){
	$scope.showdiv = false;
	$scope.show = function show(){
			$scope.showdiv = true;
			
	};
	$scope.cancel = function cancel(){
			$scope.showdiv = false; 
			
	};

	var ref = new window.Firebase("https://sweltering-heat-7935.firebaseio.com/news");
	var fb = $firebase(ref);
	$scope.save=function(news){
		$scope.showdiv = false;
		var title = news.title;
		var description = news.description;
		var voteCount = 0;
	fb.$push({
				title:title,
				description:description,
				voteCount:voteCount
       });
	$scope.news={};  

	};

	var syncObject = fb.$asObject();
	// three way data binding
	syncObject.$bindTo($scope,'newsfind');	

	$scope.up = function up(data,newsfind){
	data.voteCount ++;
	var arr = [];
	var i = 0;
	for(var key in newsfind){
		arr[i] = newsfind[key];
		i++;
	}
	console.log(arr);
	for(var i = 2;i < arr.length;i++){
		for(var j = 2;j<arr.length - 1;j++){
			if(arr[j].voteCount < arr[j+1].voteCount){
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	i = 0;
	for(var key in newsfind){
		newsfind[key] = arr[i];
		i++;
	}
	console.log(newsfind);

	};
	$scope.down = function down(data,newsfind){
	data.voteCount --;
	var arr = [];
	var i = 0;
	for(var key in newsfind){
		arr[i] = newsfind[key];
		i++;
	}
	console.log(arr);
	for(var i = 2;i < arr.length;i++){
		for(var j = 2;j<arr.length - 1;j++){
			if(arr[j].voteCount < arr[j+1].voteCount){
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	i = 0;
	for(var key in newsfind){
		newsfind[key] = arr[i];
		i++;
	}
	console.log(newsfind);


	};


	// var sort = function sort(){

	// }


});