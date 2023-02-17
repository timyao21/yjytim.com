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

function Footer() {
  return (
    <div className="backgroundcolor1 text-center">
        <Container>
            <Row>
                <Col xs={12} md={{ span: 4,order: 'second'}}>
                    <h3>"Stay hungry, stay foolish."</h3>
                    <h3> — Steve Jobs</h3>
                </Col>            
                <Col xs={6} md={{ span: 4,order: 'first' }}>
                    <div>
                        <p>Home</p>
                        <p>Work</p>
                        <p>Others</p>
                    </div>
                </Col>
                <Col xs={6} md={{ span: 4,order: 'last',}}>
                    <div>
                        <FontAwesomeIcon icon={ faYoutube } className="socialMLogo"/>
                        <FontAwesomeIcon icon={ faInstagram } className="socialMLogo"/>
                        <FontAwesomeIcon icon={ faLinkedinIn } className="socialMLogo"/>                    
                    </div>

                </Col>
            </Row>
            <p className="copyright">© 2023 Junyu Yao (Tim)</p>
        </Container>        
    </div>

  );
}

export default Footer;