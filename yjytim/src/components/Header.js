import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';

import './css/header.css';

import logoImage from '../image/logoImage.png'


function BasicExample() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src={logoImage}
                className="d-inline-block align-top-right logoImage"
                />{'   '}
                <p class="d-inline-block align-text-top" style={{ fontSize: "1.4rem" }}>Junyu (Tim) Yao</p>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
    </Navbar>
  );
}

export default BasicExample;