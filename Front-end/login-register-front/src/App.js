import React, { Component } from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import CompaniesMenu from './components/Home/CompaniesMenu';
import CompanyFetcher from './Fetchers/CompanyFetcher';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Register/RegisterPage';
import Navbar from './components/common/navbar';

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
          <LoginPage companyFetcher ={this.companyFetcher}/>}
      />
      <Route 
        path="/register"
        render={(props) => 
          <RegisterPage companyFetcher ={this.companyFetcher}/>}
      />
    </div>
  </Router>
    )
  }
}


export default App;
