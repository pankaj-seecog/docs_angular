angular.module('myApp').controller('Homecontroller',function($rootScope,$scope,Authentication,$firebaseAuth,$firebaseArray){
	
	
	console.log('Inside the home')
	$scope.logout = function(){
		
		Authentication.logout();
		
	}
	var ref = firebase.database().ref();
	var auth = $firebaseAuth();
	auth.$onAuthStateChanged(function(user){
		
	if(user)
	{
		var meetingRef = ref.child('users').child(user.uid).child('meetings');
		var meetingAction = $firebaseArray(meetingRef);
		$scope.meetings = meetingAction;
	$scope.addMeeting = function(){	
		
		meetingAction.$add({meeting_name : $scope.meeting_name,date : new Date()}).then(function(res){
			console.log('The response is ')
			console.log(res)
		});
	}
	}
	else{
		console.log('Inside else')
	}
	
	});
	
	
});