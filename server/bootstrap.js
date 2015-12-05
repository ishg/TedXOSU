Meteor.startup(function(){
	if (Speakers.find().count() == 0){
		var speakers = [
	    {
	      name: 'Ethan Gonzalez',
	      picture: 'https://randomuser.me/api/portraits/thumb/men/1.jpg',
	      text: 'You on your way?',
	      timestamp: moment().subtract(1, 'hours').toDate()
	    },
	    {
	      name: 'Bryan Wallace',
	      picture: 'https://randomuser.me/api/portraits/thumb/lego/1.jpg',
	      text: 'Hey, it\'s me',
	      timestamp: moment().subtract(2, 'hours').toDate()
	    },
	    {
	      name: 'Avery Stewart',
	      picture: 'https://randomuser.me/api/portraits/thumb/women/1.jpg',
	      text: 'I should buy a boat',
	      timestamp: moment().subtract(1, 'days').toDate()
	    },
	    {
	      name: 'Katie Peterson',
	      picture: 'https://randomuser.me/api/portraits/thumb/women/2.jpg',
	      text: 'Look at my mukluks!',
	      timestamp: moment().subtract(4, 'days').toDate()
	    },
	    {
	      name: 'Ray Edwards',
	      picture: 'https://randomuser.me/api/portraits/thumb/men/2.jpg',
	      text: 'This is wicked good ice cream.',
	      timestamp: moment().subtract(2, 'weeks').toDate()
	    }
	  ];

	  speakers.forEach(s => {
	  	Speakers.insert(s)
	  });
	}
})