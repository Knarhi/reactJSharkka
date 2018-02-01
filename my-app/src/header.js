// Container for menu and banner. 
import React, { Component } from 'react';

import {Banner} from './header/banner';
import { Grid } from 'react-bootstrap';



export class Header extends Component{
    
    
    render(){
        
        return <Grid className="header">
            <Banner />
            
            
            
            
        </Grid>
        
    }
    
}