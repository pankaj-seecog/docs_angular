angular.module('myApp').controller('Checkincontroller',function($scope,$routeParams,$firebaseArray,$location){
	var meeting_id = $routeParams.meetingId;
	var user_id = $routeParams.userId;
	var ref = firebase.database().ref();
	var checkinRef = ref.child('users').child(user_id).child('meetings').child(meeting_id).child('checkin');
	var checkinInfo = $firebaseArray(checkinRef);
	$scope.checkin = function(){		
		
		var checkInRecord = {
			first_name : $scope.first_name,
			last_name : $scope.last_name,
			email : $scope.email
			
		};
		checkinInfo.$add(checkInRecord).then(function(res){
			console.log('The response is ')
			console.log(JSON.stringify(res));
			$location.path('/mylist/'+meeting_id+'/'+user_id);
			
		});
		console.log(JSON.stringify(checkInRecord));
	}
	
});