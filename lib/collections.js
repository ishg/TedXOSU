Speakers = new Mongo.Collection(null);
Performers = new Mongo.Collection(null);

if(Meteor.isClient){
  //console.log(Performers.find().count());
  //console.log(Speakers.find().count());

  //client only code
  
  if(Performers.find().count() == 0){
    //console.log("Adding Performers");
    var performers = [
      {
        name: 'Cynthia Amoah',
        picture: 'headshots/cynthia.jpg',
        title: 'Poet, Logophile, "Adofoh"(Warrior/Loved One)',
        lines: [
          'Cynthia Amoah is a spoken word artist who started her artistry through national poetry recitation competitions and motivational talks. An activist in her own right, her literary pieces often highlight the forgotten stories of the world, while transcending the often times marginalized groups that she delineates in her work. It sounds, in fact, like a large part of what she believes God put her on this Earth to do: to use words, whether written or spoken, to breathe life into spaces, and moments, where silence has masqueraded itself as king. Cynthia aspires to leave an indelible mark on the way in which we discuss race, gender and classism through her literary works.'
        ]
      },
      {
        name: 'Dr. Susan Chess',
        picture: 'headshots/chess.jpg',
        title: 'Musician and Artist',
        lines: [
        'Susan Chess received her Bachelor of Music Education, Master of Arts in Piano Pedagogy, and PhD in Music Education from the Ohio State University. Her graduate studies include work in music technology, harpsichord, composition, and piano. She studied contemporary harmony with David Wheeler in Columbus, Ohio and Improvisation and Composition for modern dance with Charles Rybacki and Hazel Johnson in New York. She has presented for The Ohio Dance Festival, The National Dalcroze Conference, International Guild of Musicians in Dance, Music Educators National Conference, Ohio Music Teacher Association, and others. Ms. Chess has played dance master classes for The Martha Graham Company, Dance Theater of Harlem, Columbus Ballet Metropolitan, Merce Cunningham company, Mark Morris, The Bolshoi and the Kirov Ballet Company and many more.',
        'She received her Certification in Dalcroze Eurhythmics from Carnegie Mellon University in 1999 and has been a Digital Editor for Instant Pleasure, Inc., which developed music educational software for electronic keyboards. Ms. Chess released a CD of her original music entitled Light from Light and she has created music for original choreography, Laban Lab, video and CDROM projects as well as performing live in numerous dance concerts. She has worked in the Dance Department for 37 years. In addition to playing all levels of dance technique classes in the OSU Department of Dance, she teaches, manages musicians, schedules rehearsal space, and is responsible for Student Information System in the department. When she is not playing music, Ms Chess paints in acrylic, designs jewelry, and is involved in a number of volunteer initiatives.'
        ]
      },
      {
        name: 'Kristina D\'Onofrio',
        picture: 'headshots/kristina.jpg',
        title: 'Mover, Maker, Believer',
        lines: [
          'Kristina is currently a third year MFA in the Department of Dance at The Ohio State University, where she is also a Graduate Teaching Associate and the recipient of a Ohio State University Fellowship and a Career Development Grant. In 2013, she received a Columbus Dances Fellowship award for choreography.',
          'Kristina graduated Summa Cum Laude from the University of Cincinnati with a B.F.A. in dance where she studied on scholarship. While in college she danced as a member of the Tulsa Ballet II and the Louisville Ballet. She has also performed as a guest artist with the Dayton Ballet and Kentucky Ballet Theatre. After graduating she danced for three years with the Festival Ballet Providence in Rhode Island while also working with Colleen Cavanaugh\'s contemporary dance company Part of the Oath Dance Theater as a performer and instructor in her outreach after school program.', 
          'Kristina has really enjoyed teaching students ages three-adult locally in Columbus, Cincinnati and Rhode Island. She is currently an instructor with the BalletMet dance academy and the BalletMet Educational Outreach program.',
          'Kristina is very excited for the opportunity to be sharing her work with TEDxOhioStateUniversity.'
        ]
      },    
      {
        name: 'Dr. Elaine Richardson',
        picture: 'headshots/richardson.jpg',
        title: 'Artist and Professor',
        lines: [
          'A survivor of human trafficking and addiction, Dr. Elaine Richardson (Dr. E) is an inspirational university professor, performance artist and speaker. She shares her story of sexual exploitation and other forms of bondage to bring awareness to the plight of those entrapped in human trafficking and hopelessness, and to promote healing and empowerment through education.'
        ]
      },
      {
        name: 'Jonathon Sun',
        picture: 'headshots/jonathon.jpg',
        title: 'Student Trying to Survive',
        lines: [
          'Jonathon Sun is a fifth-year senior studying sociology with a minor in Chinese. His research interests in sociology are leadership, Asian Americans and religion. Jonathon is an Undergraduate Research Assistant on the Religious Leadership and Diversity Project, that studies pastors of Multiracial Churches. He is currently working on a thesis studying Asian American pastors and how they lead their congregations. Aside from academics, he has been beat-boxing seriously for about 2 years, and playing piano for 15 years. He has performed at the Midwest Asian American Students Union spring conference and leadership summit in addition to the Society of Asian Scientist and Engineers. Jonathon am passionate about creating change through development of cultural friendly leadership.'
        ]
      },
      {
        name: 'Joshua Manculich',
        picture: 'headshots/joshua.jpg',
        title: 'Mover and Empathist',
        lines: [
          'Joshua hails from Windber, PA, graduated valedictorian in 2005 and went on to pursue dance and psychology at Point Park University. Joshua\'s performance credits include The Pillow Project, Jaxon Movement Arts, Chicago Repertory Ballet, Pursuit Productions, as well as five seasons with Thodos Dance Chicago. Joshuas Ride, The Rate In Which I Am and Monologue have been toured internationally with DanceWorks Chicago. In collaboration with Jacqueline Stewart, their duet A Forgotten Rhyme has been seen in NYC as a part of the Dance Gallery series. Other choreography endeavors include, Dancing in the Parks, Grand Valley State University, Interlochen Arts Academy, MetDance, Piel Morena Contemporary Dance, Thodos Dance Chicago, and Western Michigan University. Josh currently is pursuing his Masters of Fine Arts in Dance at the Ohio State as a recipient of the Susan Huntington Dean\'s Distinguished University Fellowship. Most recently Josh received a Princess Grace Foundation Award Choreography Fellowship to create a work with The Big Muddy Dance Company in St. Louis Missouri.'
        ]
      },
      {
        name: 'The Kawayan Team of the Filipino Student Association',
        picture: 'headshots/kawayan.jpg',
        title: 'Dance Performers and Undergraduate Students',
        lines: [
          'Kawayan\'s performance is a combination of the Filipino Martial Art, Arnis, and a modern interpretation of the Filipino warrior spirit through the use of modern hip-hop beats and bamboo sticks.'
        ]
      }
    ];

    performers.forEach(p => {
      Performers.insert(p)
    });
  }

  if (Speakers.find().count() == 0){
    //console.log("Adding Speakers");
    var speakers = [
      {
        name: 'Dr. Curtis Austin',
        picture: 'headshots/austin.jpg',
        title: 'Scholar-Activist',
        lines: [
          'Dr. Curtis Austin is an Associate Professor in the Department of African American and African Studies (AAAS) at The Ohio State University. He received his B.A. and M.A. in U.S. History from the University of Southern Mississippi and his Ph.D. in American History from Mississippi State University. While also serving as Director of Undergraduate Studies in AAAS, Professor Austin teaches graduate and undergraduate courses on the Civil Rights and Black Power Movements, the Black freedom struggle, and the history of American race relations. He is currently writing a book on the Black Power movement and conducting research for a book that examines the history of radicalism in Black liberation movements.',
          'As part of his research, he has interviewed dozens of former members of the Black Panther Party, the Weather Underground, and the Revolutionary Action Movement. Dr. Austin enjoys taking part in civic engagement and has won numerous awards that honor his work. Among these are the C. Peter Magrath University Community Engagement Award, the W.K. Kellogg Foundation Award, the Distinguished Community Engagement Award from The Ohio State University, and the National Council for Black Studies Award for Outstanding Service in the Promotion of Social Responsibility. In 2007, his book Up Against the Wall: Violence in the Making and Unmaking of the Black Panther Party won the Choice Library Journal\'s Outstanding Academic Book Award. In his spare time, Dr. Austin enjoys reading and traveling with his wife, Dr. Leslie Alexander.'
        ]
      },
      {
        name: "Carla J. Bailo",
        picture: "headshots/bailo.jpg",
        title: "Mobility Gamechanger",
        lines: [
          "Carla Bailo is Assistant Vice President Mobility Research and Business Development at The Ohio State University. Also, she is President and CEO of ECOS Consulting, LLC which specializes in Engineering Efficiency and Optimization as well as Electrification and Computer Operated (Autonomous) Vehicles.",
          "Until Feb 1, 2014, she was senior vice president, Research & DevelopmentNissan Americas. In this role, she was responsible for all of Nissan's vehicle engineering and development operations in Michigan, Arizona, Mexico and Brazil. She was also a member of Nissan's MCA, the company's highest ranking decision making body in the Americas region.",
          "Bailo was previously based in Japan where she served as OEM business unit divisional general manager for Nissan Motor Company, Ltd. In this multidimensional role she was responsible for overall operations, revenue and profitability of Nissan's OEM relationships for vehicle, powertrain, technology and intellectual property business worldwide. Bailo joined Nissan in 1989 as a vehicle testing engineer at the Nissan Technical Center North America (NTCNA) in Farmington Hills, Mich. In 2003 she was promoted to director of Vehicle Program Management where she oversaw all of NTCNA's engineering development projects, as well as cost, quality and delivery metrics. Also in 2003, she served as the assistant chief vehicle engineer for the Nissan Sentra and Nissan Quest.",
          "Later, Bailo was transferred to Nissan's global headquarters in Japan as vehicle program director with responsibility for the profitability and product presence of Nissan's SUV's worldwide. She was also recovery program director through the financial crisis, reporting directly to the chief recovery officer, and supported measures to offset economic business plan financial risks during fiscal year 2009.",
          "Bailo began her automotive career with General Motors' Truck & Bus division, where she was in charge of truck durability testing and test development. She holds a bachelor's degree in mechanical engineering from General Motors Institute (now Kettering University) and a master's degree in mechanical engineering from the University of Michigan."
        ]
      },
      {
        name: "Dr. Hollie Nyseth Brehm",
        picture: "headshots/brehm.jpg",
        title: "Idealist",
        lines: [
          "Dr. Hollie Nyseth Brehm is an Assistant Professor of Sociology at Ohio State, where she teaches classes on conflict, global crime, and terrorism. Her research focuses on the causes and processes of genocide and on how countries rebuild in the aftermath of atrocity. She has lived and worked in Rwanda and Bosnia, where she interviewed both perpetrators and victims of genocide.",
          "Hollie is currently a member of a government atrocity prevention task force and regularly consults with the Rwandan National Commission for the Fight Against Genocide. She also volunteers with the Center for Victims of Torture and is a core member of IActivism, which provides humanitarian action to people affected by mass atrocity in Darfur. She has previously served as the chair of a school board for English Language Learners and has worked with numerous human rights organizations, such as the Mexico City Human Rights Commission. In 2014, she was named one of the top 30 thinkers under 30 by Pacific Standard. In her spare time, Hollie enjoys international travel with her husband Mike, cuddling with her dog Lady (named after Lady Mary Crawley from Downton Abbey), and occasional Netflix binges."
        ]
      },
      {
        name: "Dr. John S. Carlarne",
        picture: "headshots/carlarne.jpg",
        title: "Confused",
        lines: [
          "Dr. Carlarne was born in Kenya, and grew up in Nairobi and London. He has spent much of his life trying and failing to understand what it means to alive. His work around the world as a British Army officer, police officer, peace and human rights activist has taken him to places of genocide and violence, and to communities of peace and hope. He has been fortunate to witness the best and worst in people. Now Dr. Carlarne is working with wonderful colleagues and friends to make Columbus a hub for peace and nonviolence. An anthropologist by training, his current research focuses on the evolutionary basis of meaning."
        ]
      },
      {
        name: "Debanuj DasGupta",
        picture: "headshots/debanuj.jpg",
        title: "Scholar-Activist",
        lines: [
          "Debanuj DasGupta is a doctoral candidate in the Department of Women's, Gender, and Sexuality Studies and the South Asia Studies Initiative at the Ohio State University. His research interests are broadly related to the intensification of neoliberalism and bio-politics in contemporary United States and India. Debanuj's dissertation is titled \"Racial Regulations and Queer Claims to Livable Lives.\" His dissertation analyzes immigration regulation related to HIV/AIDS, transgender asylum, and the formation of racialized queer migrant subjectivity within the past two decades in the US.",
          "He has worked for over 16 years across two continents in the global civil society sector. In 1994 Debanuj founded the first HIV prevention program for men-who-have-sex-with-men in Kolkata, India. His work in the US has largely been within the environmental rights, sexual rights and immigrant rights movements. Debanuj holds a B.A. in Sociology (HONS) from Presidency College, Kolkata (now the Presidency Autonomous University), and an MA in Geography & Urban Planning from the University of Akron, OH. Debanuj's work has been published in the Disability Studies Quarterly, Contemporary South Asia, the Scholar & Feminist Online, South Asian Magazine for Action and Reflection (SAMAR), make/shift, and the WhiteCrane Journal."
        ]
      },
      {
        name: "Bria Davis",
        picture: "headshots/bria.jpg",
        title: "Artist, Nerd, Pun Enthusiast",
        lines: [
          "Bria is a fourth year studying Communications and triple minoring in Creative Writing, Art, and PopCulture Studies. Though she has declared a major (finally), she still considers herself an Exploration major at heart and spends an exceptional amount of energy exploring connections between stories in our everyday lives and the science behind communication. She takes pride and passion in trying to understand why we love the pop-culture we do and what we can learn from it (though her roommates and friends may tire of hearing about the \"broader social implications\" of their favorite TV shows). When she's not doing that, she's drawing and writing ceaselessly in the hopes of becoming the next David Sedaris, Dr. Seuss, or Neil Gaiman, whichever comes first. In what spare time she has, Bria enjoys performing random acts of kindness with the Boo Radley Society, creating concept art for Multivarious Games, and recruiting the next freshman class with her fellow Telecounselors. After she graduates in May, she plans to continue exploring her passions in whatever ways they present themselves."
        ]
      },
      {
        name: "Dr. Joe Donnermeyer",
        picture: "headshots/donnermeyer.jpg",
        title: "Sociologist",
        lines: [
          "A city boy by birth and upbringing, Joe Donnermeyer's interest in rural societies and cultures go all the way back to his graduate student days at the University of Kentucky and his thesis research conducted deep in the heart of the Bluegrass state's Appalachian region. During his many years at The Ohio State University, he became an academic \"bigamist\", pioneering the development of rural criminology while at the same time conducting research and teaching a course annually about the Amish. With retirement, Dr. Donnermeyer has not slowed down, with the upcoming publication of the \"International Handbook of Rural Criminology\" (Routledge, 42 chapters) scheduled for release in mid-2016 and as co-founder and now assistant editor of the \"Journal of Amish and Plain Anabaptist Studies\", which is published semiannually."
        ] 
      },
      {
        name: "Rebekah L. Matheny",
        picture: "headshots/matheny.jpg",
        title: "Design Professor",
        lines: [
          "Rebekah L. Matheny has been bridging the design profession and academic environment for the past 12+ years. She is assistant professor of interior design at The Ohio State University, where she teaches courses in interior finish materials, lighting design and design studios that integrate a retail brand strategy and storytelling process. Matheny's research investigates the sensory perception of interior finish materials and their application to create an emotional connection between the person and the place in order to create lasting memories of place. Her research also investigates how materials create an authentic experiential storytelling, particularly for connecting to millennials' and Gen Z.",
          "Prior to her appointment at OSU, she practiced in a multidisciplinary retail and brand strategy firm here in Columbus where she collaboratively created inspired retail brand environments for nationally and internationally recognized brands. Matheny holds a Master of Architecture degree from the University of Oregon, where she also received a Technical Teaching Certificate in the area of Sustainable Design Strategies for Interior Architecture with a concentration in interior finish materials and lighting design. Additionally, she has undergraduate degrees in interior design and architecture from the University of Cincinnati."
        ]
      },
      {
        name: "Dr. Rustin M. Moore",
        picture: "headshots/moore.jpg",
        title: "Visionary Veterinary Dean and Zooeyia Advocate",
        lines: [
          "Dr. Rustin Moore is the dean and Ruth Stanton Chair of Veterinary Medicine in the Ohio State College of Veterinary Medicine (CVM). The CVM is ranked 5th in the nation and its vision it to create a healthy and sustainable world for animals and people through our land-grant mission areas of education, discovery, service and outreach. The College's Veterinary Medical Center (VMC) is one of the largest and most comprehensive animal hospitals in the world, providing emergency and advanced specialty care to client-owned animals. Dean Moore is a board-certified equine surgeon and has extensive experience in teaching and mentoring veterinary and graduate students, research & scholarship, and providing academic and scientific disciplinary leadership.",
          "An award-winning alumnus of West Virginia University and a two-time graduate of the CVM, he returned to lead the Department of Veterinary Clinical Sciences, rising to executive director of the VMC, associate executive dean and then dean. The CVM has a particular interest in serving the community and Dean Moore has a special interest in the power and impact of the human-animal bond and zooeyia, which is the positive health benefits (physical, emotional, behavioral, social and psychological) on people by interacting with animals. There is substantial research evidence demonstrating having a pet improves health and substantially reduces healthcare costs for people."
        ]
      },
      {
        name: "Dr. Paul M. Sutter",
        picture: "headshots/sutter.jpg",
        title: "Agent to the Stars",
        lines: [
          "As an astrophysicist, Dr. Sutter received his PhD in Physics from the University of Illinois at Urbana Champaign in 2011. After spending three years at the Paris Institute of Astrophysics, he now splits his time between a research fellowship in Trieste, Italy, and a visiting scholar position at the Ohio State University's Center for Cosmology and AstroParticle Physics. His research focuses on many diverse topics, from the emptiest regions of the universe, to the earliest moments of the Big Bang, to the detection of the first stars.",
          "As an \"Agent to the Stars\", Dr. Sutter has passionately engaged the public in science outreach for several years. He is the host of the \"Ask a Spaceman!\" podcast, where he answers questions posted on social media. He writes for Space.com, regularly appears at events and on TV, consults for films, and is leading the creation of innovative new outreach productions, such as Song of the Stars, a fusion of modern dance and astronomy."
        ]
      },
      {
        name: "Abd Al-Rahman Traboulsi",
        picture: "headshots/abd.jpg",
        title: "A Syrian Voice",
        lines: [
          "Abd Al-Rahman Traboulsi is a third year majoring in Biomedical Engineering with Honors at Ohio State University. He is fluent in Arabic and takes pride in his heritage as a Syrian American. With the ongoing Syrian genocide and conflict, he has traveled to Turkey with UOSSM (Union of Syrian Medical Relief Organizations) the past 3 summers, working in field hospitals, refugee camps, and mental health clinics. Abd Al-Rahman is currently developing a student organization aiming to create partnerships between college students and refugees via an immersion experience at Ohio State University. As a devout Muslim, Abd Al-Rahman tries to embody the characteristics of Prophet Muhammad, dedicating his time to others and working for the underprivileged. Those virtues are the driving force for his involvement in establishing ENCompass, a student-run public health service organization, his passion for teaching and position as an organic chemistry Teaching Assistant, and his ultimate goal to become a physician."
        ]
      }
    ];

    speakers.forEach(s => {
      Speakers.insert(s)
    });
  }
  
}