angular.module('myApp').controller('Memberlistcontroller',function($scope,$routeParams,Authentication,$firebaseAuth,$firebaseArray,$firebaseObject){
	var ref = firebase.database().ref();
	var auth = $firebaseAuth();
	var uid = $routeParams.uid;
	var mid = $routeParams.mid;
	$scope.mid = mid;
	$scope.loadStt = false;
	$scope.recordKey = '';
	$scope.key = '';
	$scope.giftStt=false;
	//$scope.x.showStt = true;
	//auth.$onAuthStateChanged(function(user){
		//console.log(user)
		var memberRef = ref.child('users').child(uid).child('meetings').child(mid).child('members');
		var memberInfo = $firebaseArray(memberRef);
		memberInfo.$loaded(function(data){
			console.log('Loaded')
	    $scope.members = memberInfo;
		$scope.loadStt = true;	
		});
		
		$scope.giftStatusEntry = function(x){
			console.log($scope.giftStt);
			//$scope.giftStt = true;
			x.showStt = !x.showStt;
		}
		
		$scope.addGift = function(uid,mid,mmid){
			var giftRef = ref.child('users').child(uid).child('meetings').child(mid).child('members').child(mmid).child('gifts');
			var giftInfo = $firebaseArray(giftRef);
			giftInfo.$add({gift_name : $scope.gift}).then(function(){
				
				console.log('Gift Added');
			});
		}
		
	$scope.luckyDraw = function(){
		var randomId = Math.round(Math.random()*$scope.members.length-1);
		console.log('random number is '+randomId);
		$scope.recordKey = $scope.members.$keyAt(randomId);
		console.log($scope.recordKey);
	}
	$scope.deleteMember = function(id){
		var memberDeleteRef = ref.child('users').child(uid).child('meetings').child(mid).child('members').child(id);
		var record = $firebaseObject(memberDeleteRef);		
		var stt = confirm('Do you want to delete');
		if(stt){
		record.$remove(id);
	     }
	}
	
	$scope.logOut = function(){
		Authentication.logout();
	}
	
	
	$scope.saveGift = function(member,giftText){
		console.log(member+"--"+giftText);
		var giftRef = memberRef.child(member.$id).child('awards');
		var giftInfo = $firebaseArray(giftRef);
		giftInfo.$add({name : giftText}).then(function(){
			console.log('Added successfully!');
		}).catch(function(err){
			console.log('The error is ')
			console.log(err)
		});;
	}
	$scope.deleteAward = function(member,key){
		console.log(member.$id)
		console.log(key)
		var giftRef = memberRef.child(member.$id).child('awards').child(key);
		var giftInfo = $firebaseObject(giftRef);
		giftInfo.$remove(key);
	}
	
	
});