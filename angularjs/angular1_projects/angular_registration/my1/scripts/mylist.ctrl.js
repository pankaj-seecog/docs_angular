angular.module('myApp').controller('Mylistcontroller',function($scope,$firebaseAuth,$firebaseArray,$routeParams){
	
	var meeting_id = $routeParams.meetingId;
	var user_id = $routeParams.userId;
	var ref = firebase.database().ref();
	var checkinRef = ref.child('users').child(user_id).child('meetings').child(meeting_id).child('checkin');
	var checkinInfo = $firebaseArray(checkinRef);
	$scope.checkinInfo = checkinInfo;
	
	
});