// Component that includes name and logo of the organization maintaining the site and logo. 

import React, { Component } from 'react';
import Logo from '../img/uusi_cluster.jpg';

import { Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

export class Banner extends Component{
    
    
    render(){
        
        return <Row className="show-grid">
            <Col xs={6} md={4}>
                <Image src={Logo} responsive />
            </Col>
            <Col xs={6} md={4}>
                <h1 className="organization">CLUSTER RY </h1><h2 className="pagetitle">PROJEKTIPANKKI</h2>
            </Col>
            
        </Row>;
        
    }
    
}