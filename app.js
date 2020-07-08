(function () {
'use strict';


	angular.module('myfirstapp',[])
	.controller('myFirstConroller',function($scope)
	{
		$scope.name = "arpit";
		$scope.sayhello = function(){
			return "Hello Coursera"
		}
	});

})();