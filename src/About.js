import Image from './img/justin-berry.png'
var React = require('react');
var createReactClass = require('create-react-class');


var About = createReactClass({
  render: function() {
    return (
      <div className="container" id="website-body">
        <div className="col-sm-12 col-md-12 col-lg-12" id="about-container">
          {/*About Main Flex Container*/}
          <div className="about-row-1">

          <div className="col-xs-12 col-sm-7 col-md-8 col-lg-7" id="about-introduction-row-column1">
            <h2>Computer Scientist + IT & AWS Professional + Serverless & Fullstack Web Enthusiast</h2>
            <p>
            As a Computer Scientist, I specialize in IT with a heavy focus on Microsoft Azure and VMware, and have over 7 years’ experience providing on-site, and over the phone technical support. As a Full-stack web enthusiast, using languages such as Javascript (ECMAscript2017+), HTML5, CSS3 for web, and Java for Mobile native app support, I focus on exciting web technologies such as LitElement/Polymer (Web Components), NodeJS, Webpack, Bootstrap, Microsoft App Services, RESTful web services, and SQL databases.
            </p>
          </div>
          <div className="col-xs-5 col-sm-5 col-md-4 col-lg-4" id="about-introduction-row-column2">
            <img id="profile-img" alt="Justin Berry" src={Image}/>
          </div>
        </div>
        </div>
      </div>
    )
  }
});

export { About };