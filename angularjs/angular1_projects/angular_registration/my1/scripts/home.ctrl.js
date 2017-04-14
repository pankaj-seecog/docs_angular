angular.module('myApp').controller('Homecontroller',function($scope,$rootScope,Authentication,$firebaseAuth,$firebaseArray){
	
	var ref = firebase.database().ref();
    var auth = $firebaseAuth();
	
	
	auth.$onAuthStateChanged(function(authUser){
		 if(authUser)
		 {
			 var meetingRef = ref.child('users').child(authUser.uid).child('meetings');
			 var meetingInfo = $firebaseArray(meetingRef);
			 $scope.meetings = meetingInfo;
			 
			 meetingInfo.$loaded().then(function(data){
				 
				 $rootScope.countMeetings = meetingInfo.length;
			 });
			 
			 meetingInfo.$watch(function(data){
				 $rootScope.countMeetings = meetingInfo.length;				 
			 });
			 
			 $scope.countMeetings = $scope.meetings.length;
			 $scope.addMeeting = function(){
		meetingInfo.$add({name : $scope.meetingname,date : new Date()}).then(function(response){
			$scope.meetingname = '';
		});
	     }
		 
		 $scope.deleteMeeting = function(key){
			 meetingInfo.$remove(key);
			 
		 }
		 
		 }
		 else
		 {
		 }
		 });
	$scope.logout = function(){
		
		Authentication.logout();
		
	}
	
	
});