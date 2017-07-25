/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
  name: "Eric Patrick",
  role: "Web Developer",
  contacts: {
    email: "ericpatrick15@gmail.com",
    github: "ericpatrick",
    location: "Goiânia-GO"
  },
  pictureUrl: "./images/fry.jpg",
  welcomeMessage: "Welcome",
  skills: ["HTML", "CSS", "javascript", "LBS", "API"]
};

var work = {
  position: "Fronted Developer",
  employer: "GoGeo",
  years: "3"
};

var education = {
  schools: [
    {
      name: "Federal University of Goiás",
      location: "Goiânia-GO, BR",
      degree: "BA",
      majors: ["CS"],
      dates: "2008-2010",
      url: "http://inf.ufg.br"
    }
  ],
  onlineCourses: [
    {
      title: "Nanodegree Frontend",
      school: "Udacity",
      dates: 2018,
      url: "http://udacity.com"
    }
  ]
}

var work = {
  jobs: [
    {
      employer: "Laboratory for Ubiquitous and Pervasive Applications (LUPA) - UFG",
      title: "Software Developer",
      date: "2011 - 2012",
      description: "Development of a geoAnalytics application that enable the user join many geospatial data and apply many geospatial operations"
    },
    {
      employer: "CUIA Internet Brasil",
      title: "Software Developer",
      date: "2012-2013",
      description: "Development of a tracking vehicles application" 
    },
    {
      employer: "GoGeo",
      title: "Frontend Developer",
      date: "2013 - now",
      description: "Development of a web application to manage the sellers and the logistic of distributors"
    }
  ]
};

var projects = {
  projects: [
    {
      title: "SIGMA - Sistema de Informação Geográfico para Monitoramento Ambiental",
      dates: "2011-2012",
      description: "Geographic information system (GIS) that allows the user to select geographic data and perform crossings and space operations in order to perform analyzes of a given space",
      images: []
    },
    {
      title: "CarConnect",
      dates: "2012-2013",
      description: "Vehicle tracking system that allows monitoring, blocking and reporting of the vehicle being tracked",
      images: []
    },
    {
      title: "GoGeo Platform",
      dates: "2013-2014",
      description: "Geospatial services platform that allows the construction of geospatial applications through a service interface (API)",
      images: []
    },
    {
      title: "GeoBusiness",
      dates: "2014-now",
      description: "Application of management of sales territories to meet the needs of distributors and industries",
      images: []
    }
  ]
};

bio.display = function() {
  var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
  var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
  
  $("#header").prepend(formattedHeaderRole);
  $("#header").prepend(formattedHeaderName);
  
  var formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedContactEmail);
  
  var formattedContactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedContactGithub);
  
  var formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedContactLocation);
  
  var formattedBioImage = HTMLbioPic.replace("%data%", bio.pictureUrl);
  $("#header").append(formattedBioImage);
  
  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
  
    for (skill of bio.skills) {
      var formattedSkill = HTMLskills.replace("%data%", skill);
      $("#skills").append(formattedSkill);
    }
  }
}

education.display = function() {
  
  for (var school of education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedEducationName = HTMLschoolName.replace("%data%", school.name);
    var formattedEducationDegree = HTMLschoolDegree.replace("%data%", school.degree);
    var formattedEducationNameDegree = formattedEducationName + formattedEducationDegree;
    $(".education-entry:last").append(formattedEducationNameDegree);

    var formattedEducationDates = HTMLschoolDates.replace("%data%", school.dates);
    $(".education-entry:last").append(formattedEducationDates);

    var formattedEducationLocation = HTMLschoolLocation.replace("%data%", school.location);
    $(".education-entry:last").append(formattedEducationLocation);

    if (school.majors.length > 0) {
      for (major of school.majors) {
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
        $(".education-entry:last").append(formattedSchoolMajor);
      }
    }
  }

  $("#education").append(HTMLonlineClasses);

  for (var online of education.onlineCourses) {
    $("#education").append(HTMLschoolStart);

    var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", online.title);
    var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", online.school);
    var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
    $(".education-entry:last").append(formattedOnlineTitleSchool);

    var formattedOnlineDates = HTMLonlineDates.replace("%data%", online.dates);
    $(".education-entry:last").append(formattedOnlineDates);

    var formattedOnlineUrl = HTMLonlineURL.replace("%data%", online.url);
    $(".education-entry:last").append(formattedOnlineUrl);
  }
}

work.display = function() {
  for (index in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
  
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].date);
    $(".work-entry:last").append(formattedDates);
  
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

projects.display = function() {
  for (project of projects.projects) {
    $("#projects").append(HTMLprojectStart);
    
    var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedDescription);

    if (project.images.length > 0) {
      for (image of projects.images) {
        var formattedImage = HTMLprojectImage.replace("%data%", image);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);