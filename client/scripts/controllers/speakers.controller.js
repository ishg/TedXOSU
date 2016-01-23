angular
	.module('TedXOSU')
	.controller('SpeakersCtrl', SpeakersCtrl);

function SpeakersCtrl($scope, $ionicLoading){
	$ionicLoading.show({
    template: '<ion-spinner></ion-spinner>'
  })

  $scope.speakers = $scope.$meteorCollection(Speakers, false);
	//$scope.speakers = chunks($scope.speakers, 2);
  //$("#special-list div.row:last-child").addClass("last-item");
  $scope.performers = $scope.$meteorCollection(Performers, false);
  //$scope.performers = chunkp($scope.performers, 2);

  $scope.$on('$ionicView.beforeEnter', function(e){
    ionic.DomUtil.ready(function(){
      $ionicLoading.hide();
    })
  });
}

