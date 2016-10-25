var bio = {
	"name": "Stephen Obaido",
	"role": "Software Developer",
	"contacts": {
		"mobile": "13863372245",
		"email": "stevenobaido@yahoo.com",
		"github": "obaomo",
		"twitter": "@stevenobaido",
		"location": "Deltona, Florida, USA."
	},
	"biopic": "images/steve.png",
	"welcomeMessage": "Team Oriented and Self Motivated",
	"skills": ["HTML/CSS", "Javascript", "Test Oriented"]
};

var work = {
	"jobs": [
		{
			"employer": "Sparton",
			"title": "operator",
			"location": "De leon Spring, Florida, USA",
			"dates": "January 2015 - Present 2016",
			"description": " I was hired to work on Sparton Doing functional testing on PC board, Pressure leak test, Argon-test on Cable-Pack/bungees. Inspecting "+
			"Cable-pack QA for final line. Also build lithium battery power pack for sonobouy."	
		},
		{
			"employer" : "Global Pumps Inc",
			"title" : "Operation Personnel",
			"location" : "Edgewater, Florida, USA",
			"dates" : "March 2014 - December 2014",
			"description" : "Assist in Engineering of well-point dewatering system. Support Off-site trenching managing. Yard "+
			" inventory delivery returning."
		},
		{
			"employer" : "Roses Southwest inc",
			"title" : "Engineering",
			"location" : "Sanford, Florida, USA",
			"dates" : "June 2013 - March 2014",
			"description" : "maintaining stretch wrap machine. Assist in changing of felt, dynamic balancing, journal replacement "+
			"for fourdrinier machine."
		},
		{
			"employer" : "Invacare Corporation",
			"title" : "Operator",
			"location" : "Sanford, Florida, USA",
			"dates" : "Dec 2011 - AUG 2013",
			"description" : "Operating, maintaining manual hydraulic pneumatic power press machine with G&M code. numeric control mill, lathe machine, utilize "+
			"micrometer, vernier calipers hand tools."
		},
		{
			"employer" : "Athantic Oil Services Ltd",
			"title" : "QC Engineer",
			"location" : "Abuja, PortHarcourt, Ng",
			"dates" : "October 2006 - November 2010",
			"description" : "Inspecting vertical horizontal triplex pumps for installation of wellhead. Participate in factory "+
			" acceptance test and maintenance work order."
		}
	]
};

var education = {
	"schools": [
		{ 	"name": "Federal Polytechnic Auchi",
			"dates": ("1999 - 2004"),
			"location": "Auchi, Edo, Nigeria",
			"degree": "B.Sc.(Hon) Mechanical Engineering ",
			"majors": ["Power Plant"],
			"url": "www.auchi.edu.ng"
		}		
	],
	"onlineCourses": [
		{ "school": "Udacity",
			"title": "Front-End Web Developer",
			"date": ("July - 2016"),
			"url": "https://www.udacity.com/course/ud804"
		},
		{ "school": "Mitx",
			"title": "Big Data Social Physics",
			"date": ("June - 2014"),
			"url": "https://www.edx.org/course/mas-s69x"
		},
		{ "school": "Coursera",
			"title": "Data Science",
			"date": ("February - 2014"),
			"url": "https://www.coursera.org/specialization/jhu-data-science"
		},
		{ "school": "Udacity",
			"title": "Use Git Github",
			"date": ("October - 2014"),
			"url": "https://www.udacity.com/course/ud775"
		},	
		{ "school": "Udacity",
			"title": "Data Science",
			"date": ("August - 2014"),
			"url": "https://www.udacity.com/course/ud359"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Class Arcade Game Clone",
			"dates": "April 2016",
			"description": "Cloning a functional online game using HTML5 Canvas as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/arcadegame.png"],
			"url": "http://review.udacity.com/#!/review/134674"
		},
		{
			"title": "Build a Portfolio Site",
			"dates": "February 2016",
			"description": "Design a complete portfolio structure that is responsive with good quality code style as part of "+
			"Front-End Web Developer Nanodegree.",
			"images": ["images/portfoliosite.png"],
			"url": "http://review.udacity.com/#!/review/89096"
		},
		{
			"title": "Animal Trading Cards",
			"dates": "January 2016",
			"description": "Design prototype of a page card.",
			"images": ["images/tradingcard.png"],
			"url": "http://review.udacity.com/#!/review/157799"
		}
	]
};

	bio.display = function() {
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

		var formattedContactInfo = [];
		formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
		formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
		formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));


		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedBioPic);
		$("#header").append(formattedWelcomeMsg);

	if(bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

	for(i in bio.skills) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}
}

	for(i in formattedContactInfo) {
		$("#topContacts").append(formattedContactInfo[i]);
		$("#footerContacts").append(formattedContactInfo[i]);
	}
}

bio.display();

work.display = function() {
	if(work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);

		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;

			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}

}

work.display(); 


projects.display = function() {
	if(projects.projects.length > 0) {
		for(i in projects.projects) {
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(formattedProjectTitle);
			$(".project-entry:last").append(formattedProjectDates);
			$(".project-entry:last").append(formattedProjectDescription);

			for(img in projects.projects[i].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[img]);
				$(".project-entry:last").append(formattedProjectImage);
			}
			
		}
	}
}

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(i in education.schools) {
			$("#education").append(HTMLschoolStart);

			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);			
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
			var formattedSchoolMinor = HTMLschoolMinor.replace("%data%", education.schools[i].minor);

			$(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);
			$(".education-entry:last").append(formattedSchoolDates);
			$(".education-entry:last").append(formattedSchoolLocation);
			$(".education-entry:last").append(formattedSchoolMajor);
			
			
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(i in education.onlineCourses) {				
				$("#education").append(HTMLschoolStart);
				var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title).replace("#", education.onlineCourses[i].url);
				var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
				var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
				var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url).replace("#", education.onlineCourses[i].url);

				$(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
				$(".education-entry:last").append(formattedOnlineDates);
				$(".education-entry:last").append(formattedOnlineURL);
			}
		}
		
	}
}

education.display();

/**
 * Skills Chart
 */

$("#mapDiv").append(googleMap);

