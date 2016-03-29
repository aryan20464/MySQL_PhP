  var app=angular.module('loginapp',[]);
	app.controller('retcontroller',function($scope,$http)
	{
		//retrievedata();
		$scope.retrievedata = function()
		{
			 alert("hello");
			 $http.get("http://localhost/newp/server/retrieve.php")
             .success(function(data)
              {
               $scope.resultarr=data;
               alert($scope.resultarr);
              }
              );
		};

		$scope.insertdata = function()
		{
			alert($scope.eid);
			$http.post("/newp/server/insert.php",{'eid': $scope.eid,'eno':$scope.eno,'fname': $scope.fname,'lname': $scope.lname,'dept':$scope.dept})
             .success(function(data, status, headers, config)
              {
              console.log("inserted Successfully");
              alert("Data instruction sent");
              }
              );
		};

		$scope.del=function(id,index)
		{
			alert("Iam in delete function");
			alert(id);
			$http.post("/newp/server/delete.php",{'eid':id})
			success(function(data, status, headers, config)
              {
              console.log("Deleted Successfully");
              alert("Data instruction sent");
              }
              );

		};

		$scope.upd = function(id,noer,fi_name,la_name,de_name)
		{
			alert("iam in update function");
			alert(id);
			$scope.eid=id;
			$scope.eno=noer;
			$scope.fname=fi_name;
			$scope.lname=la_name;
			$scope.dept=de_name;

		};

		$scope.updinsert = function()
		{
			alert("in updinsert");
			alert($scope.eid);
			$http.post("/newp/server/update.php",{'emp_id': $scope.eid,'emp_no':$scope.eno,'emp_fname': $scope.fname,'emp_lname': $scope.lname,'emp_dept':$scope.dept})
             .success(function(data, status, headers, config)
              {
              console.log("udpate successful");
              alert("Data update sent");
              }
              );

		};


	});
