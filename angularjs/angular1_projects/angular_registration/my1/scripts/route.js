angular.module('myApp').run(function($rootScope,$location){
	$rootScope.$on('$routeChangeError',function(){
		$location.path('/login');
		
	});
	
});
angular.module('myApp').config(['$routeProvider',function($routeProvider){
	
	$routeProvider
	.when('/contact',{
		templateUrl : '../views/contact.html',
		controller : 'Contactcontroller'
		
	})
	.when('/login',{
		templateUrl : '../views/login.html',
		controller : 'Logincontroller'
	})
	.when('/register',{
		templateUrl : '../views/register.html',
		controller : 'Registercontroller'
	})
	.when('/home',{
		templateUrl : '../views/home.html',
		controller : 'Homecontroller',
		resolve : {
			
			currentAuth : function(Authentication){
				
				return Authentication.requireAuth();
			}
		}
	})
	.when('/checkIn/:meetingId/:userId',{
		templateUrl : '../views/checkin.html',
		controller : 'Checkincontroller'
	})
	.when('/mylist/:meetingId/:userId',{
		templateUrl : '../views/mylist.html',
		controller : 'Mylistcontroller'
	})
	
}]);