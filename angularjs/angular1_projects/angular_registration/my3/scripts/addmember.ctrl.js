angular.module('myApp').controller('AddmemberController',function($rootScope,$routeParams,$scope,Authentication,$firebaseAuth,$firebaseArray,$location){
var uid= $routeParams.uid;
var mid = $routeParams.mid;
console.log(uid+'--'+mid)
var ref = firebase.database().ref();
var auth = $firebaseAuth();
auth.$onAuthStateChanged(function(user){
	var memberRef = ref.child('users').child(uid).child('meetings').child(mid).child('members');
	var memberInfo = $firebaseArray(memberRef);
	$scope.addMember = function(){
		memberInfo.$add({first_name:$scope.first_name,last_name : $scope.last_name,email :$scope.email}).then(function(data){		
console.log('/memberList/{{mid}}/{{uid}}');		
			$location.path('/memberList/'+mid+'/'+uid);
		});
	}
	
});
	
});