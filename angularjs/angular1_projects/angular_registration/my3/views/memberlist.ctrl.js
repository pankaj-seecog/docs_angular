angular.module('myApp').controller('MemberlistController',function($rootScope,$routeParams,$scope,Authentication,$firebaseAuth,$firebaseArray){
var uid= $routeParams.uid;
var mid = $routeParams.mid;
console.log(uid+'--'+mid)
var ref = firebase.database().ref();
var auth = $firebaseAuth();
auth.$onAuthStateChanged(function(user){
	var memberRef = ref.child('users').child(uid).child('meetings').child(mid).child('members');
	var memberInfo = $firebaseArray(memberRef);
	$scope.members = memberInfo;
	}
	
});
	
});