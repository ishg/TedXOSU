Meteor.startup(function(){
	Speakers.remove({});
	if (Speakers.find().count() == 0){
		var speakers = [
	    {
	      name: 'Ethan Gonzalez',
	      picture: 'face-1.jpg',
	      title: 'You on your way?',
	      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet magna id ultricies feugiat. Integer sollicitudin a elit a placerat. In augue magna, blandit quis luctus eu, lobortis sit amet ligula. Nullam facilisis sed metus eget tincidunt. Maecenas egestas sodales finibus. Nunc mattis auctor pharetra. Suspendisse tristique erat tellus, sagittis scelerisque sem varius ac.',
	      timestamp: moment().subtract(1, 'hours').toDate()
	    },
	    {
	      name: 'Bryan Wallace',
	      picture: 'face-1.jpg',
	      title: 'Hey, it\'s me',
	      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet magna id ultricies feugiat. Integer sollicitudin a elit a placerat. In augue magna, blandit quis luctus eu, lobortis sit amet ligula. Nullam facilisis sed metus eget tincidunt. Maecenas egestas sodales finibus. Nunc mattis auctor pharetra. Suspendisse tristique erat tellus, sagittis scelerisque sem varius ac.',
	      timestamp: moment().subtract(2, 'hours').toDate()
	    },
	    {
	      name: 'Avery Stewart',
	      picture: 'face-1.jpg',
	      title: 'I should buy a boat',
	      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet magna id ultricies feugiat. Integer sollicitudin a elit a placerat. In augue magna, blandit quis luctus eu, lobortis sit amet ligula. Nullam facilisis sed metus eget tincidunt. Maecenas egestas sodales finibus. Nunc mattis auctor pharetra. Suspendisse tristique erat tellus, sagittis scelerisque sem varius ac.',
	      timestamp: moment().subtract(1, 'days').toDate()
	    },
	    {
	      name: 'Katie Peterson',
	      picture: 'face-1.jpg',
	      title: 'Look at my mukluks!',
	      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet magna id ultricies feugiat. Integer sollicitudin a elit a placerat. In augue magna, blandit quis luctus eu, lobortis sit amet ligula. Nullam facilisis sed metus eget tincidunt. Maecenas egestas sodales finibus. Nunc mattis auctor pharetra. Suspendisse tristique erat tellus, sagittis scelerisque sem varius ac.',
	      timestamp: moment().subtract(4, 'days').toDate()
	    },
	    {
	      name: 'Ray Edwards',
	      picture: 'face-1.jpg',
	      title: 'This is wicked good ice cream.',
	      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet magna id ultricies feugiat. Integer sollicitudin a elit a placerat. In augue magna, blandit quis luctus eu, lobortis sit amet ligula. Nullam facilisis sed metus eget tincidunt. Maecenas egestas sodales finibus. Nunc mattis auctor pharetra. Suspendisse tristique erat tellus, sagittis scelerisque sem varius ac.',
	      timestamp: moment().subtract(2, 'weeks').toDate()
	    }
	  ];

	  speakers.forEach(s => {
	  	Speakers.insert(s)
	  });
	}
})