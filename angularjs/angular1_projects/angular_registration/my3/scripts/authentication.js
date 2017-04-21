angular.module('myApp').service('Authentication',function($firebaseAuth,$rootScope,$location,$firebaseObject){
	var ref = firebase.database().ref();
    var auth = $firebaseAuth();

	this.requireSignin = function(){
		
		return auth.$requireSignIn();
	}
	
	this.requireSignIn = function(){
		
		return auth.$requireSignIn();
	}
	
	auth.$onAuthStateChanged(function(userAuth){
		
		if(userAuth)
		{
			var userOb = $firebaseObject(ref.child('users').child(userAuth.uid))
			$rootScope.user = userOb;
		}
		else{
			$rootScope.user = {};
		}
	});
	
	this.logout = function(){
		
		return auth.$signOut();
		
	}
	
	this.login = function(email,password){	
	
		auth.$signInWithEmailAndPassword(email,password).then(function(res){
			console.log('The response is')
			console.log(JSON.stringify(res))
			$location.path('/home');
			
		}).catch(function(err){
			
			console.log('The error is ')
			console.log(err.message);
			$rootScope.err = err.message;
		});
	}
	
	this.register = function(user){
		
		auth.$createUserWithEmailAndPassword(user.email,user.password).then(function(res){
			ref.child('users').child(res.uid).set({
				date : new Date(),
				regUser : res.uid,
				first_name : user.first_name,
				last_name : user.last_name,
				email : user.email
			});
			console.log('The object is ')
			console.log(JSON.stringify({
				date : new Date(),
				regUser : res.uid,
				first_name : user.first_name,
				last_name : user.last_name,
				email : user.email
			}))
			$rootScope.msg ="Record added";
			
		}).catch(function(err){
			console.log('The error is ')
			console.log(JSON.stringify(err))
			$rootScope.err = err.message;
		});
		
	}
	
});