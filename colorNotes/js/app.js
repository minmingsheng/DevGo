var app = angular.module("app",[])
app.controller('mainController',["$scope", "$http", function($scope, $http){
	$scope.title = "Color Book"

	


	   $http.get("/colorNotes/JSON/color_from_db.php")
        .success(function(result){
            $scope.color = result;
            // console.log(result);
        })
        .error(function(data, status){
            console.log(data)
        })
     $scope.getCode = function(){
     	console.log(this.$$watchers[1].last);
     	$scope.addColor = this.$$watchers[1].last;
     }
     $scope.getBackgroudnColor=function(){
     	if($scope.backgroudnColor == $scope.addColor){
     		$scope.backgroudnColor = "#ededed";
     	}else{
     		$scope.backgroudnColor = $scope.addColor;	
     		
     	}
     	
     	console.log($scope.backgroudnColor)
     }

}])