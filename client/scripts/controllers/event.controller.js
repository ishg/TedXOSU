angular
  .module('TedXOSU')
  .controller('EventCtrl', EventCtrl);

function EventCtrl($scope, $ionicSlideBoxDelegate){
	$scope.nextSlide=function(){
    $ionicSlideBoxDelegate.next();
  }

  $scope.execboard = [
    {
      name: 'Stephany Tabet',
      title: 'Curator'
    },
    {
      name: 'Avish Jain',
      title: 'Director of Communications'
    },
    {
      name: 'Alex Cochran',
      title: 'Director of Content'
    },
    {
      name: 'Shivang Patel',
      title: 'Director of Finance & Development'
    },
    {
      name: 'Holly Rack',
      title: 'Director of Logistics'
    },
    {
      name: 'Therese Rajasekera',
      title: 'Director of Community Engagement'
    },  
    {
      name: 'Brandon Muschlitz',
      title: 'Director of Marketing'
    },
    {
      name: 'Raine McMullen',
      title: 'Director of Design'
    }
  ];

  $scope.team = [
    {
      name:"Communications Committee",
      members: [
        'Tracey Okine',
        'Liv Birdsall',
        'Joel Salas',
        'Viv Le',
        'Sri Karri',
        'Maheen Nadeem'
      ]
    },
    {
      name: "Logistics Committee",
      members: [
        'Cassandra Lechner',
        'Jasneet Singh',
        'Karan Rai',
        'Afifah Ayub',
        'Hallie Nudelman',
        'Melissa Mahan',
        'Nabiha Islam',
        'Bailey Cross',
        'Sara Liang'
      ]
    },
    {
      name: "Community Engagement Committee",
      members: [
        'Ali Kovacevich',
        'Alex Armeni',
        'Caroline Klug',
        'Vaughn Hunt'
      ]
    },
    {
      name: "Design Committee",
      members: [
        'Wandi Xu',
        'Nicole Riemer',
        'Jacob Katz',
        'Da Lee'
      ]
    },
    {
      name: "Finance Committee",
      members:[
        'Jay Jackson',
        'Mengjia Li',
        'Mansi Arora'
      ]
    },
    {
      name: "Content Committee",
      members: [
        'Sarah Beadle',
        'Vanja Tolj',
        'Chanan Brown',
        'Jordan Royster',
        'Mehak Arora',
        'Jessica Mongilio',
        'Michael Watson',
        'Jordan Moseley',
        'Sierra Nave',
        'Corey Keyser'
      ]
    },
    {
      name: "Marketing Committee",
      members: [
        'Samantha Lechner',
        'Deepti Gupta',
        'Elizabeth Parisi',
        'Ryan Hines',
        'Stephanie Payano',
        'Jocelyn May',
        'Greg Nagy',
        'Mihir Baxi',
        'Andrew Lewis',
        'Lexi Hemker',
        'Jessica Shakesprere'
      ]
    }
  ];

  $scope.advisors = [
    {
      name: 'Jillian Baer',
      title: 'Graduate Programs Coordinator, College of Public Affairs, The Ohio State University'
    },
    {
      name: 'Dr. Amy Barnes',
      title: 'Senior Lecturer, Department of Educational Studies, College of Education and Human Ecology, The Ohio State University'
    },
    {
      name: 'Dr. Gretchen Metzelaars',
      title: 'Senior Associate Vice President, Office of Student Life, The Ohio State University'
    }
  ]
}