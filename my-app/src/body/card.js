//Component produces single card from JSON -object


import React, { Component } from 'react';

import { Col } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import { Row } from 'react-bootstrap';

import { Panel } from 'react-bootstrap';

import Flexbox from 'flexbox-react';

export class Card extends Component{

    // this.props.info == 1kpl json objekti. 
    
    /*
    classify(classID){ // "if 1 return 'kesätyö'"
    */
    render(){
        
        const data = this.props.info;
        let jobtype = "";
        
         if (data.jobtype === "1") {
            jobtype = "diplomityö";
        } else if (data.jobtype === "2") {
            jobtype = "kandityö";
        } else if (data.jobtype === "3") {
            jobtype = "projekti";
        } else if (data.jobtype === "4") {
            jobtype = "Työ";
        } else if (data.jobtype === "5") {
            jobtype = "osa-aikatyö";
        } else if (data.jobtype === "6") {
            jobtype = "kesätyö";
        } else if (data.jobtype === "7") {
            jobtype = "muu";
        }
        
        
        
        return <Col md={4} xs={12} sm={6} className="card">
            <Row className="show-grid">
                <Flexbox flexDirection="row" className="otsikko" >
                
                    <Flexbox flexDirection="column" className="firmAndName">
                        <h1>{data.jobname}<br/><small>{data.firm}</small>
                        </h1>
                    </Flexbox>
                    <Flexbox flexDirection="column" className="jobType" id={"jobtype"+data.jobtype}>
                        <b className="jobTypeText">{jobtype}</b>
                        <b className="jobDeadline">Hae viimeistään: {data.applydate}</b>
                    </Flexbox>
                    
                </Flexbox>
                
            </Row> 
            
            <Row className="show-grid">
                <Col className="ingress" md={12}><p><i>{data.jobdesc.substring(0,30) + "..."}</i></p></Col>
            </Row>
            
            <Row className="show-grid">
                
                <Col className="jobDescription" md={12}>
                    <Accordion>
                        <Panel header="Lisätiedot" eventKey="1">
                            <div>{data.jobdesc}</div>
                            <div><p>Sposti: {data.email} Sijainti: {data.location}</p></div>
                            <div><p>Palkkaus: {data.salary}</p> </div>
                            <div>Hae viimeistään: {data.applydate}</div>
                            <div>Työ Alkaa: {data.jobstart}</div>
                            <div>Työ päättyy: {data.jobend}</div>
                        </Panel>
                    </Accordion>
                </Col>  
            </Row>
            
        </Col>
        
        
    }
}