import React from 'react'
import CourseItem from './courseitem';
import './courses.css'

class Courses extends React.Component {

  renderCourses (courses) {
    var TOTAL = courses.length;
    var courseRows  = [];
    for(var i = 0; i < Math.ceil(TOTAL / 3); i++) {
      courseRows.push(
        <div className="row course-row">
          {
            courses.slice(i*3,i*3+3).map(course =>  (
              <CourseItem 
                name={course.node.frontmatter.title} 
                image={course.node.frontmatter.image}
              />
            ))
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
        {this.renderCourses(this.props.courses)}
      </div>
    )
  }
}

export default Courses
