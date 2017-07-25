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
  pictureUrl: "./images/profile.jpg",
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
      url: "https://br.udacity.com/course/front-end-web-developer-nanodegree--nd001/"
    }
  ]
}

var work = {
  jobs: [
    {
      employer: "Laboratory for Ubiquitous and Pervasive Applications (LUPA) - UFG",
      title: "Software Developer",
      date: "2011 - 2012",
      location: "Goiânia-GO, BR",
      description: "Development of a geoAnalytics application that enable the user join many geospatial data and apply many geospatial operations"
    },
    {
      employer: "CUIA Internet Brasil",
      title: "Software Developer",
      date: "2012-2013",
      location: "Goiânia-GO, BR",
      description: "Development of a tracking vehicles application"
    },
    {
      employer: "GoGeo",
      title: "Frontend Developer",
      date: "2013 - now",
      location: "Goiânia-GO, BR",
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

bio.display = function () {
  const formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
  const formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);

  $("#header").prepend(formattedHeaderRole);
  $("#header").prepend(formattedHeaderName);

  const formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedContactEmail);

  const formattedContactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedContactGithub);

  const formattedContactLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedContactLocation);

  const formattedBioImage = HTMLbioPic.replace("%data%", bio.pictureUrl);
  $("#header").append(formattedBioImage);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (const skill of bio.skills) {
      const formattedSkill = HTMLskills.replace("%data%", skill);
      $("#skills").append(formattedSkill);
    }
  }
}

education.display = function () {

  for (const school of education.schools) {
    $("#education").append(HTMLschoolStart);

    const formattedEducationName = HTMLschoolName.replace("%data%", school.name);
    const formattedEducationDegree = HTMLschoolDegree.replace("%data%", school.degree);
    const formattedEducationNameDegree = formattedEducationName + formattedEducationDegree;
    $(".education-entry:last").append(formattedEducationNameDegree);

    const formattedEducationDates = HTMLschoolDates.replace("%data%", school.dates);
    $(".education-entry:last").append(formattedEducationDates);

    const formattedEducationLocation = HTMLschoolLocation.replace("%data%", school.location);
    $(".education-entry:last").append(formattedEducationLocation);

    if (school.majors.length > 0) {
      for (const major of school.majors) {
        const formattedSchoolMajor = HTMLschoolMajor.replace("%data%", major);
        $(".education-entry:last").append(formattedSchoolMajor);
      }
    }
  }

  $("#education").append(HTMLonlineClasses);

  for (const online of education.onlineCourses) {
    $("#education").append(HTMLschoolStart);

    const formattedOnlineTitle = HTMLonlineTitle.replace("%data%", online.title);
    const formattedOnlineSchool = HTMLonlineSchool.replace("%data%", online.school);
    const formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
    $(".education-entry:last").append(formattedOnlineTitleSchool);

    const formattedOnlineDates = HTMLonlineDates.replace("%data%", online.dates);
    $(".education-entry:last").append(formattedOnlineDates);

    const formattedOnlineUrl = HTMLonlineURL.replace("%data%", online.url);
    $(".education-entry:last").append(formattedOnlineUrl);
  }
}

work.display = function () {
  for (const index in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    const formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
    const formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
    const formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    const formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].date);
    $(".work-entry:last").append(formattedDates);

    const formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
    $(".work-entry:last").append(formattedLocation);

    const formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

projects.display = function () {
  for (const project of projects.projects) {
    $("#projects").append(HTMLprojectStart);

    const formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
    $(".project-entry:last").append(formattedTitle);

    const formattedDates = HTMLprojectDates.replace("%data%", project.dates);
    $(".project-entry:last").append(formattedDates);

    const formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
    $(".project-entry:last").append(formattedDescription);

    if (project.images.length > 0) {
      for (const image of projects.images) {
        const formattedImage = HTMLprojectImage.replace("%data%", image);
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