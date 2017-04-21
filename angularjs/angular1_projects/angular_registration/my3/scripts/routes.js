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
				
				return true;//Authentication.requireSignIn();
				
			}
		}
	})
	.when('/addMember/:mid/:uid',{
		templateUrl : 'views/addmember.html',
		controller : 'AddmemberController'
	})
	.when('/memberList/:mid/:uid',{
		templateUrl : 'views/memberlist.html',
		controller : 'MemberlistController'
	})
	
}]);