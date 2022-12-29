// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
// css
import './css/headerFooter.css';
import './css/style.css';
// brand icon with fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, } from "@fortawesome/free-brands-svg-icons"
//  profileimage and thw logo image
import logoImage from '../image/logoImage.png'

function BasicExample() {
  return (
    <Navbar className="backgroundcolor1" variant="dark" fixed="top" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src={logoImage}
                className="d-inline-block align-top-right logoImage"
                />{' '}
                <p class="d-inline-block align-text-top textColor1" style={{ fontSize: "1.4rem" }}>Junyu Yao</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className="navbarButton textColor1">Home</Nav.Link>
                    <Nav.Link href="#link" className="navbarButton textColor1">Work</Nav.Link>
                    <Nav.Link href="#link1" className="navbarButton textColor1">Others</Nav.Link>
                    <NavDropdown title="" id="basic-nav-dropdown" className="navbarButton textColor1">
                        <NavDropdown.Item 
                            href="https://www.youtube.com/channel/UC9kCc8BtgMi9NnovEoh5PzQ" 
                            target="_blank"
                            >
                            <FontAwesomeIcon icon={ faYoutube } className="socialMLogo"/> YouTube
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">
                            <FontAwesomeIcon icon={ faInstagram } className="socialMLogo"/> Photography
                        </NavDropdown.Item>                        
                        <NavDropdown.Item href="#action/3.2">
                           Bilibili
                        </NavDropdown.Item>

                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.6">
                            Contact me
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
  );
}

export default BasicExample;