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
                <a className="socialMLog textColor4" href='https://www.youtube.com/channel/UC9kCc8BtgMi9NnovEoh5PzQ' target={'_blank'} rel="noreferrer">
                    <FontAwesomeIcon icon={ faYoutube } className="socialMLog textColor4"/>
                </a>
                <a className="socialMLog textColor4" href='https://www.instagram.com/yjytimmm_21/?next=%2F' target={'_blank'} rel="noreferrer">
                    <FontAwesomeIcon icon={ faInstagram } className="socialMLog textColor4"/>
                </a>
                <a className="socialMLog textColor4" href='https://www.linkedin.com/in/junyuyao-tim/' target={'_blank'} rel="noreferrer">
                    <FontAwesomeIcon icon={ faLinkedinIn } className="socialMLog textColor4"/>
                </a>
                <div>
                    <div class="vr text-center verticalRule textColor4"></div>
                </div>
            </div>
            <div className="leftFixed fixed-bottom vstack gap-2 d-none d-md-flex">
                <div>
                    <div class="vr text-center verticalRule textColor4"></div>
                </div>
                <a className="socialMLog textColor4" href='https://www.youtube.com/channel/UC9kCc8BtgMi9NnovEoh5PzQ' target={'_blank'} rel="noreferrer">
                    <FontAwesomeIcon icon={ faYoutube } className="socialMLog textColor4"/>
                </a>
                <a className="socialMLog textColor4" href='https://www.instagram.com/yjytimmm_21/?next=%2F' target={'_blank'} rel="noreferrer">
                    <FontAwesomeIcon icon={ faInstagram } className="socialMLog textColor4"/>
                </a>
                <a className="socialMLog textColor4" href='https://www.linkedin.com/in/junyuyao-tim/' target={'_blank'} rel="noreferrer">
                    <FontAwesomeIcon icon={ faLinkedinIn } className="socialMLog textColor4"/>
                </a>
                <div>
                    <div class="vr text-center verticalRule textColor4"></div>
                </div>
            </div>

        </div>   
    </div>

  );
}

export default fixedIcon;