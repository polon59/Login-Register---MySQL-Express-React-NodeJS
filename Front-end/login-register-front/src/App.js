import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import CompaniesMenu from './components/CompaniesMenu';
import CompanyFetcher from './Fetchers/CompanyFetcher';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Navbar from './components/navbar';

class App extends Component{
  
  constructor(){
    super();
    this.companyFetcher = new CompanyFetcher();
    this.state = {};
  }

  render(){
    return(
    <Router>
    <div className="App">
      <Navbar/>
      <Route 
        exact path="/" 
        render={(props) => 
          <CompaniesMenu companyFetcher ={this.companyFetcher}/>
          }
      />
      <Route 
        path="/login"
        render={(props) => 
          <LoginPage/>}
      />
      <Route 
        path="/register"
        render={(props) => 
          <RegisterPage/>}
      />
    </div>
  </Router>
    )
  }
}


export default App;
