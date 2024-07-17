import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Row, Col, Container} from 'react-bootstrap';
import Grid from '@mui/material/Grid';

// css
import './css/homeProgrammer.css';
import '../css/style.css';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/themes/theme-bruce/styles.module.scss';

// icon
import { FaComputer } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { FaJava } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { FaSwift } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { FaAws } from "react-icons/fa";
import { FaGit } from "react-icons/fa";

export default function VerticalTabs() {
  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: '', height: 450, width: "100%"}}
      className="backgroundcolor1"
    >
      <Row style={{width:"100%"}}>
        <Col xs={12} md={3} className="mt-5">
          <h4 style={{ textAlign: 'center' }}>My Projects</h4>
            <AwesomeButton
              cssModule={AwesomeButtonStyles}
              type="primary"
              style={{ margin: '12px', width: "100%", height:"150px"}}
              href="https://nyutandoncssa.com/#/">
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <FaComputer size={25} />
                <h6 style={{ margin: 0 }}>NYU Tandon CSSA Official Website</h6>
              </div>
            </AwesomeButton>
            <AwesomeButton
              cssModule={AwesomeButtonStyles}
              type="primary"
              style={{ margin: '12px', width: "100%", height:"150px"}}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <FaComputer size={25} />
                <h6 style={{ margin: 0 }}>TechCompare</h6>
              </div>
            </AwesomeButton>
            <AwesomeButton
              cssModule={AwesomeButtonStyles}
              type="danger"
              style={{ margin: '12px', width: "100%", height:"85px"}}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <FaGithub size={25} />
                <h6 style={{ margin: 0 }}>More @ Github</h6>
              </div>
            </AwesomeButton>
        </Col>
        <Col xs={12} md={9} className="mt-5">
          <h4 style={{ textAlign: 'center' }}>Tech Stacks</h4>
          <Grid container spacing={2}>
            {/* Python Icon */}
            <Grid item xs={3}>
              <AwesomeButton
                cssModule={AwesomeButtonStyles}
                type="secondary"
                style={{ margin: '12px', width: "100%", height:"85px"}}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <IoLogoPython size={25} />
                  <h6 style={{ margin: 0 }}>Python</h6>
                </div>
              </AwesomeButton>
            </Grid>
            <Grid item xs={3}>
              <AwesomeButton
                cssModule={AwesomeButtonStyles}
                type="secondary"
                style={{ margin: '12px', width: "100%", height:"85px"}}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <FaJava size={25} />
                  <h6 style={{ margin: 0 }}>Java</h6>
                </div>
              </AwesomeButton>
            </Grid>
            <Grid item xs={3}>
              <AwesomeButton
                cssModule={AwesomeButtonStyles}
                type="secondary"
                style={{ margin: '12px', width: "100%", height:"85px"}}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <RiJavascriptFill size={25} />
                  <h6 style={{ margin: 0 }}>JavaScript</h6>
                </div>
              </AwesomeButton>
            </Grid>
            <Grid item xs={3}>
              <AwesomeButton
                cssModule={AwesomeButtonStyles}
                type="secondary"
                style={{ margin: '12px', width: "100%", height:"85px"}}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <FaReact size={25} />
                  <h6 style={{ margin: 0 }}>React</h6>
                </div>
              </AwesomeButton>
            </Grid>
            <Grid item xs={3}>
              <AwesomeButton
                cssModule={AwesomeButtonStyles}
                type="secondary"
                style={{ margin: '12px', width: "100%", height:"85px"}}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <SiSpringboot size={20} />
                  <h9 style={{ margin: 0 }}>Spring Boot</h9>
                </div>
              </AwesomeButton>
            </Grid>
            <Grid item xs={3}>
              <AwesomeButton
                cssModule={AwesomeButtonStyles}
                type="secondary"
                style={{ margin: '12px', width: "100%", height:"85px"}}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <RiTailwindCssFill size={30} />
                  <h9 style={{ margin: 0 }}>Tailwind</h9>
                </div>
              </AwesomeButton>
            </Grid>
            <Grid item xs={3}>
              <AwesomeButton
                cssModule={AwesomeButtonStyles}
                type="secondary"
                style={{ margin: '12px', width: "100%", height:"85px"}}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <SiMysql size={30} />
                  <h9 style={{ margin: 0 }}>SQL</h9>
                </div>
              </AwesomeButton>
            </Grid>
            <Grid item xs={3}>
              <AwesomeButton
                cssModule={AwesomeButtonStyles}
                type="secondary"
                style={{ margin: '12px', width: "100%", height:"85px"}}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <FaSwift size={30} />
                  <h9 style={{ margin: 0 }}>Swift</h9>
                </div>
              </AwesomeButton>
            </Grid>
            <Grid item xs={3}>
              <AwesomeButton
                cssModule={AwesomeButtonStyles}
                type="secondary"
                style={{ margin: '12px', width: "100%", height:"85px"}}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <FaLinux size={30} />
                  <h9 style={{ margin: 0 }}>Linux</h9>
                </div>
              </AwesomeButton>
            </Grid>
            <Grid item xs={3}>
              <AwesomeButton
                cssModule={AwesomeButtonStyles}
                type="secondary"
                style={{ margin: '12px', width: "100%", height:"85px"}}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <BiLogoMongodb size={30} />
                  <h9 style={{ margin: 0 }}>Mongodb</h9>
                </div>
              </AwesomeButton>
            </Grid>
            <Grid item xs={3}>
              <AwesomeButton
                cssModule={AwesomeButtonStyles}
                type="secondary"
                style={{ margin: '12px', width: "100%", height:"85px"}}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <FaAws size={30} />
                  <h9 style={{ margin: 0 }}>AWS</h9>
                </div>
              </AwesomeButton>
            </Grid>
            <Grid item xs={3}>
              <AwesomeButton
                cssModule={AwesomeButtonStyles}
                type="secondary"
                style={{ margin: '12px', width: "100%", height:"85px"}}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <FaGit size={30} />
                  <h9 style={{ margin: 0 }}>Git</h9>
                </div>
              </AwesomeButton>
            </Grid>
          </Grid>
        </Col>
      </Row>
    </Box>
  );
}