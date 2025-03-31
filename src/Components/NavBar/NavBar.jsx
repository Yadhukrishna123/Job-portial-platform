import React from 'react'
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css"


function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary  ">
            <Container fluid className='p-5 bg-dark '>
                <Navbar className="bg-body-tertiary">
                    <Container>

                        <img
                            src="https://t3.ftcdn.net/jpg/05/61/04/54/360_F_561045496_xfpWwmTnI1xuTA8BPC8QJS867mgXo4RR.jpg"
                            width="35"
                            height="20"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />

                    </Container>
                </Navbar>
                <Navbar.Brand href="#home" className='ms-5 text-light'>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className=' bg-light' />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="text-light">Home</Nav.Link>
                        <Nav.Link href="#link" className="text-light">Link</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar