
import React from 'react';
import card from  "./img/card.jpeg"
const CourseItem = function ({name, image}) {
    return (
        <div className="col">
            <div className="card">
              <img
                className="card-img-top"
                src={image}
                alt="Card image cap"
              />
              <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
    )
}


export default CourseItem;