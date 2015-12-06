angular
  .module('TedXOSU')
  .controller('ScheduleCtrl', ScheduleCtrl);

function ScheduleCtrl($scope){
  $scope.speakers = $scope.$meteorCollection(Speakers, false);
}
