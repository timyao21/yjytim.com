import React from 'react';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container, Nav, NavDropdown} from 'react-bootstrap';
// css

import '../css/style.css';
import './css/fixedIcon.css';
// brand icon with fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
//  profileimage and thw logo image
import logoImage from '../image/logoImage.png'

function fixedIcon() {
  return (
    <div className="text-center">  
        <div className="position-relative position-relative-example">
            <div className="rightFixed fixed-bottom display-inline vstack gap-1">
                <div>
                    <div class="vr text-center verticalRule"></div>
                </div>
                <FontAwesomeIcon icon={ faYoutube } className="socialMLogo"/>
                <FontAwesomeIcon icon={ faInstagram } className="socialMLogo"/>
                <FontAwesomeIcon icon={ faLinkedinIn } className="socialMLogo"/>  
                <div>
                    <div class="vr text-center verticalRule"></div>
                </div>
            </div>
            <div className="leftFixed fixed-bottom display-inline vstack gap-1">
                <div>
                    <div class="vr text-center verticalRule"></div>
                </div>
                <FontAwesomeIcon icon={ faYoutube } className="socialMLogo"/>
                <FontAwesomeIcon icon={ faInstagram } className="socialMLogo"/>
                <FontAwesomeIcon icon={ faLinkedinIn } className="socialMLogo"/>  
                <div>
                    <div class="vr text-center verticalRule"></div>
                </div>
            </div>

        </div>   
    </div>

  );
}

export default fixedIcon;