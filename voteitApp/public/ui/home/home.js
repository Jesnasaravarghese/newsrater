angular.module('voteit').controller('HomeCtrl',function($scope,$firebase){
	$scope.showdiv = false;
	$scope.show = function show(){
			$scope.showdiv = true;
			
	}
	$scope.cancel = function cancel(){
			$scope.showdiv = false; 
			
	}

	var ref = new window.Firebase("https://sweltering-heat-7935.firebaseio.com/news");  
 	var fb = $firebase(ref);
 	
	$scope.save=function(news){

		$scope.table = true;
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

 	$scope.up = function up(data){
 		data.voteCount ++;
 	}
 	$scope.down = function down(data){
 		data.voteCount --;
 	}
});