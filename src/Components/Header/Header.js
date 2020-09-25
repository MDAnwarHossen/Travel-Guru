import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../travel-guru/Logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Link   to="/">
                <img
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"/>


            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Form inline>
                    <FormControl type="text" placeholder="Search Your Destination" className="mr-sm-2" />
                    <Button variant="warning"><FontAwesomeIcon icon={faSearchLocation} /></Button>
                    
                </Form>
                <Nav className="main-menu ml-auto">
                    <Link to="/news">News</Link>
                    <Link to="/destination/1">Destination</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login"><Button className='w-100' variant='warning'>Login</Button></Link>
                    
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;