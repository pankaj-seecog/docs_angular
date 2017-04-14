angular.module('myApp').controller('Registercontroller',function($scope,$rootScope,Authentication){
	
	console.log('Registration page');
	$scope.register = function(){
		$rootScope.user = $scope.user;
		Authentication.registration($rootScope.user);
		$scope.user = {};
	}
	
});