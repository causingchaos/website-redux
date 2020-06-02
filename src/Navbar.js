var React = require('react');
var createReactClass = require('create-react-class');


//global variables/objects
var navbar = {};
navbar.brand = {
  linkTo: "#", text: "Justin Berry"};
navbar.links = [
  { linkTo: "#", text: "Who Am I?", active: true},
  { linkTo: '#main-resume-container', text: "Resume", active: false },
  { linkTo: "#courses-display", text: "Courses Taken" },
  { linkTo: "#main-contact-container", text: "Contact"},
  { dropdown: true, text: "Coding", links: [
    { linkTo: "#courses-display", text: "Courses Taken", active: false },
    { linkTo: "https://gitlab.com/causingchaos", text: "GitLab", active: false },
    { linkTo: "#", text: "Coding Sandbox", active: false },
  ]}
];

var Navbar = createReactClass({
  render: function() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            <NavbarBrand linkTo={this.props.brand.linkTo} text={this.props.brand.text}/>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <NavMenu links={this.props.links} />
          </div>
        </div>
      </nav>
    )
  }
});

var NavMenu = createReactClass({
  render: function(){
    var links = this.props.links.map(function(link){
      if(link.dropdown) {
        return (
          <NavDropDown links={link.links} text={link.text} active={link.active}></NavDropDown>
        );
      }else{
        return(
          <NavLink linkTo={link.linkTo} text={link.text} active={link.active} />
        );
      }
    });
    return (
      <ul className="nav navbar-nav navbar-right">{links}</ul>
    );
  }

});

/*
<li class="dropdown">
  <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
     aria-haspopup="true" aria-expanded="false">Coding<span class="caret"></span></a>
  <ul class="dropdown-menu">
    <li><a href="#">Courses Taken</a></li>
    <li><a href="https://gitlab.com/causingchaos">GitLab</a></li>
    <li><a href="https://www.linkedin.com/in/justin-berry">LinkedIn</a></li>
    <li><a href="#">Coding Sandbox</a></li>
    <li role="separator" class="divider"></li>
    <li><a href="#">Projects</a></li>
  </ul>
</li>
*/
var NavDropDown = createReactClass({
  render: function(){
    var active = false;
    var links = this.props.links.map(function(link){
      if(link.active){
        active = true
      }
      //pass in linkTo, text, and active as props to Class NavLink, i.e.
      //generate each individual link in the drop down list.
      return (
        <NavLink linkTo={link.linkTo} text={link.text} active={link.active}></NavLink>
      );
    });

    // add the processed JSX formatted ordered list of links to var links, and pass this into ul className=
    // dropdown-menu.
		var activeString = "";
		if(active === true){
			activeString = "active";
		}
    return (
      <li className={"dropdown " + activeString}>
        <a href="###" className="dropdown-toggle" data-toggle="dropdown" role="button"
           aria-haspopup="true" aria-expanded="false">{this.props.text}
           <span className="caret"></span>
        </a>
        <ul className="dropdown-menu">{links}</ul>
      </li>
    );
  }
});

//Return the regular flat links in ordered list, i.e. <li class="active"/"unactive"><a href="#"> LinkText </li>
var NavLink = createReactClass({
  render: function(){
    if (this.props.active){
      return(
        <li className="active"><a href={this.props.linkTo}>{this.props.text}</a></li>
      );
    } else{
      return (
        <li className=""><a href={this.props.linkTo}>{this.props.text}</a></li>
      );
    }
  }
});

//Create the NavbarBrand Class for the Navbar brand area (site logo)
var NavbarBrand = createReactClass({
  render: function(){
    return (
      <a className="navbar-brand" href={this.props.linkTo}>{this.props.text}</a>
    );
  }
});

export { Navbar, navbar};

/* Bootstrap/html 3.0 nav structure reference
<!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">Justin Berry</a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                    <li class="active"><a href="#">Resume<span class="sr-only">(current)</span></a></li>
                    <li><a href="#">Who Am I?</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="https://www.linkedin.com/in/justin-berry/">Contact</a></li>
                    <li><a href="#">Travel</a></li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button"
                           aria-haspopup="true" aria-expanded="false">Coding<span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Courses Taken</a></li>
                            <li><a href="https://gitlab.com/causingchaos">GitLab</a></li>
                            <li><a href="https://www.linkedin.com/in/justin-berry">LinkedIn</a></li>
                            <li><a href="#">Coding Sandbox</a></li>
                            <li role="separator" class="divider"></li>
                            <li><a href="#">Projects</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</header>
 */








