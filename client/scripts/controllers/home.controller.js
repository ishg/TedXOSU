angular
  .module('TedXOSU')
  .controller('HomeCtrl', HomeCtrl);

function HomeCtrl($scope, $ionicModal){

  $scope.openModal = function(){
    $ionicModal.fromTemplateUrl('registration-modal.html',{
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal){
      $scope.registerModal = modal;
      $scope.registerModal.show();
    });
  };

  $scope.closeModal = function(){
    $scope.registerModal.hide();
    $scope.registerModal.remove(); 
  };
  
}