angular.module('myApp').controller('Meetingmemberlistcontroller',function($scope,$firebaseArray,$firebaseAuth,$routeParams,$firebaseObject){
	
	var ref = firebase.database().ref();
	var auth = $firebaseAuth();
	
	var meetingId = $routeParams.mid;
	var uid = $routeParams.uid;
	
	var memberRef = ref.child('users').child(uid).child('meetings').child(meetingId);
	var memberAction = $firebaseArray(memberRef);
	$scope.memberList = memberAction;
	
	$scope.deleteCheckIn = function(id){
		var delRef = memberRef.child(id);
		var record = $firebaseObject(delRef);
		record.$remove(id);
	}
	
});