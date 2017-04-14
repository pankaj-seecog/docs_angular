angular.module('myApp').run(function($rootScope,$location){
	$rootScope.$on('$routeChangeError',function(){
		$location.path('/login');
		
	});
	
});

angular.module('myApp').config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/login',{
		templateUrl : 'views/login.html',
		controller : 'Logincontroller'
	})
	.when('/register',{
		templateUrl : 'views/register.html',
		controller : 'Registercontroller'
	})
	.when('/home',{
		templateUrl : 'views/home.html',
		controller : 'Homecontroller',
		resolve : {
			
			checkIn : function(Authentication){
				
				return Authentication.requireSignIn();
				
			}
		}
	})
	.when('/joinmeeting/:uid/:mid',{
		templateUrl : 'views/joinmeeting.html',
		controller : 'Joinmeetingcontroller'
	})
	.when('/meetingmemberlist/:uid/:mid',{
		templateUrl : 'views/meetingmemberlist.html',
		controller : 'Meetingmemberlistcontroller'
	});
	
}]);