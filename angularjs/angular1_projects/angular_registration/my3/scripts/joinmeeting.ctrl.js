angular.module('myApp').controller('Joinmeetingcontroller',function($scope,$firebaseAuth,$routeParams,$firebaseArray,$location){
	var ref = firebase.database().ref();
	var auth = $firebaseAuth();
	
	var meetingId = $routeParams.mid;
	var uid = $routeParams.uid;
	
	auth.$onAuthStateChanged(function(res){
		if(res)
		{
			var joinRef = ref.child('users').child(res.uid).child('meetings').child(meetingId);
			var joinAction = $firebaseArray(joinRef);
			$scope.meetingMembers = joinAction;
			$scope.joinMeeting = function(){		    
			joinAction.$add({first_name : $scope.first_name,last_name : $scope.last_name,email : $scope.email}).then(function(res){
				console.log('The add record is ')
				console.log(JSON.stringify(res))
				$location.path('/meetingmemberlist/'+uid+'/'+meetingId);
			});
		
	    }
	
			
		}
		else
		{
			
		}
		
	});
	
});