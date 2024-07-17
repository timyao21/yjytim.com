
import '../css/Home.css';
import '../css/style.css';
import * as React from 'react';
import {Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//MUI
import Container from '@mui/material/Container';

import Header from '../components/Header.js'
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
        <Container maxWidth="md">
          <h1 className="SacramentoFont miamiBlue title font-weight-bold">Hi, I'm Tim Yao</h1>
          <p>A M.S. Computer Engineering Student, Programmer and Content-Creator</p>
        </Container>        
      </div>

      <FixedIcon/>

      <Container maxWidth="md" className="profileContainer d-flex justify-content-center align-items-center">
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
                <a className="socialMLog linkHover3" href='https://www.youtube.com/channel/UC9kCc8BtgMi9NnovEoh5PzQ' target={'_blank'} rel="noreferrer">
                  <FontAwesomeIcon icon={ faYoutube } className="socialMLogo fa-xl icon"/>
                </a>
                <a className="socialMLog linkHover3" href='https://www.instagram.com/yjytimmm_21?igsh=cmh2MjlxcTNuMmY0&utm_source=qr' target={'_blank'} rel="noreferrer">
                  <FontAwesomeIcon icon={ faInstagram } className="socialMLogo fa-xl icon"/>
                </a>
                <a className="socialMLog linkHover3" href='https://www.linkedin.com/in/junyuyao-tim/' target={'_blank'} rel="noreferrer">
                  <FontAwesomeIcon icon={ faLinkedinIn } className="socialMLogo fa-xl icon"/>  
                </a>
              </div>
            </Col>
            <Col xs={12} md={6} className="d-flex justify-content-center align-items-center mt-3">
              <p className="text-left" style={{ lineHeight: 2 }}>
                I am Junyu (Tim) Yao, a computer engineer with a Master's from NYU Tandon School of Engineering and a Bachelor's from Washington College. <br></br> <br></br>
                My academic and professional journey is rooted in leveraging technology to create impactful solutions. 
                I specialize in machine learning, network security, and full-stack development, with proficiency in <u>Python</u>, <u>Java</u>, <u>JavaScript</u>, <u>React</u>, <u>SQL</u>, and more <a href='https://github.com/biubiubiupiu21' target={'_blank'}>@My Github Page</a> <br></br> <br></br>
                With experience in web development and project leadership, I'm passionate about driving innovation in the digital space. This website is a window into my projects, experiences, and thoughts on how technology shapes our world.<br></br>
                Let's connect and explore opportunities for collaboration.
              </p>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="justify-content-center align-items-center backgroundcolor1">
        <Container maxWidth="md">
          <h2 className="text-center programmerTitle" style={{margin: "20px 0"}}>A "Rookie" Programmer</h2>
          <p className="text-center ">Always Exploring</p>
          <Programmer_Content/>
        </Container>
      </div>

      <div className='d-flex justify-content-center align-items-center'>
        <Container maxWidth="md">
            <h2 className="text-center creatorTitle">A "Rookie" Content Creator</h2>
            <div style={{padding: "10%"}}>
              <Photographer_Content/>
            </div>
        </Container>
      </div>
        <Footer/>      
    </div>
  );
}

export default Home;
