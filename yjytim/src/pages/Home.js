
import '../css/Home.css';
import '../css/style.css';
import {Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//MUI
import Button from '@mui/material/Button';
import DoubleArrowSharpIcon from '@mui/icons-material/DoubleArrowSharp';
import Icon from '@mui/material/Icon';



import Header from '../components/header.js'
import FixedIcon from '../components/fixedIcon.js'
import Programmer_Content from '../components/homeProgrammer.js'
import Photographer_Content from '../components/imageList'
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
      <FixedIcon/>
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
                <FontAwesomeIcon icon={ faYoutube } className="socialMLogo fa-xl icon"/>
                <FontAwesomeIcon icon={ faInstagram } className="socialMLogo fa-xl icon"/>
                <FontAwesomeIcon icon={ faLinkedinIn } className="socialMLogo fa-xl icon"/>  
              </div>
            </Col>
            <Col xs={12} md={6} className="d-flex justify-content-center align-items-center mt-3">
              <p className="text-left">
                I am a full-time student living in New York City and currently pursuing a master's degree in Computer Engineering at New York University.
              </p>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="d-flex justify-content-center align-items-center backgroundcolor1 programmerContainer">
        <Container>
          <h2 className="text-center programmerTitle">A "Rookie" Programmer</h2>
          <p className="text-center ">Always Exploring</p>
          <Row>
            <Col md={6} className="mt-5">
              <Programmer_Content/>
            </Col>
            <Col className="justify-content-center align-items-center mt-5">
              <h3 className="programmerLabel">Python - 95%</h3>
              <div class="progress backgroundcolor1" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar w-100 bg-miamiBlue"></div>
              </div>
              <h3 className="programmerLabel">Web Design - 70%</h3>
              <div class="progress backgroundcolor1" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar w-75 bg-miamiBlue"></div>
              </div>
              <h3 className="programmerLabel">Java - 70%</h3>
              <div class="progress backgroundcolor1" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar w-75 bg-miamiBlue"></div>
              </div>
              <h3 className="programmerLabel">Database - 70%</h3>
              <div class="progress backgroundcolor1" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar w-75 bg-miamiBlue"></div>
              </div>
              <h3 className="programmerLabel">C++ - 50%</h3>
              <div class="progress backgroundcolor1" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar w-50 bg-miamiBlue"></div>
              </div>
              <h3 className="programmerLabel">Mobile Apps - 50%</h3>
              <div class="progress backgroundcolor1" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar w-50 bg-miamiBlue"></div>
              </div>            
              <Button variant="contained" className="bg-miamiBlue textColor3 fw-bold d-flex seeMoreButton">
                See More <DoubleArrowSharpIcon/>
              </Button>            
            </Col>            
          </Row>
        </Container>
      </div>
      <Container>
          <h2 className="text-center programmerTitle">A "Rookie" Content Creator</h2>
          <Photographer_Content/>
      </Container>
        <Footer/>        

    </div>
  );
}

export default Home;
