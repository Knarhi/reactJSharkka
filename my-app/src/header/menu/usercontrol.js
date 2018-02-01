// Component includes links to login and registration. 
// TÄMÄ ON TÄLLÄ HETKELLÄ TARPEETONS

import React, { Component } from 'react';

import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';

export class UserControl extends Component{
    
    
    render(){
        
        return <Nav pullRight>
            <NavItem eventKey={4} href="#">Login</NavItem>
            <NavItem eventKey={5} href="#">Register</NavItem>
        </Nav>
        
    }
    
}