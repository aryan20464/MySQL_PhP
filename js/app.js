var app=angular.module('enterprise',["ngRoute"]);
app.controller('AppCtrl',function($scope)
{
 	$scope.crew=[{name:"aryan",job:"Developer"},
 	{name:"chakri",job:"Front end"},
 	{name:"envy",job:"Machine"}]; 	

 	$scope.save=function()
	{
		alert($scope.pname+" "+$scope.pdescription);

	}
	 $scope.delete=function(position)
	    {
	    	if(confirm("Are you sure to delete record at position "+position+"\n\n"+"This action cannot be undone"))
	    		$scope.crew.pop();
	    }
});
app.controller('newCtrl',function($scope,$location)
{
	$scope.save=function()
	{
		//alert($scope.pname+" "+$scope.pdescription);
		$scope.crew.push({name:$scope.pname,job:$scope.pdescription});
		$location.path("/");
	}

});
app.controller('editCtrl',function($scope,$location,$routeParams)
{
	    $scope.pname=$scope.crew[$routeParams.id].name;
	    $scope.pdescription=$scope.crew[$routeParams.id].job;
	    $scope.save=function()
	    {
	    	$scope.crew[$routeParams.id].name=$scope.pname;
	    	$scope.crew[$routeParams.id].job=$scope.pdescription;
	    	$location.path("/");
	    }


});
app.config(function($routeProvider)
{
	$routeProvider
	.when("/",{templateUrl:"/newp/views/details.html"})
	.when("/add",{templateUrl:"/newp/views/updation.html",controller:"newCtrl"})
    .when("/edit/:id",{templateUrl:"/newp/views/updation.html",controller:"editCtrl"})
    .otherwise({redirectTo:"/"});
});
