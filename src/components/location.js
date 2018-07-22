import React from 'react'
import {Container} from 'reactstrap'
import './location.css'

const Location = function() {
  return (
    <Container>
      <h3>Location</h3>
      <hr />
      <div id="location" className="row location-row">
        <div className="col">
          <iframe
            width="100%"
            height="300"
            src="//www.google.com/maps/embed/v1/place?q=Imperial City ,Loharka Road&zoom=17&key=AIzaSyDJ3yiUXuqEM0ZEeqKyQyjawQzhSdyqeSo"
          />
        </div>
        <div className="col">
          <div className="address-container">
            <address>
              B-24, Imperial City
              <br /> Loharka Road
              <br /> Amritsar 143001
            </address>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Location
