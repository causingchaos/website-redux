import {SimpleMap} from "./Map";

import Logo from './img/map.svg';
import Phone from './img/iphone.svg';
import Mail from './img/email.svg';
import Browser from './img/browser.svg';

var React = require('react');
var createReactClass = require('create-react-class');

const style = {
  width: "55px",
  height: "55px",
  paddingRight: "15px"
}

const styl2e = {
  height: "60px"
}


var Contact = createReactClass({
  render: function(){
    return(
      <div className="container col-sm-12 col-md-12 col-lg-12 " id="main-contact-container">
        <div className="contact-section-heading text-center"><h1>Contact Me</h1></div>
        <div style={{width: '100%', height: '400px'}}>
          <SimpleMap/>
        <div className="col-md-11 col-lg-11 text-center">
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-12" id="contact-container">
          <div className="row">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3" id="main-contact-left-sub-container">
              <h3>Contact Me</h3>
              <div className="col-sm-12">
                <div className="row" style={styl2e}>
                  <img src={Logo} style={style} className="App-logo" alt="logo" />Calgary, Alberta, Canada
                </div>

                <div className="row" style={styl2e}>
                  <img src={Phone} style={style} className="App-logo" alt="logo" />403 990 2638
                </div>
                <div className="row" style={styl2e}>
                  <img src={Mail} style={style} className="App-logo" alt="logo" />jdberry@ucalgary.ca
                </div>
                <div className="row" style={styl2e}>
                  <img src={Browser} style={style} className="App-logo" alt="logo" />justin.backpackersdb.com
                </div>
              </div>

            </div>

            <div className="col-xs-12 col-sm-8 col-md-7 col-lg-7" id="main-contact-right-sub-container">
              <h3>Send Me a Message</h3>
                <form className="form-horizontal" action="mailto:jdberry@ucalgary.ca" method="GET">
                  <div className="form-group">
                    <div className="col-lg-6" align="center">
                      <input type="name" className="form-control input-lg" placeholder="Name" name="name"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-6" align="center">
                      <input type="email" className="form-control input-lg" placeholder="Email" name="email"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-lg-6" align="center">
                      <textarea className="form-control input-lg" placeholder="Message" rows="3"></textarea>
                    </div>
                  </div>
                  <div className="form-group">
                    <div class="col-lg-offset-right-2 col-lg-10">
                      <button type="submit" class="btn btn-default" value="Send">Send</button>
                    </div>
                  </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    )
  }

});

export {Contact};