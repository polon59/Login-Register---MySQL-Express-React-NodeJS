import React, { Component } from 'react';
import LoadingSpinner from '../common/loadingSpinner';
import 


class RegisterPage extends Component{

    constructor(props){
        super();
        this.companyFetcher = props.companyFetcher;
        this.state = {
            dataSubmited : false,
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const data = new FormData(e.target);
        console.log(this.stringifyFormData(data));
    }

    stringifyFormData = (fd) => {
        const data = {};
          for (let key of fd.keys()) {
            data[key] = fd.get(key);
        }
        return JSON.stringify(data, null, 2);
      }

    render(){
        return(
            <div>
                <h1>Register Page</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="login">Enter login</label>
                    <input id="login" name="login" type="text" />

                    <label htmlFor="password">Enter your password</label>
                    <input id="password" name="password" type="password" />

                    <label htmlFor="companyName">Enter your company name</label>
                    <input id="companyName" name="companyName" type="text" />

                    <button>Send data!</button>
                </form>
            </div>
        )
    }
}

export default RegisterPage;