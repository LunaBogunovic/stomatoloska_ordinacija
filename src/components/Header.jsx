import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
    return (
        <header>
            {/*bg="primary" daje plavu boju, variant="dark" beli tekst */}
            <Navbar bg="primary" variant="dark" expand="md" collapseOnSelect>
                <Container>
                    {/* LinkContainer omogućava da klik na naziv vodi na početnu bez osvežavanja stranice */}
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <span className="fw-bold">STOMATOLOŠKA ORDINACIJA</span>
                        </Navbar.Brand>
                    </LinkContainer>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            
                            <LinkContainer to='/usluge'>
                                <Nav.Link>Usluge</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/zakazivanje'>
                                <Nav.Link>Zakaži termin</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/prijava'>
                                <Nav.Link>Prijava</Nav.Link>
                            </LinkContainer>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;