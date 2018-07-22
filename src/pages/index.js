import React from 'react'
import Link from 'gatsby-link'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { Jumbotron, Container } from 'reactstrap';
import Courses from '../components/Courses/courses'
import Location from '../components/location'

const IndexPage = () => (
    <Container className="container-main" fluid>
     <Jumbotron fluid className="main">
        <h1 className="display-3">Art Classes in Amritsar</h1>
      </Jumbotron>
      <Container>
        <Courses/>
        <Location/>          
      </Container>
    </Container>
)

export default IndexPage
