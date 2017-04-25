////Bio Object
var bio = {
    "name": "Ronald De Leon",
    "role": "Aspiring Web Developer",
    "contacts": {
        "email": "r.leonardo.deleon@gmail.com",
        "mobile": "619-415-7996",
        "location": "Corona, CA",
        "github": "RLD2121"
    },
    "skills": ['','Process Engineering', 'Project Management', 'LEAN Methodologies', 'HTML', 'CSS', 'JavaScript/JQuery', 'Responsive Web Design', 'AJAX/JSON', 'Version Control (Git/Github)'],
    "biopic": "images/self.png",
    "welcomeMessage": "I am a highly motivated engineer ready to dive into the world of front end web development.  I am a problem solver holding 5 years of professional work as a process engineer. "
};
////Work Object
var work = {
    "jobs": [{
            "title": "Sr. Process Engineer",
            "employer": "3M",
            "dates": "Dec 2014 - Present",
            "location": "Corona, CA",
            "description": "Manage and commission site projects related to process improvements and process safety.  Design plant experiments for equipment optimization and establishment of process specifications.  Lead and support Lean Six Sigma projects and activities.  Support and actively participate in plant automation initiatives."
        },

        {
            "title": "Engineer II ",
            "employer": "BioSPEQ",
            "dates": "07/2013 – 12/2014",
            "location": "Irvine, CA",
            "description": "Managed projects to completion from scheduling, budget analysis, and resource allocation.  Generated validation protocols (IQ, OQ, PQ) for qualifying new equipment and software.  Ensured business continuity through project completion excellence."
        },

        {
            "title": "Process Development Engineer",
            "employer": "Molycorp Minerals",
            "dates": "05/2012 – 07/2013",
            "location": "Mountain Pass, CA",
            "description": "Conducted experiments to develop and understand new processes.  Instrumental in the $895MM expansion and modernization of the site.  Technical lead on process units providing around the clock production support."
        }
    ]
};
////Projects Object
var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "Q2 2017",
        "description": "A portfolio of projects I made while learning through Udacity and freeCodeCamp",
        "images": ["images/portfolio.png"],
        "url" : "https://rld2121.github.io/portfolio/"
    }]
};

////Education Object
var education = {

    "schools": [{
        "name": "University of California, San Diego",
        "degree": "Bachelor of Science",
        "majors": ["Chemical Engineering"],
        "location": "La Jolla, CA",
        "dates": "2010",
        "url": "www.ucsd.edu"
    }],

    "onlineCourses": [{
            "title": "Front-End Web Developer",
            "name": "Udacity",
            "dates": "Q2 2017",
            "url": "www.udacity.com"
        },

        {
            "title": "Front-End Web Developer",
            "name": "freeCodeCamp",
            "dates": "Q1 2017",
            "url": "www.freecodecamp.com"
        }
    ]
};

/////Bio Section
bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLoc = HTMLlocation.replace("%data%", bio.contacts.location);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedGitHub);
    $("#topContacts").append(formattedLoc);
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGitHub);
    $("#footerContacts").append(formattedLoc);
    
    $("#header").append(HTMLskillsStart);
    $("#skills").append(HTMLDataSkills);

