
import '../css/Home.css';
import '../css/style.css';
import {Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../components/header.js'
import Footer from '../components/footer.js'

// brand icon with fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"

import profileImage from '../image/profileImage1.png'


function Home() {
  return (
    <div className="PoppinsFont">
      <Header/>
      <div className="d-flex justify-content-center align-items-center backgroundcolor1 firstContainer text-center">
        <Container className="">
          <h1 className="SacramentoFont miamiBlue title font-weight-bold">Hi, I'm Tim Yao</h1>
          <p>A Computer Science student, programmer and content-creator</p>
        </Container>        
      </div>

      <Container className="profileContainer d-flex justify-content-center align-items-center">
        <div>
          <h2 className="text-center">About Me</h2>
          <Row>
            <Col xs={12} md={6}>
              <img
              alt=""
              src={profileImage}
              className="profileImage"
              />
              <div className="text-center icon-list">
                <FontAwesomeIcon icon={ faYoutube } className="socialMLogo"/>
                <FontAwesomeIcon icon={ faInstagram } className="socialMLogo"/>
                <FontAwesomeIcon icon={ faLinkedinIn } className="socialMLogo"/>  
              </div>
            </Col>
            <Col xs={12} md={6} className="d-flex justify-content-center align-items-center">
              <p className="text-left">
                I am a full-time student living in New York City and currently pursuing a master's degree in Computer Engineering at New York University.
                {/* I was born in China and started my overseas studying journey in 2014 when I was 16.
                Since then, I have enjoyed studying computer science.
                After studying in college, I was fortunate to have many opportunities to build different software, website, and mobile apps.
                Besides programming, I also like to play video games with my friends and document my life with my camera. */}
              </p>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="d-flex justify-content-center align-items-center backgroundcolor1 programmerContainer">
        <Container>
          <h2 className="text-center">A "Rookie" Programmer</h2>
          <Row>
            <Col md={4}>

            </Col>
            <Col className="d-flex justify-content-center align-items-center">
              <h3 className="programmerLabel">Java</h3>
              <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar w-100 bg-miamiBlue"></div>
              </div>          
            </Col>            
          </Row>
        </Container>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
