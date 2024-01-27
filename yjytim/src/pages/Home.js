
import '../css/Home.css';
import '../css/style.css';
import {Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//MUI
import Button from '@mui/material/Button';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Icon from '@mui/material/Icon';



import Header from '../components/header.js'
import FixedIcon from '../components/fixedIcon.js'
import Programmer_Content from '../components/homeProgrammer.js'
// import Photographer_Content from '../components/imageList'
import Photographer_Content from '../components/homeCreator.js'
import Footer from '../components/footer.js'


// brand icon with fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"

import profileImage from '../image/profileImage1.png'
import { padding, style } from '@mui/system';


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
                I am a Master's student in Computer Engineering at NYU Tandon. <br></br>
                My academic and professional journey is rooted in leveraging technology to create impactful solutions. <br></br>
                With experience in web development and project leadership, I'm passionate about driving innovation in the digital space. <br></br>
                This website is a window into my projects, experiences, and thoughts on how technology shapes our world.<br></br>
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
            <Col xs={12} md={6} className="mt-5">
              <Programmer_Content/>
            </Col>
            <Col xs={12} md={6} className="justify-content-center align-items-center mt-5">
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
              <a href="https://github.com/biubiubiupiu21" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <Button variant="contained" className="bg-miamiBlue textColor3 fw-bold d-flex seeMoreButton">
                  Check out My Github <KeyboardDoubleArrowRightIcon/>
                </Button>                  
              </a>            
          
            </Col>            
          </Row>
        </Container>
      </div>

      <div className='d-flex justify-content-center align-items-center creatorContainer'>
      <Container>
          <h2 className="text-center creatorTitle">A "Rookie" Content Creator</h2>
          <div style={{padding: "10%"}}>
            {/* <h3 className="text-center" style={{paddingBottom: "5%"}}>Photographer</h3> */}
            <Photographer_Content/>
          </div>
      </Container>

      </div>
        <Footer/>      
    </div>
  );
}

export default Home;
