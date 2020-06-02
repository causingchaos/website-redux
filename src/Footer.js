import IconButtonExampleSize from './FooterButton.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import FaAdjust from 'react-icons/lib/fa/adn.js'
var React = require('react');
var createReactClass = require('create-react-class');


//global variables
var navbar = {};
navbar.links = [
	{linkTo: "#", text: "AmazonWebServices"},
	{linkTo: "#", text: "Gitlab"},
	{linkTo: "#", text: "React"}
];

var Footer = createReactClass({
	render: function() {
		return (
				<div className="container col-xs-12 col-sm-12 col-md-12 col-lg-12" id="footer-container">
					<div className="row">
						<div className="col-xs-8">
								<div className="col-xs-12">
									<MuiThemeProvider><IconButtonExampleSize/></MuiThemeProvider>
								</div>
						</div>
						<div className="col-xs-4">
							<div className="col-xs-12" id="test9"><h6>© 2018 Justin Berry.</h6>
							</div>
						</div>
					</div>
				</div>
		)
	}
});

export {Footer};
