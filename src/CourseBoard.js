import React from 'react';
import Course from "./Course.js";

class CourseBoard extends React.Component {

  //Pass in the course.course as a child element, and use props to pass in courseDetails object
  eachCourse(course,i){
    return (
      <Course key={i} index={i} courseDetails={course.courseDetails}> {course.course} </Course>
    )
  }

  render() {
    //Now map each
    return (
      <div className="container course-board col-sm-12 col-md-12 col-lg-12 " id="course-board">
        <div className="section-heading text-center id=board-heading" ><h1>Courses Taken</h1></div>
				<div className="card-deck">
        {this.state.courses.map(this.eachCourse)}
				</div>
      </div>
    )
  }

  constructor(props){
    super(props);
    this.state = {
      courses: [
        { id: 33, course: "Windows Server 2016: Install and Configure Active Directory", courseDetails: [
            {mediaType: "online"},
            {completed: true},
            {instructor: "lynda"},
            {dateCompleted: ""},
            {link: "https://www.lynda.com/Windows-Server-tutorials/Windows-Server-2016-Install-Configure-Active-Directory/520536-2.html"},
            {time: "3:16"}
          ]},
        { id: 35, course: "Windows Server 2016: Install and Configure Active Directory", courseDetails: [
            {mediaType: "online"},
            {completed: true},
            {instructor: "lynda"},
            {dateCompleted: ""},
            {link: "https://www.lynda.com/Windows-Server-tutorials/Windows-Server-2016-Install-Configure-Active-Directory/520536-2.html"},
            {time: "3:16"}
          ]},
        { id: 37, course: "Windows Server 2016: DNS & DHCP", courseDetails: [
            {mediaType: "online"},
            {completed: true},
            {instructor: "lynda"},
            {dateCompleted: ""},
            {link: "https://www.lynda.com/Windows-Server-tutorials/Windows-Server-2016-DNS/530531-2.html"},
            {time: "3:16"}
          ]},
        { id: 39, course: "Windows Server 2016: Manage, Monitor, and Maintain Servers", courseDetails: [
            {mediaType: "online"},
            {completed: true},
            {instructor: "lynda"},
            {dateCompleted: ""},
            {link: "https://www.lynda.com/Windows-Server-tutorials/Windows-Server-2016-Manage-Monitor-Maintain-Servers/500544-2.html"},
            {time: "3:16"}
          ]},
        { id: 41, course: "Windows Server 2016: High Availability", courseDetails: [
            {mediaType: "online"},
            {completed: true},
            {instructor: "lynda"},
            {dateCompleted: ""},
            {link: "https://www.lynda.com/Windows-Server-tutorials/Windows-Server-2016-High-Availability/553475-2.html"},
            {time: "3:16"}
          ]},
        { id: 43, course: "Windows Server 2016: Configure Hyper-V", courseDetails: [
            {mediaType: "online"},
            {completed: true},
            {instructor: "lynda"},
            {dateCompleted: ""},
            {link: "https://www.lynda.com/Windows-Server-tutorials/Windows-Server-2016-Configure-Hyper-V/584487-2.html"},
            {time: "3:16"}
          ]},
        { id: 45, course: "Windows Server 2016: Storage Services", courseDetails: [
            {mediaType: "online"},
            {completed: true},
            {instructor: "lynda"},
            {dateCompleted: "5-2018"},
            {link: "https://www.lynda.com/Windows-Server-tutorials/Windows-Server-2016-Storage-Services/548815-2.html"},
            {time: "3:16"}
          ]},
        { id: 47, course: "Windows Server 2016: Installation and Configuration", courseDetails: [
            {mediaType: "online"},
            {completed: true},
            {instructor: "lynda"},
            {dateCompleted: "5-2018"},
            {link: "https://www.lynda.com/Windows-Server-tutorials/Windows-Server-2016-Installation-Configuration/500545-2.html"},
            {time: "3:16"}
          ]},
        { id: 50, course: "SharePoint 2013: Installing and Configuring a Test Environment", courseDetails: [
            {mediaType: "online"},
            {completed: true},
            {instructor: "lynda"},
            {dateCompleted: "4-2018"},
            {link: "https://www.lynda.com/SharePoint-tutorials/SharePoint-2013-Installing-Configuring-Test-Environment/360032-2.html"},
            {time: "3:59"}
          ]},
        { id: 60, course: "Windows Server 2012 Active Directory: Network Services", courseDetails: [
            {mediaType: "online"},
            {completed: true},
            {instructor: "lynda"},
            {dateCompleted: "4-2018"},
            {link: "https://www.lynda.com/Windows-Server-tutorials/Windows-Server-2012-Active-Directory-Network-Services/184161-2.html"},
            {time: "12:51"}
          ]},
        { id: 70, course: "Windows Server 2012 Active Directory: Management and Implementation", courseDetails: [
            {mediaType: "online"},
            {completed: true},
            {instructor: "lynda"},
            {dateCompleted: "04-2018"},
            {link: "https://www.lynda.com/Windows-Server-tutorials/Windows-Server-2012-Active-Directory-Management-Implementation/184163-2.html"},
            {time: "13:03"}
          ]},
        { id: 75, course: "Windows Server 2012: Configure Basic Microsoft Services", courseDetails: [
            {mediaType: "online"},
            {completed: true},
            {instructor: "self"},
            {dateCompleted: "04-2018"},
            {link: "https://www.lynda.com/Windows-Server-tutorials/Configuring-Basic-Microsoft-Services/171574-2.html"},
            {time: "1:21"}
          ]},
        { id: 80, course: "Windows Server 2012: Installation and Configuration", courseDetails: [
            {mediaType: "online"},
            {completed: true},
            {instructor: "self"},
            {dateCompleted: "03-2018"},
            {link: "https://www.lynda.com/Windows-Server-tutorials/Basic-Installation-Configuration-Windows-Server-2012/163751-2.html"},
            {time: "1:21"}
          ]},
        { id: 99, course: "Serverless-React", courseDetails: [
          {mediaType: "tutorial"},
          {completed: true},
          {instructor: "self"},
          {dateCompleted: "01-2018"},
          {link: "https://serverless-stack.com/"},
          {time: ""}
        ]},
        { id: 100, course: "Node.js Essential Training", courseDetails: [
          {mediaType: "online"},
          {completed: true},
          {instructor: "lynda"},
          {dateCompleted: ""},
          {link: "https://www.lynda.com/React-js-tutorials/React-js-Essential-Training/496905-2.html?srchtrk=index%3a2%0alinktypeid%3a2%0aq%3areact-essentials%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2"},
          {time: "6:22"}
        ]},
        { id: 101, course: "SurviveJS - React", courseDetails: [
          {mediaType: "book"},
          {completed: true},
          {instructor: "self"},
          {dateCompleted: ""},
          {link: "https://survivejs.com/react/"},
          {time: ""}
        ]},
        { id: 105, course: "SurviveJS - Webpack", courseDetails: [
          {mediaType: "book"},
          {completed: true},
          {instructor: "self"},
          {dateCompleted: ""},
          {link: "https://survivejs.com/webpack/"},
          {time: "0"}
        ]},
        { id: 401, course: "Learning ECMA Script 6", courseDetails: [
          {mediaType: "online"},
          {completed: true},
          {instructor: "lynda"},
          {dateCompleted: "01-2018"},
          {link: "https://www.lynda.com/ViewCertificate/BEAEF8CFD3AA40E4886A75FCDD4385DF?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"},
          {description: "Introduction course that teaches you the basics of the Javascript framework React.js"}
        ]},
        { id: 500, course: "AWS Certified Developer Associate", courseDetails: [
          {mediaType: "online"},
          {completed: true},
          {instructor: "acloudguru"},
          {dateCompleted: "12-2017"},
          {link: "https://acloud.guru/learn/aws-certified-developer-associate"},
          {time: "16:05"}
        ]},
        { id: 505, course: "AWS Certified Solutions Architect Associate", courseDetails: [
          {mediaType: "online"},
          {completed: true},
          {instructor: "acloudguru"},
          {dateCompleted: "11-2017"},
          {link: "https://acloud.guru/learn/aws-certified-solutions-architect-associate"},
          {time: "22:00"}
        ]},
        { id: 600, course: "ES6: The Right Parts", courseDetails: [
          {mediaType: "online"},
          {completed: true},
          {instructor: "lynda"},
          {dateCompleted: ""},
          {link: "https://www.lynda.com/JavaScript-tutorials/ES6-Right-Parts/604265-2.html?srchtrk=index%3a1%0alinktypeid%3a2%0aq%3aes6+the+right+parts%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2"},
        ]},
        { id: 605, course: "Learning React.js", courseDetails: [
          {mediaType: "online"},
          {completed: true},
          {instructor: "lynda"},
          {dateCompleted: "08-2017"},
          {link: "https://www.lynda.com/ViewCertificate/7049B84038E040EE8A07E0CFCF111944?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"},
          {time: "1:41"}
        ]},
        { id: 700, course: "JavaScript Essential Training", courseDetails: [
          {mediaType: "online"},
          {completed: true},
          {instructor: "lynda"},
          {dateCompleted: "08-2017"},
          {link: "https://www.lynda.com/ViewCertificate/5F717BCBA57E4E9B8E6F3EF776DB7CAA?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"},
          {time: "5:15"}
        ]},
        { id: 705, course: "Learning Webpack 3", courseDetails: [
          {mediaType: "online"},
          {completed: true},
          {instructor: "lynda"},
          {dateCompleted: "08-2017"},
          {link: "https://www.lynda.com/Webpack-tutorials/Learning-Webpack-3/628711-2.html?srchtrk=index%3a1%0alinktypeid%3a2%0aq%3alearning+webpack%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2"},
          {time: "1:04"}
        ]},
        { id: 1100, course: "Bootstrap 4 Essential Training", courseDetails: [
          {mediaType: "online"},
          {completed: true},
          {instructor: "lynda"},
          {dateCompleted: "09-2017"},
          {link: "https://www.lynda.com/ViewCertificate/423ED81F9A2F4EC3B2E1B25B8942E306?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"},
          {time: "8:53"}
        ]},
        { id: 1200, course: "Ruby on Rails 5 Essential Training", courseDetails: [
          {mediaType: "online"},
          {completed: true},
          {instructor: "lynda"},
          {dateCompleted: "08-2017"},
          {link: "https://www.lynda.com/ViewCertificate/96A4C9A68B5241B6B9AEEADE6D7FEA70?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"},
          {time: "10:21"}
        ]},
        { id: 1300, course: "Ruby Essentials Training", courseDetails: [
          {mediaType: "online"},
          {completed: true},
          {instructor: "lynda"},
          {dateCompleted: "07-2017"},
          {link: "https://www.lynda.com/ViewCertificate/0ED34588BDDB4B7CADEF8CE78FC64F88?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"},
          {time: "6:57"}
        ]},
        { id: 1305, course: "UX Foundations", courseDetails: [
          {mediaType: "online"},
          {completed: true},
          {instructor: "lynda"},
          {dateCompleted: "07-2017"},
          {link: "https://www.lynda.com/ViewCertificate/C4DDEFA0FC8448F5A16E9A684504439C?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"},
          {time: "1:41"}
        ]},
        { id: 1400, course: "CSS Essential Training", courseDetails: [
          {mediaType: "online"},
          {completed: true},
          {instructor: "lynda"},
          {dateCompleted: "06-2017"},
          {link: "https://www.lynda.com/ViewCertificate/9C893B112FE54A5F87149E88DA973422?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"},
          {time: "2:36"}
        ]},
        { id: 1500, course: "HTML Essential Training1", courseDetails: [
          {mediaType: "online"},
          {completed: true},
          {instructor: "lynda"},
          {dateCompleted: "06-2017"},
          {link: "https://www.lynda.com/ViewCertificate/C4EF4A9836044966B11F7B88AC4CB2B3?utm_source=directlink&utm_medium=sharing&utm_campaign=certificate"},
          {time: "5:54"}
        ]}
      ]
    };
    //Bind functions to constructor
    this.eachCourse = this.eachCourse;
  }

}

export default CourseBoard;


