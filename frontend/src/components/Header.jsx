import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo_ordinacija.png';
import { FaCalendarPlus, FaUser } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark" expand="md" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand className="d-flex align-items-center">
                            <img 
                                src={logo} 
                                alt="Logo Ordinacije" 
                                width="40" 
                                height="40" 
                                className="d-inline-block align-top me-2" 
                            />
                            <div>
                                <span className="fw-bold">OSMEH & ZDRAVLJE</span>
                                <br />
                                <small style={{ fontSize: '0.65rem', display: 'block', marginTop: '-5px' }}>
                                    STOMATOLOŠKA ORDINACIJA
                                </small>
                            </div>
                        </Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to='/zakazivanje'>
                                <Nav.Link>
                                    <FaCalendarPlus className="me-1" /> Zakazivanje
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/karton'>
                                <Nav.Link>
                                    <FaUser className="me-1" /> Moj karton
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/login'>
                                <Nav.Link>
                                    <FaUser className="me-1" /> Prijava
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;