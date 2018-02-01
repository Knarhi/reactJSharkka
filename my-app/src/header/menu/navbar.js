// Component contains navbar for selecting different types of cards. It's distinct from user control. 

import React, { Component } from 'react';

//import {UserControl} from './usercontrol';

import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';


export class NavBar extends Component{
    
    
    render(){
        
        return <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">Etusivu</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                
                <Nav pullRight>
                    <NavItem eventKey={4} href=".../login.php">Login</NavItem>
                    <NavItem eventKey={5} href=".../register.php">Register</NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
    }
    
}