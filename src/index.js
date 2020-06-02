import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/courses.css'
import './css/header.css'
import './css/footer.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
//import '../node_modules/jquery/dist/jquery.js';



//Import react components
import { Navbar , navbar } from "./Navbar.js";
import { About } from "./About.js";
import { Resume } from "./Resume.js"
import CourseBoard from "./CourseBoard.js"
import {Contact} from "./Contact";
import {SimpleMap} from "./Map"
import {Footer} from "./Footer.js";

import registerServiceWorker from './registerServiceWorker';


//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Navbar {props.brand} />, document.getElementById("root"));
ReactDOM.render(<Navbar {...navbar} />, document.getElementById("navbar-placement"));
//ReactDOM.render(<WorkExperience/>, document.getElementById("website-body"));
ReactDOM.render(<About />, document.getElementById("main"));
ReactDOM.render(<Resume />, document.getElementById("resume"));
ReactDOM.render(<CourseBoard />, document.getElementById("courses-display"));
ReactDOM.render(<Contact />, document.getElementById('contact-container'));
ReactDOM.render(<Footer/>, document.getElementById('footer-section'));



registerServiceWorker();
