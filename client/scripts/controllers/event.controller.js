angular
  .module('TedXOSU')
  .controller('EventCtrl', EventCtrl);

function EventCtrl($scope, $ionicSlideBoxDelegate){
	$scope.nextSlide=function(){
    $ionicSlideBoxDelegate.next();
  }
}