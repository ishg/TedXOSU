angular
  .module('TedXOSU')
  .config(config);
 
function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'client/templates/tabs.html'
    })
    .state('tab.speakers', {
      url: '/speakers',
      views: {
        'tab-speakers': {
          templateUrl: 'client/templates/speakers.html',
          controller: 'SpeakersCtrl'
        }
      }
    })
    .state('tab.speaker-detail', {
      url: '/speakers/:speakerId',
      views: {
        'tab-speakers': {
          templateUrl: 'client/templates/speaker-detail.html',
          controller: 'SpeakerDetailCtrl'
        }
      }
    })
    .state('tab.schedule', {
      url: '/schedule',
      views: {
        'tab-schedule': {
          templateUrl: 'client/templates/schedule.html',
          controller: 'ScheduleCtrl'
        }
      }
    })
    .state('tab.event', {
      url: '/event',
      views: {
        'tab-event': {
          templateUrl: 'client/templates/event.html',
          controller: 'EventCtrl'
        }
      }
    })
    .state('tab.home',{
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'client/templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    });
 
  $urlRouterProvider.otherwise('tab/home');
}