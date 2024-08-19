
import '../css/Home.css';
import '../css/style.css';
import * as React from 'react';
import {Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

//MUI
import Container from '@mui/material/Container';

import FixedIcon from '../components/fixedIcon.js'
import ProgrammerContent from '../components/homeProgrammer.js'
import PhotographerContent from '../components/homeCreator.js'


// brand icon with fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons"

// profileImage
import profileImage from '../image/profileImage1.png'

import {githubUrl, youtubeUrl, insUrl, linkedInUrl} from './../constantsLink.js';


const ResponsiveText = styled.p`
  font-size: 66px;

  @media (max-width: 1200px) {
    font-size: 66px;
  }

  @media (max-width: 768px) {
    font-size: 50px;
  }

  @media (max-width: 480px) {
    font-size: 39px;
  }
`;


function Home() {
  return (
    <div className="PoppinsFont">
      
      <div className="d-flex justify-content-center align-items-center backgroundcolor1 firstContainer text-center">
        <Container maxWidth="md">
          <ResponsiveText className="SacramentoFont miamiBlue title font-weight-bold">Hi, I'm Tim Yao</ResponsiveText>
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
                <a className="socialMLog linkHover3" href={`${youtubeUrl}`} target={'_blank'} rel="noreferrer">
                  <FontAwesomeIcon icon={ faYoutube } className="socialMLogo fa-xl icon"/>
                </a>
                <a className="socialMLog linkHover3" href={`${insUrl}`} target={'_blank'} rel="noreferrer">
                  <FontAwesomeIcon icon={ faInstagram } className="socialMLogo fa-xl icon"/>
                </a>
                <a className="socialMLog linkHover3" href={`${linkedInUrl}`} target={'_blank'} rel="noreferrer">
                  <FontAwesomeIcon icon={ faLinkedinIn } className="socialMLogo fa-xl icon"/>  
                </a>
                <a className="socialMLog linkHover3" href={`${githubUrl}`} target={'_blank'} rel="noreferrer">
                  <FontAwesomeIcon icon={ faGithub } className="socialMLogo fa-xl icon"/>  
                </a>
              </div>
            </Col>
            <Col xs={12} md={6} className="d-flex justify-content-center align-items-center mt-3">
              <p className="text-left" style={{ lineHeight: 2 }}>
                I am Junyu (Tim) Yao, a computer engineer with a Master's from NYU Tandon School of Engineering and a Bachelor's from Washington College. <br></br> <br></br>
                My academic and professional journey is rooted in leveraging technology to create impactful solutions. 
                I specialize in machine learning, network security, and full-stack development, with proficiency in <u>Python</u>, <u>Java</u>, <u>JavaScript</u>, <u>React</u>, <u>SQL</u>, and more <a href={`${githubUrl}`} target={'_blank'} rel="noreferrer">@My Github Page</a> <br></br> <br></br>
                With experience in web development and project leadership, I'm passionate about driving innovation in the digital space. This website is a window into my projects, experiences, and thoughts on how technology shapes our world.<br></br>
                Let's connect and explore opportunities for collaboration.
              </p>
            </Col>
          </Row>
        </div>
      </Container>

      <div className="justify-content-center align-items-center backgroundcolor1" style={{paddingTop: "10vh", paddingBottom: "10vh"}}>
        <Container maxWidth="md">
          <h2 className="text-center programmerTitle">A "Rookie" Programmer</h2>
          <p className="text-center ">Always Exploring</p>
          <ProgrammerContent/>
        </Container>
      </div>

      <div className='justify-content-center align-items-center' style={{paddingTop: "10vh", paddingBottom: "10vh"}}>
        <Container maxWidth="lg">
            <h2 className="text-center creatorTitle">A "Rookie" Content Creator</h2>
            <div style={{padding: "10%"}}>
              <PhotographerContent/>
            </div>
        </Container>
      </div>    
    </div>
  );
}

export default Home;
