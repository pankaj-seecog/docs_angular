angular.module('myApp').service('Authentication',function($rootScope,$firebaseAuth,$firebaseObject,$location){
	var ref = firebase.database().ref();
		 var auth = $firebaseAuth();
	
	
	auth.$onAuthStateChanged(function(authUser){
		 if(authUser)
		 {
		 var userRef = ref.child('users').child(authUser.uid);
		 var userObj = $firebaseObject(userRef);
		 $rootScope.currentUser = userObj;
		 }
		 else
		 {
		 $rootScope.currentUser = '';
		 }
		 });
		 
		 this.logout = function(){
		 return auth.$signOut();
		 }
		 
		 
		 this.requireAuth = function(){
		 return auth.$requireSignIn();
		 }
		 
		 this.login = function(user){
		 auth.$signInWithEmailAndPassword(user.email,user.password).then(function(res){
		 $location.path('/home');
		 }).catch(function(err){
		 console.log('Error is ')
		 console.log(JSON.stringify(err))
		 $rootScope.msg = err.message;
		 });
		 }
		 
		 this.registration = function(user){
		 auth.$createUserWithEmailAndPassword(user.email,user.password).then(function(res){
		 var regRef = ref.child('users').child(res.uid).set({
		 date : new Date(),
		 regUser : res.uid,
		 firstname : user.first_name,
		 lastname : user.last_name,
		 email : user.email
		 })
		 $rootScope.user = {};
		 $rootScope.msg = 'Successfully added';
		 console.log('The message is ')
		 console.log($rootScope.msg)
		 }).catch(function(err){
		 console.log(err.message)
		 });
		 }

		 });
