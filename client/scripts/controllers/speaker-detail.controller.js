angular
  .module('TedXOSU')
  .controller('SpeakerDetailCtrl', SpeakerDetailCtrl);
 
function SpeakerDetailCtrl ($scope, $stateParams) {
  var speakerId = $stateParams.speakerId;
  $scope.speaker = $scope.$meteorObject(Speakers, speakerId, false);
}