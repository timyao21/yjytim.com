// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col, Container, Nav, NavDropdown} from 'react-bootstrap';
// css
import './css/headerFooter.css';
import '../css/style.css';
// brand icon with fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
//  profileimage and thw logo image
import logoImage from '../image/logoImage.png'

const emailAddress = 'yjy197@outlook.com';

function Footer() {
  return (
    <div className="backgroundcolor1 text-center footer d-flex align-items-center justify-content-center">
        <Container>
            <Row>
                <Col xs={12} md={{ span: 4, order: 'second'}}>
                    <h3 className='PoppinsFont'>"Stay hungry, stay foolish."</h3>
                    <h3> — Steve Jobs</h3>
                </Col>            
                <Col xs={6} md={{ span: 4, order: 'first' }}>
                    <div>
                        <a className='linkHover' href="/home"><p>Home</p></a>
                        <a className='linkHover' href="/work"><p>Work</p></a>
                        <a className='linkHover' href={`mailto:${emailAddress}`}><p>Contact Me</p></a>
                    </div>
                </Col>
                <Col xs={6} md={{ span: 4,order: 'last',}}>
                    <div>
                        <a className="socialMLog linkHover" href='https://www.youtube.com/channel/UC9kCc8BtgMi9NnovEoh5PzQ' target={'_blank'} rel="noreferrer">
                            <FontAwesomeIcon icon={ faYoutube } className="socialMLogo footerIcon fa-xl"/>
                        </a>
                        <a className="socialMLog linkHover" href='https://www.instagram.com/yjytimmm_21?igsh=cmh2MjlxcTNuMmY0&utm_source=qr' target={'_blank'} rel="noreferrer">
                            <FontAwesomeIcon icon={ faInstagram } className="socialMLogo footerIcon fa-xl"/>
                        </a>
                        <a className="socialMLog linkHover" href='https://www.linkedin.com/in/junyuyao-tim/' target={'_blank'} rel="noreferrer">
                            <FontAwesomeIcon icon={ faLinkedinIn } className="socialMLogo footerIcon fa-xl"/>   
                        </a>                 
                    </div>

                </Col>
            </Row>
            <p className="copyright">© 2023 Junyu Yao (Tim)</p>
        </Container>        
    </div>

  );
}

export default Footer;