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

  var schemes = [
    'fb://facewebmodal/f?href=https://www.facebook.com/TEDxOhioStateU',
    'twitter://user?screen_name=TEDxOhioStateU',
    'instagram://user?username=tedxohiostateu'
  ];

  
  
  $scope.openLink = function(i){
    if(ionic.Platform.isIOS()){
      if(i == 0){
        navigator.startApp.check(
          "fb://", 
          function(message) {
            
          }, 
          function(error) {
            window.open('http://www.facebook.com/TEDxOhioStateU', '_system');
          }
        );
      }else if(i==1){
        navigator.startApp.check(
          "twitter://", 
          function(message) {
            
          }, 
          function(error) {
            window.open('http://twitter.com/TEDxOhioStateU', '_system');
          }
        );
      }else if(i==2){
        navigator.startApp.check(
          "instagram://", 
          function(message) {

          }, 
          function(error) {
            window.open('http://instagram.com/tedxohiostateu', '_system');
          }
        );
      }

    }else if (ionic.Platform.isAndroid()){
      
      if(i == 0){
        navigator.startApp.check(
          "com.facebook.katana", 
          function(message) {
            console.log("Opening Facebook");
            window.open(schemes[i], '_system');
          }, 
          function(error) {
            window.open('http://www.facebook.com/TEDxOhioStateU', '_system');
          }
        );
      }else if(i==1){
        navigator.startApp.check(
          "com.twitter.android", 
          function(message) {
            window.open(schemes[i], '_system');
          }, 
          function(error) {
            window.open('http://twitter.com/TEDxOhioStateU', '_system');
          }
        );
      }else if(i==2){
        navigator.startApp.check(
          "com.instagram.android", 
          function(message) {
            window.open(schemes[i], '_system');
          }, 
          function(error) {
            window.open('http://instagram.com/tedxohiostateu', '_system');
          }
        );
      }  
    }
  }

  
  
  
}