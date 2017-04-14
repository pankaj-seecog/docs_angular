angular.module('myApp').controller('Logincontroller',function($scope,Authentication,$rootScope){
	
	
	console.log('Login page')
	$scope.login = function(){
		
		Authentication.login($scope.email,$scope.password)
		
	}
	
});