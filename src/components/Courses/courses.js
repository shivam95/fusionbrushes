import React from 'react'
import CourseItem from './courseitem';
import './courses.css'

class Courses extends React.Component {

  renderCourses () {
    var TOTAL = 10;
    var courseRows  = [];
    for(var i = 0; i < Math.ceil(TOTAL / 3); i++) {
      courseRows.push(
        <div className="row course-row">
          {
            [1,2,3].map(
              () => <CourseItem/>
            )
          }
        </div>
      )
    }
    return courseRows;
  }

  render() {
    return (
      <div>
        <h3>Courses</h3>
        <hr />
        {this.renderCourses()}
      </div>
    )
  }
}

export default Courses
