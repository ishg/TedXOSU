angular
	.module('TedXOSU')
	.controller('GuideCtrl', GuideCtrl);

function GuideCtrl($scope){
	$scope.speakers = $scope.$meteorCollection(Speakers, false);
}