import React, { Component } from 'react';

import './App.css';
//import {CardList} from './body/cardlist';
import {Header} from './header';
import {Body} from './body';
import {Grid} from 'react-bootstrap';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Grid>
          <Body /> 
        </Grid>
      </div>
    );
  }
}

export default App;