//////////Skill chart along with formatted skills section/////
        var categories= [];
    
        if (typeof bio.skills != "undefined") {
            for (var i = 0; i < bio.skills.length; i++){
                categories.push(bio.skills[i]);
            }
        }

        var years = [5, 3, 2, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5 ];

		var colors = ['#0000b4','#0082ca','#0094ff','#0d4bcf','#0066AE','#074285','#00187B','#285964','#405F83'];

		var grid = d3.range(25).map(function(i){
			return {'x1':0,'y1':0,'x2':0,'y2':480};
		});

		var tickVals = grid.map(function(d,i){
			if(i>0){ return i*10; }
			else if(i===0){ return "100";}
		});

		var xscale = d3.scale.linear()
						.domain([0,10])
						.range([0,722]);

		var yscale = d3.scale.linear()
						.domain([0,categories.length])
						.range([0,300]);

		var colorScale = d3.scale.quantize()
						.domain([0,categories.length])
						.range(colors);

		var canvas = d3.select('#wrapper')
						.append('svg')
						.attr({'width':600,'height':250});

		var grids = canvas.append('g')
						  .attr('id','grid')
						  .attr('transform','translate(150,10)')
						  .selectAll('line')
						  .data(grid)
						  .enter()
						  .append('line')
						  .attr({'x1':function(d,i){ return i*30; },
								 'y1':function(d){ return d.y1; },
								 'x2':function(d,i){ return i*30; },
								 'y2':function(d){ return d.y2; },
							})
						  .style({'stroke':'#adadad','stroke-width':'1px'});

		var	xAxis = d3.svg.axis();
			xAxis
				.orient('bottom')
				.scale(xscale)
				.tickValues(tickVals);

		var	yAxis = d3.svg.axis();
			yAxis
				.orient('left')
				.scale(yscale)
				.tickSize(2)
				.tickFormat(function(d,i){ return categories[i]; })
				.tickValues(d3.range(17));

		var y_xis = canvas.append('g')
						  .attr("transform", "translate(150,0)")
						  .attr('id','yaxis')
						  .call(yAxis);

		var x_xis = canvas.append('g')
						  .attr("transform", "translate(150,480)")
						  .attr('id','xaxis')
						  .call(xAxis);

		var chart = canvas.append('g')
							.attr("transform", "translate(150,0)")
							.attr('id','bars')
							.selectAll('rect')
							.data(years)
							.enter()
							.append('rect')
							.attr('height',19)
							.attr({'x':0,'y':function(d,i){ return yscale(i)+19; }})
							.style('fill',function(d,i){ return colorScale(i); })
							.attr('width',function(d){ return 0; });


		var transit = d3.select("svg").selectAll("rect")
						    .data(years)
						    .transition()
						    .duration(1000) 
						    .attr("width", function(d) {return xscale(d); });

		var transitext = d3.select('#bars')
							.selectAll('text')
							.data(years)
							.enter()
							.append('text')
							.attr({'x':function(d) {return xscale(d)+4; },'y':function(d,i){ return yscale(i)+35; }})
							.text(function(d){ return d; }).style({'fill':'#fff','font-size':'14px'});
};

/////Work Section
work.display = function() {
    if (typeof work.jobs != "undefined"){
        for (var i = 0; i < work.jobs.length; i++){

            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;

            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            $(".work-entry:last").append(formattedLocation);

            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};

/////Projects Section
projects.display = function() {

    $("#projects").append(HTMLprojectStart);
    if(typeof projects.projects != "undefined"){
        for (var i = 0; i < projects.projects.length; i++){
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("%url%", projects.projects[i].url);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            var formattedImg = HTMLprojectImage.replace("%data%", projects.projects[i].images);
            $(".project-entry:last").append(formattedTitle);
            $(".project-entry:last").append(formattedDates);
            $(".project-entry:last").append(formattedDesc);
            $(".project-entry:last").append(formattedImg);
        }
    }
};

/////Education Sections
education.display = function() {

    $("#education").append(HTMLschoolStart);
    if(typeof education.schools != "undefined"){
        for (var i = 0; i < education.schools.length; i++){
            var formattedSchoolsName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools.url);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
            $(".education-entry:last").append(formattedSchoolsName);
            $(".education-entry:last").append(formattedDates);
            $(".education-entry:last").append(formattedDegree);
            $(".education-entry:last").prepend(formattedLocation);
            $(".education-entry:last").append(formattedMajor);
        }
    }

    $(".education-entry:last").append(HTMLonlineClasses);

    if(typeof education.onlineCourses != "undefined"){
        for (var j = 0; j < education.onlineCourses.length; j++){
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].name);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
            var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url);

            $(".education-entry:last").append(formattedOnlineTitle);
            $(".education-entry:last").append(formattedOnlineDates);
            $(".education-entry:last").append(formattedOnlineSchool);
            $(".education-entry:last").append(formattedOnlineUrl);
        }
    }

};

bio.display();
work.display();
projects.display();
education.display();

/////Google Maps
$("#mapDiv").append(googleMap);

//Internationalize Button
//function inName(oldName) {
//    var finalName = oldName;
//    // Your code goes here!
//    
//    var first = oldName.slice(1,oldName.indexOf(" ")).toLowerCase();
//    var last = oldName.slice(oldName.indexOf(" ")).toUpperCase();
//
//    var firstUpper = oldName.charAt([0]).toUpperCase() + first;
//    var finalName = firstUpper + " " + last;
//
//    // Don't delete this line!
//    return finalName;
//};
//
//$("#main").append(internationalizeButton);