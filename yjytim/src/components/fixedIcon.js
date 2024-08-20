import React from 'react';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// css

import '../css/style.css';
import './css/fixedIcon.css';
// brand icon with fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"

//import links
import {youtubeUrl, insUrl, linkedInUrl} from './../constantsLink.js';

function fixedIcon() {
  return (
    <div className="text-center">  
        <div className="position-relative position-relative-example">

            <div className="rightFixed fixed-bottom vstack gap-2 d-none d-md-flex">
                <div>
                    <div class="vr text-center verticalRule textColor4"></div>
                </div>                
                <a className="socialMLog textColor4" href={`${youtubeUrl}`} target={'_blank'} rel="noreferrer">
                    <FontAwesomeIcon icon={ faYoutube } className="socialMLog textColor4"/>
                </a>
                <a className="socialMLog textColor4" href={`${insUrl}`} target={'_blank'} rel="noreferrer">
                    <FontAwesomeIcon icon={ faInstagram } className="socialMLog textColor4"/>
                </a>
                <a className="socialMLog textColor4" href={`${linkedInUrl}`} target={'_blank'} rel="noreferrer">
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
                <a className="socialMLog textColor4" href={`${youtubeUrl}`} target={'_blank'} rel="noreferrer">
                    <FontAwesomeIcon icon={ faYoutube } className="socialMLog textColor4"/>
                </a>
                <a className="socialMLog textColor4" href={`${insUrl}`} target={'_blank'} rel="noreferrer">
                    <FontAwesomeIcon icon={ faInstagram } className="socialMLog textColor4"/>
                </a>
                <a className="socialMLog textColor4" href={`${linkedInUrl}`} target={'_blank'} rel="noreferrer">
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