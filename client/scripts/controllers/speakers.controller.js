angular
	.module('TedXOSU')
	.controller('SpeakersCtrl', SpeakersCtrl);

function SpeakersCtrl($scope){
	$scope.speakers = $scope.$meteorCollection(Speakers, false);
	//$scope.speakers = chunks($scope.speakers, 2);
  //$("#special-list div.row:last-child").addClass("last-item");
  $scope.performers = $scope.$meteorCollection(Performers, false);
  //$scope.performers = chunkp($scope.performers, 2);
}

function chunks(arr, size) {
  var newArr = [];
  for (var i=0; i<arr.length; i+=size) {
    newArr.push(arr.slice(i, i+size));
  }
  var x = newArr.length -1;
  var empty = {
    name: "",
    picture: "",
    title: "",
    lines: [
      ""
    ]
  };
  if(newArr[x].length == 1){
    newArr[x].push(empty)
  }
  return newArr;
}

function chunkp(arr, size) {
  var newArr = [];
  for (var i=0; i<arr.length; i+=size) {
    newArr.push(arr.slice(i, i+size));
  }
  return newArr;
}

