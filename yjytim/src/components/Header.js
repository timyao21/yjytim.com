// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
// css
import './css/header.css';
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
                <p class="d-inline-block align-text-top" style={{ fontSize: "1.4rem" }}>Junyu (Tim) Yao</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className="navbarButton">Home</Nav.Link>
                    <Nav.Link href="#link" className="navbarButton">Projects</Nav.Link>
                    <Nav.Link href="#link1" className="navbarButton">Others</Nav.Link>
                    <NavDropdown title="" id="basic-nav-dropdown" className="navbarButton">
                        <NavDropdown.Item href="#action/3.1">
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