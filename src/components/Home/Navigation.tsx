import React, {Component} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" className='header'>
                <Container>
                    <Navbar.Brand href=""><Link to={"/"}>Shop</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link role={"button"} className={"nav-link"} to={"/profile"}>Profile</Link>
                            <Link role={"button"} className={"nav-link"} to={"/cart"}>Cart</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}
