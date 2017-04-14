angular.module('myApp').controller('Registercontroller',function($scope,Authentication){
	
	console.log('Register page')
	$scope.register = function(){
		
		Authentication.register($scope.user);
	}
});