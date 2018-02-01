// Component contains navbar for selecting different types of cards. It's distinct from user control. 

import React, { Component } from 'react';

import {CardList} from './cardlist';

import { FormGroup } from 'react-bootstrap';

import { ControlLabel } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { HelpBlock } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
          {help && <HelpBlock>{help}</HelpBlock>}
        </FormGroup>
      );
}

export class Filter extends Component{
     constructor(props){
        super(props);    

        this.state = {
            project: true,
            work: true,
            master: true,
            bachelor: true,
            other: true,
            search: ""
        }
            
        
        
        this.setSearch = this.setSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
        
        
        
        
    }
    
    setSearch(evt){
        this.setState({ search: evt.target.value});
    }
    
    returnFilters() {
        let status = [];
        status.push(this.state.project, this.state.work, this.state.master, this.state.bachelor, this.state.other, this.state.search);
        return status;
    }
    
    
    handleChange(event) {
    
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
    }
    
    
    componentWillReceiveProps(nextProps) {
        

        if(nextProps.tab === 0){
            this.setState ( {
                project: true,
                work: true,
                master: true,
                bachelor: true,
                other: true,
                search: ""
            })
        }else if (nextProps.tab === 1){
            this.setState ({
                project: false,
                work: false,
                master: true,
                bachelor: false,
                other: false,
                search: ""
            })
        }else if (nextProps.tab === 2){
            this.setState ({
                project: false,
                work: false,
                master: false,
                bachelor: true,
                other: false,
                search: ""
            })
        }else if (nextProps.tab === 3){
            this.setState ({
                project: true,
                work: false,
                master: false,
                bachelor: false,
                other: false,
                search: ""
            })
        }else if (nextProps.tab === 4){
            this.setState ({
                project: false,
                work: true,
                master: false,
                bachelor: false,
                other: false,
                search: ""
            })
        }else if (nextProps.tab === 5){
            this.setState ({
                project: false,
                work: false,
                master: false,
                bachelor: false,
                other: true,
                search: ""
            })
        }
            
    }
    
    
    render(){
        
        
        
        
        
        return <div>
            <Row className="show-grid">
                <form>
                    <Row className="show-grid">
                        <Col sm={4} smOffset={4} xsOffset={1}>
                            <FieldGroup
                                id="formControlsText"
                                onChange={this.setSearch}
                                value={this.state.search}
                                type="text"
                                placeholder="Enter searchwords"
                            />
                        </Col>
                    </Row>
                    <Row className="show-grid filterCheckBoxs">
                        <Col xs={4} md={2}>
                        <label>
                        <input
                            name="project"
                            type="checkbox"
                            checked={this.state.project}
                            onChange={this.handleChange}>
                        </input>
                        Projektit
                        </label>
                        </Col>
                            {' '}
                        <Col xs={4} md={2}>
                        <label>
                        <input
                            name="work"
                            type="checkbox"
                            checked={this.state.work}
                            onChange={this.handleChange}>
                        </input>
                        Työt
                        </label>
                        </Col>
                            {' '}
                        <Col xs={3} md={2}>
                        <label>
                        <input
                            name="master"
                            type="checkbox"
                            checked={this.state.master}
                            onChange={this.handleChange}>
                        </input>
                        Diplomityöt
                        </label>
                        </Col>
                        {' '}
                        <Col xs={4} md={2}>
                        <label>
                        <input
                            name="bachelor"
                            type="checkbox"
                            checked={this.state.bachelor}
                            onChange={this.handleChange}>
                        </input>
                        Kandityöt
                        </label>
                        </Col>
                        {' '}
                        <Col xs={4} md={2}>
                        <label>
                        <input
                            name="other"
                            type="checkbox"
                            checked={this.state.other}
                            onChange={this.handleChange}>
                        </input>
                        Muut
                        </label>
                        </Col>
                    </Row>
                
                </form>
            </Row>
            
            <CardList filters={this.returnFilters()}/>
        </div>
        // Forms - supported controls
        // Haku (input field)
        // Tyyppi (checkbox)
        // Ajankohta (datepicker) - Oisko tää ihan vaan niin, että jos se sattuu sille välille? Tammi-toukokuulle laitettu työ näkyy jos hakee helmikuulla.
    }
    
}