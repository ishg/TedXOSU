angular
	.module('TedXOSU')
	.controller('SpeakersCtrl', SpeakersCtrl);

function SpeakersCtrl($scope){
	$scope.speakers = $scope.$meteorCollection(Speakers, false);
}