import React from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaSyncAlt } from 'react-icons/fa';

import './Header.scss';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <span className='primary-color yamak'>Yamak</span>.ai
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">Marketing</Nav.Link>
                            <Nav.Link href="#pricing">Social Media</Nav.Link>
                            <Nav.Link href="#pricing">Sales Copy</Nav.Link>
                            <Nav.Link href="#pricing">Blogs</Nav.Link>
                            <Nav.Link href="#pricing">Others</Nav.Link>
                            <Nav.Link href="#pricing">
                                <FaSyncAlt /><Badge>3</Badge>
                            </Nav.Link>
                            <Nav.Link href="#pricing">
                                <BsFillPersonFill />
                            </Nav.Link>
                        </Nav>

                        {/* <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;