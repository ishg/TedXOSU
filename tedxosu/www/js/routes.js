angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('schedule', {
      url: '/schedule',
      templateUrl: 'templates/schedule.html',
      controller: 'scheduleCtrl'
    })
        
      
    
      
        
    .state('map', {
      url: '/map',
      templateUrl: 'templates/map.html',
      controller: 'mapCtrl'
    })
        
      
    
      
        
    .state('eventInformation', {
      url: '/event-info',
      templateUrl: 'templates/eventInformation.html',
      controller: 'eventInformationCtrl'
    })
        
      
    
      
    .state('tabsController', {
      url: '/home',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
    .state('menu', {
      url: '/side-menu',
      abstract:true,
      templateUrl: 'templates/menu.html'
    })
      
    
      
        
    .state('liveBroadcast', {
      url: '/live',
      templateUrl: 'templates/liveBroadcast.html',
      controller: 'liveBroadcastCtrl'
    })
        
      
    
      
        
    .state('menu.myNotes', {
      url: '/notes',
      views: {
        'side-menu21': {
          templateUrl: 'templates/myNotes.html',
          controller: 'myNotesCtrl'
        }
      }
    })
        
      
    
      
        
    .state('addNote', {
      url: '/add-note',
      templateUrl: 'templates/addNote.html',
      controller: 'addNoteCtrl'
    })
        
      
    
      
        
    .state('signUp', {
      url: '/sign-up',
      templateUrl: 'templates/signUp.html',
      controller: 'signUpCtrl'
    })
        
      
    
      
        
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })
        
      
    
      
        
    .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'registerCtrl'
    })
        
      
    
      
        
    .state('viewNote', {
      url: '/view-note',
      templateUrl: 'templates/viewNote.html',
      controller: 'viewNoteCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/schedule');

});