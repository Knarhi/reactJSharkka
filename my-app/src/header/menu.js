// Container for navbar and usercontrol. 

import React, { Component } from 'react';

import {NavBar} from './menu/navbar';


export class Menu extends Component{
    
    
    render(){
        
        return <div className="menu">
            <NavBar />
        </div>
        
    }
    
}