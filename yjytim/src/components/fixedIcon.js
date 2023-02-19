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

            <div className="rightFixed fixed-bottom vstack gap-2 d-none d-md-flex">
                <div>
                    <div class="vr text-center verticalRule textColor4"></div>
                </div>                
                <FontAwesomeIcon icon={ faYoutube } className="socialMLog textColor4"/>
                <FontAwesomeIcon icon={ faInstagram } className="socialMLogo textColor4"/>
                <FontAwesomeIcon icon={ faLinkedinIn } className="socialMLogo textColor4"/>  
                <div>
                    <div class="vr text-center verticalRule textColor4"></div>
                </div>
            </div>
            <div className="leftFixed fixed-bottom vstack gap-2 d-none d-md-flex">
                <div>
                    <div class="vr text-center verticalRule textColor4"></div>
                </div>
                <FontAwesomeIcon icon={ faYoutube } className="socialMLogo textColor4"/>
                <FontAwesomeIcon icon={ faInstagram } className="socialMLogo textColor4"/>
                <FontAwesomeIcon icon={ faLinkedinIn } className="socialMLogo textColor4"/>  
                <div>
                    <div class="vr text-center verticalRule textColor4"></div>
                </div>
            </div>

        </div>   
    </div>

  );
}

export default fixedIcon;