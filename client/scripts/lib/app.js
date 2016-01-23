angular
  .module('TedXOSU', [
    'angular-meteor',
    'ionic'
  ]);

 
if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
  //screen.lockOrientation('portrait');
}
else {
  angular.element(document).ready(onReady);
}



if(Meteor.isServer){  
  Meteor.startup(function () {
    WebApp.connectHandlers.use(function (req, res, next) {
      res.setHeader('access-control-allow-origin', '*');
      return next();
    })
  })
}
 
function onReady() {
  angular.bootstrap(document, ['TedXOSU']);
}