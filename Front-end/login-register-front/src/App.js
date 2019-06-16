import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';

class App extends React.Component{
  
  constructor(){
    super();
  }

  render(){
    return(
    <Router>
    <div className="App">
      <Navbar/>
      <Route 
        exact path="/" 
        render={(props) => 
          <Home/>
          }
      />
      <Route 
        path="/offer"
        render={(props) => 
          <Offer/>}
      />
      <Route 
        path="/contact" 
        render={(props) => 
          <Contact/>}
      />
    </div>
  </Router>
    )
  }
}


export default App;
