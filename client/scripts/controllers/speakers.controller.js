angular
	.module('TedXOSU')
	.controller('SpeakersCtrl', SpeakersCtrl);

function SpeakersCtrl($scope){
	$scope.speakers = $scope.$meteorCollection(Speakers, false);
	$scope.speakers = chunk($scope.speakers, 2);
}

function chunk(arr, size) {
  var newArr = [];
  for (var i=0; i<arr.length; i+=size) {
    newArr.push(arr.slice(i, i+size));
  }
  return newArr;
}

