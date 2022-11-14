import React from 'react'
import style from './Navbar.module.css'
import { Container, Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Navbarmade() {
    return (
        <div className={style.navbarmain}>
            <Navbar expand="lg" className={style.navbarmain}>
                <Container fluid>
                    <Link to="/" className={style.logo}>MereHumsafar.com</Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className={style.navigator}>
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Link to="/" className={style.navigate}>Home</Link>
                            <Link to="/ContactUs" className={style.navigate}>Contact Us</Link>
                            <Link to="/Aboutus" className={style.navigate}>About Us</Link>
                            <Link to="/RegisterationForm" className={style.navigate}>Register Yourself</Link>
                        </Nav>
                       <Link to="/logIn"><Button className={style.loginbutton} variant="success">LogIn</Button></Link> 
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default Navbarmade