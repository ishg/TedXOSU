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
    .state('tab.guide', {
      url: '/guide',
      views: {
        'tab-guide': {
          templateUrl: 'client/templates/guide.html',
          controller: 'GuideCtrl'
        }
      }
    })
    .state('tab.speaker-detail', {
      url: '/guide/:speakerId',
      views: {
        'tab-guide': {
          templateUrl: 'client/templates/speaker-detail.html',
          controller: 'SpeakerDetailCtrl'
        }
      }
    });
 
  $urlRouterProvider.otherwise('tab/guide');
}