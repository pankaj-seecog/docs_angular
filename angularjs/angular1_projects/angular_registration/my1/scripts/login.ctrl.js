angular.module('myApp').controller('Logincontroller',function($scope,Authentication){
	
	$scope.login = function(){		

		Authentication.login($scope.user);
	}
	
});