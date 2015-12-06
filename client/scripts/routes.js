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
    });
 
  $urlRouterProvider.otherwise('tab/speakers');
}