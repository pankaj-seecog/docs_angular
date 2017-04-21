angular.module('myApp').controller('Homecontroller',function($rootScope,$scope,Authentication,$firebaseAuth,$firebaseArray){

var ref = firebase.database().ref();
var auth = $firebaseAuth();

auth.$onAuthStateChanged(function(user){
	
	var uid = user.uid;
	var meetingRef = ref.child('users').child(uid).child('meetings');
	var meetingInfo = $firebaseArray(meetingRef);
	$scope.meetings = meetingInfo;
	
	$scope.addMeeting = function(){
		
		meetingInfo.$add({name : $scope.meeting_name,date : new Date}).then(function(data){
			console.log('Meeting added')
		});
		
	}
 });
console.log('the flag is playing here')

	
});