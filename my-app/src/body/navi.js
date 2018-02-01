// Component contains navbar for selecting different types of cards. It's distinct from user control. 

import React, { Component } from 'react';

//import {UserControl} from './usercontrol';


import { Nav } from 'react-bootstrap';
import { NavItem } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Filter } from './filter';


export class Navi extends Component{
     constructor(props){
        super(props);    
        this.state = {
            tab: 0
        }
        
        this.showMain = this.showMain.bind(this);
        this.showMasters = this.showMasters.bind(this);
        this.showBachelor = this.showBachelor.bind(this);
        this.showProject = this.showProject.bind(this);
        this.showWork = this.showWork.bind(this);
        this.showOther = this.showOther.bind(this);
        
        this.handleShow = this.handleShow.bind(this);
		this.handleClose = this.handleClose.bind(this);
        
        this.state = { showModal: false };
        
     }
    
    showMain() {
        this.setState({tab:0});
    }
    
    showMasters() {
        this.setState({tab:1});
    }
    
    showBachelor() {
        this.setState({tab:2});
    }
    
    showProject() {
        this.setState({tab:3});
    }
    
    showWork() {
        this.setState({tab:4});
    }
    
    showOther() {
        this.setState({tab:5});
    }
    
    handleClose() {
		this.setState({ showModal: false });
	}

	handleShow() {
		this.setState({ showModal: true });
	}
    
    modalRender(){
        return <Modal show={this.state.showModal} onHide={this.handleClose} className="aboutModal">
			<Modal.Header closeButton>
				<Modal.Title>Tietoa sivusta</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h4>Tekijät</h4>
				<p>
					Tämän sivun ovat tehneet Kuisma Närhi ja Olli Kousa. Se on React CodeCampin harjoitustyö. 
				</p>

				<h4>Sivuston tarkoitus</h4>
				<p>
					Cluster ry:n yhteistyöyrityksille ja opiskelijoille tehty palvelu, jonne lisätään työpaikkoja, oppariaiheita, sekä satunnaisia projekteja jotka on kohdistettu tietotekniikan opiskelijoille.
				</p>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={this.handleClose}>Close</Button>
			</Modal.Footer>
		</Modal>;
        
    }
    
    
    render(){
        return <Row className="show-grid">
            <div className="menu">
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a onClick={this.showMain}>Etusivu</a>
                        </Navbar.Brand>
                            
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem onClick={this.showMasters}>Diplomityöt</NavItem>
                            <NavItem onClick={this.showBachelor}>Kandityöt</NavItem>
                            <NavItem onClick={this.showProject}>Projektit</NavItem>
                            <NavItem onClick={this.showWork}>Työt</NavItem>
                            <NavItem onClick={this.showOther}>Muut</NavItem>
                            
                        </Nav>
                        <Nav pullRight>
                            <NavItem onClick={this.handleShow}>About</NavItem>   
                            <NavItem eventKey={7} href=".../login.php">Login</NavItem>
                            <NavItem eventKey={8} href=".../register.php">Register</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {this.state.showModal && this.modalRender()}
                <Filter tab={this.state.tab} />
            </div>
        </Row>
        
    }
    
}