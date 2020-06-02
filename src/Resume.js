import FaCloudDownload from 'react-icons/lib/fa/cloud-download';
var React = require('react');
var createReactClass = require('create-react-class');

//Bootstrap pagebreaks xs = < 768px sm >= 798 md >= 992 px lg >= 1200px
var Resume = createReactClass({

  getInitialState: function(){
    return {
      workData: [
        {
          jobTitle: "IT Technician - Customer Support II",
          company: "Alberta Health Services",
          date: "November 2018 - Present",
          description: [
            {desc: "Resolved complex hardware and software technical issues relating to client, clinical, laboratory, medical grade hardware and zebra label printers"},
            {desc: "Installed and maintained Windows and desktop software, service packs, patches, using Ivanti Lan desk software deployment suite"},
            {desc: "Troubleshooting of software and printing with regards to SCM, Clinibase, EDSP, Netcare, and various other obscure healthcare related software"},
            {desc: "Built, configured, and maintained hardware within Epic Connect Care back end, via Epic Text and Hyperspace GUI"},
            {desc: "Created high quality technical documentation for Connect Care for the deskside team"},
            {desc: "Used vFire ticket management system"},
            {desc: "Inventory, configuration, and ordering of computer equipment for the hospital environment"},
          ]
        },
        {
          jobTitle: "Technical Solutions Analyst",
          company: "University of Calgary",
          date: "August 2014 - September 2018",
          description: [
            {desc: "Provided on-site and remote technical support to 4000+ faculty members, research and support staff, and students"},
            {desc: "Analysis, problem solving, and remediation relating to hardware, software, and network issues (Windows, Apple, and Linux)"},
            {desc: "Front-line emergency response during 2016 ransomware attack"},
            {desc: "Thorough malware and virus detection and removal"},
            {desc: "Developed contextually aware protocols to ensure incidents were resolved (Service Now)"},
            {desc: "Assisted in Active Directory domain management"}
          ]
        },
        {
          jobTitle: "Support Technician",
          company: "Dell",
          date: "February 2009 - February 2012",
          description: [
            {desc: "Answered multiple phone lines in a timely and professional manner"},
            {desc: "Upheld quality assurance for customers, while educating them on the proper usages of Windows and Linux Ubuntu"},
            {desc: "Provided knowledgeable technical support for hardware and software related issues."},
          ]
        },
        {
          jobTitle: "Land Surveyor Team Lead",
          company: "Amar Land Surveys",
          date: "June 2006 - Dec 2009",
          description: [
            {desc: "Worked under deadlines efficiently, running a crew of two people"},
            {desc: "Preformed typical legal surveys using GPS systems, and total station"},
            {desc: "Produced highly detailed field notes quickly in the field"},
            {desc: "Worked as a team with project managers, clients, landowners, and other survey crews providing detailed solutions for everyone involved"}
          ]
        }
      ]
    }
  },

  render: function(){

    var generateWorkHTML = this.state.workData;  //Generate HTML code from workData JSON format data.
    generateWorkHTML = generateWorkHTML.map(function(item,index) {
      let jsx = [];
      jsx.push(<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12"></div>);
      jsx.push(<h3>{this.state.workData[index].jobTitle}</h3>);
      jsx.push(<p>{this.state.workData[index].company}</p>);
      jsx.push(<p>{this.state.workData[index].date}</p>);
      jsx.push(<p>Key contributions:</p>);
      jsx.push(<ul></ul>);
      for (let i = 0; i < (this.state.workData[index].description.length); i++){
        jsx.push(<li>{this.state.workData[index].description[i].desc}</li>);
      }
      return( jsx )
    }.bind(this)); // bind .this to this map function for generating HTML content

    return (
      <div className="container" id="main-resume-container">
        <div class="col-md-11 col-lg-11 text-center">
          <a class="btn btn-primary btn-lg"
             href="https://s3-us-west-2.amazonaws.com/justin.backpackersdb.com/data/Justin.Berry.Resume.pdf"
             role="button" id="resume-download-button"><FaCloudDownload size={30}/> Resume download</a>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12">
          <div className="row">
            <div className="col-xs-12 col-sm-8 col-md-7 col-lg-7" id="main-resume-left-sub-container">
              <h2 className= "resume-h2">Work Experience</h2>

                {generateWorkHTML} { /*-- Generate the small work containers + HTML content ---*/ }

              <h2 className= "resume-h2">Education</h2>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="education-container">
                <h3>Bachelor of Science (BSc), Computer Science</h3>
                <h4>University of Calgary</h4>
                <h5>2017 | Calgary, Alberta, Canada</h5>
              </div> { /*----- End of #education-container ------------- */}
              <h2 className= "resume-h2">Certifications</h2>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="certifications-container">
                <h4>AWS Certified Solutions Architect – Associate</h4>
                <h5>December 2017</h5>
                <h4>Apple ACMT 2017</h4>
                <h5>January 2018</h5>
              </div> { /*----- End of #certifications-container ------------- */}
            </div> { /*----- End of main-resume-left-sub-container ------------- */}
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4" id="main-resume-right-sub-container">
              <h2 className= "resume-h2">Skills</h2>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="skills-container">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="skills-2">
                  <h4>Microsoft</h4>
                  <p>Windows, Windows Server, Active Directory, SCCM, Group Policy, Hyper-V, DHCP, DNS, Sharepoint, 
                    App Services, Azure Active Directory, Virtual Machines  
                  </p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="skills-7">
                  <h4>Microsoft Azure</h4>
                  <p>Windows, Windows Server, Azure Active Directory, SCCM, Group Policy, Hyper-V, DHCP, DNS, Azure App Service Sharepoint</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="skills-5">
                  <h4>Amazon Web Services</h4>
                  <p>Identity Access Management (IAM), EC2, S3, Virtual Private Cloud (VPC),
                    Route53</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="skills-1">
                  <h4>Programming Languages</h4>
                  <p>JavaScript, HTML/CSS, JSX, Python</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="skills-3">
                  <h4>Web Technologies</h4>
                      <p>React,js, RESTful Web Services, Serverless, Webpack, Bootstrap, NPM</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="skills-4">
                  <h4>Databases</h4>
                  <p>MySQL, Amazon DynamoDB</p>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="skills-6">
                  <h4>Other Knowledge</h4>
                  <p>Service Now, Linux, Remedy, MacOS, OSX, JAMF, Bomgar, Bash, PowerShell, Networking</p>
                </div>
              </div> { /*----- End of skills-container ------------- */}
              <h2 className= "resume-h2">Coursework</h2>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="coursework-container">
                <ul>
                  <li>Programming (Java, Python, ARM, SPARC, Haskell, C, C++)</li>
                  <li>Computer Networks</li>
                  <li>Data Structures and Algorithms</li>
                  <li>Automata, Grammars, Turing Machines</li>
                  <li>Database Management Systems</li>
                  <li>Human-Computer Interaction</li>
                  <li>Software Engineering</li>
                  <li>Networking Security</li>
                  <li>Operating Systems</li>
                  <li>Principles of Computer Security</li>
                </ul>
              </div> { /*----- End of #coursework-container ------------- */}
              <h2 className= "resume-h2">Languages</h2>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" id="languages">
                <h5>Native proficiency with English, both written and verbal</h5>
              </div> { /*----- End of skills-container ------------- */}
            </div> { /*----- End of #main-resume-right-sub-container ------------- */}
          </div>
        </div>
      </div>  // { /*----- End of #main-resume-container ------------- */}


    )
  }



});

export { Resume };
