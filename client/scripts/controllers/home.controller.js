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
    'instagram://user?username=tedxohiostateu',
    'comgooglemapsurl://www.google.com/maps/place/Mershon+Auditorium/@40.000683,-83.0093077,15z/data=!4m2!3m1!1s0x0:0x988ef425d5b7d27e'
  ];

  
  
  $scope.openLink = function(i){
    if(ionic.Platform.isIOS()){
      if(i == 0){
        navigator.startApp.check(
          "fb://", 
          function(message) {
            window.open(schemes[i], '_system');
          }, 
          function(error) {
            window.open('http://www.facebook.com/TEDxOhioStateU', '_system');
          }
        );
      }else if(i==1){
        navigator.startApp.check(
          "twitter://", 
          function(message) {
            window.open(schemes[i], '_system');
          }, 
          function(error) {
            window.open('http://twitter.com/TEDxOhioStateU', '_system');
          }
        );
      }else if(i==2){
        navigator.startApp.check(
          "instagram://", 
          function(message) {
            window.open(schemes[i], '_system');
          }, 
          function(error) {
            window.open('http://instagram.com/tedxohiostateu', '_system');
          }
        );
      }else if(i==3){
        navigator.startApp.check(
          "comgooglemaps://", 
          function(message) {
            window.open(schemes[i], '_system');
          }, 
          function(error) {
            window.open('https://www.google.com/maps/place/Mershon+Auditorium/@40.000683,-83.0093077,15z/data=!4m2!3m1!1s0x0:0x988ef425d5b7d27e', '_system');
          }
        );
      }

    }else if (ionic.Platform.isAndroid()){
      
      if(i == 0){
        navigator.startApp.check(
          "com.facebook.katana", 
          function(message) {
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
      }else if(i==3){
        navigator.startApp.check(
          "com.google.android.gms.maps", 
          function(message) {
            window.open(schemes[i], '_system');
          }, 
          function(error) {
            window.open('https://www.google.com/maps/place/Mershon+Auditorium/@40.000683,-83.0093077,15z/data=!4m2!3m1!1s0x0:0x988ef425d5b7d27e', '_system');
          }
        );
      }
    }
  }
}