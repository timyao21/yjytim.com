// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
// css
import './css/headerFooter.css';
import '../css/style.css';
// brand icon with fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faGithub} from "@fortawesome/free-brands-svg-icons"
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'
import { AiOutlineBilibili } from "react-icons/ai";
//  profileimage and thw logo image
import logoImage from '../image/logoImage.png'
import React, { useEffect, useState, useLayoutEffect, useRef} from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { Typography } from '@mui/material';

function BasicExample() {
    const [hideOnScroll, setHideOnScroll] = useState(false)
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    useScrollPosition(({ prevPos, currPos }) => {
        const isShow = currPos.y < prevPos.y
        if (isShow !== hideOnScroll) setHideOnScroll(isShow)
      }, [hideOnScroll])
    
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

const emailAddress = 'yjy197@outlook.com';

return (
    <Navbar className={`backgroundcolor1 PoppinsFont nav  ${hideOnScroll && 'navhide'}`}  variant="dark" fixed="top" expand="lg">
        <Container>
            <Navbar.Brand href="/">
                <img
                alt=""
                src={logoImage}
                className="d-inline-block align-top-right logoImage"
                />{' '}
                <p class="d-inline-block align-text-top textColor1" style={{ fontSize: "1.4rem" }}>Junyu Yao</p>
            </Navbar.Brand>
            <Nav>
                <Nav.Link href="/" className="navbarButton textColor1 mx-auto">Home</Nav.Link>
                <Nav.Link href="https://github.com/biubiubiupiu21" className="navbarButton textColor1 mx-auto" target={'_blank'}>Work</Nav.Link>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic" className='btn-dark backgroundcolor1 textColor1 mx-auto' style={{ outline: "none", boxShadow: 'none'}}>
                        More
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <NavDropdown.Item href="https://www.instagram.com/yjytim.jpg?igsh=cGZnZnBpZGIwY2xl&utm_source=qr" target="_blank">
                            <FontAwesomeIcon icon={ faGithub } className="socialMLogo"/> Github
                        </NavDropdown.Item>  
                        <NavDropdown.Item href="https://www.youtube.com/channel/UC9kCc8BtgMi9NnovEoh5PzQ" target="_blank">
                            <FontAwesomeIcon icon={ faYoutube } className="socialMLogo"/> YouTube
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://space.bilibili.com/626701417?spm_id_from=333.1007.0.0" target="_blank">
                            <AiOutlineBilibili /> Bilibili
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://www.instagram.com/yjytimmm_21?igsh=cmh2MjlxcTNuMmY0&utm_source=qr" target="_blank">
                            <FontAwesomeIcon icon={ faInstagram } className="socialMLogo"/> Instagram
                        </NavDropdown.Item>
                        <NavDropdown.Item href="https://www.instagram.com/yjytim.jpg?igsh=cGZnZnBpZGIwY2xl&utm_source=qr" target="_blank">
                            <FontAwesomeIcon icon={ faInstagram } className="socialMLogo"/> Photography
                        </NavDropdown.Item>             

                        <NavDropdown.Divider/>
                        <NavDropdown.Item href={`mailto:${emailAddress}`}>
                            Contact me
                        </NavDropdown.Item>
                    </Dropdown.Menu>

                </Dropdown>
            </Nav>

        </Container>
    </Navbar>
  );
}

export default BasicExample;