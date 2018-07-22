
import React from 'react';
import card from  "./img/card.jpeg"
const CourseItem = function () {
    return (
        <div className="col">
            <div className="card">
              <img
                className="card-img-top"
                src={card}
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">Portrait Sketching</h4>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
    )
}


export default CourseItem;