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
		console.log('the user is ')
		console.log(user.uid);
		var meetingRef = ref.child('users').child(user.uid).child('meetings');
		var meetingAction = $firebaseArray(meetingRef);
		$scope.meetings = meetingAction;
		console.log($scope.meetings)
	$scope.addMeeting = function(){	
		alert($scope.meeting_name)
		meetingAction.$add({meeting_name : $scope.meeting_name,date : new Date()}).then(function(res){
			console.log('The response is ')
			console.log(res)
		});
	}
	
	$scope.deleteMeeting = function(key){
		meetingAction.$remove(key)
	
	}
	
	
	}
	else{
		console.log('Inside else')
	}
	
	});
	
	
});