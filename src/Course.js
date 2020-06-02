//main component
import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardExample from './CourseCardComponent';

class Course extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      editing: false
    };

    //Bind functions
    this.renderForm = this.renderForm.bind(this);
    this.renderDisplay = this.renderDisplay.bind(this);
  }


  renderForm() {
    return (

      <div className="course">

        <form>
          <textarea>Hello World</textarea>
        </form>
      </div>
    )
  }

  //passing in props here.
  // will show the value course.course stored in the object in the CourseBoard.js file.
  //references the course here?
  renderDisplay() {
    return (

        <div className="container col-xs-6 col-sm-3 col-md-2 col-lg-2" id="course-board-card-container">
            <MuiThemeProvider>
              <CardExample className="test" courseDetails={this.props.courseDetails} label={this.props.children}/>

            </MuiThemeProvider>
				</div>
    )
  }

  render() {
    if (this.state.editing === true) {
      return this.renderDisplay();
    }else{
      return this.renderDisplay();
    }
  }
};

export default Course;