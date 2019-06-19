import React, { Component } from 'react'


class LoginPage extends Component{

    constructor(props){
        super();
        this.companyFetcher = props.companyFetcher;
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const data = new FormData(e.target);
        this.companyFetcher.sendLoginData(this.stringifyFormData(data))
        .then(result=>{
            alert(JSON.stringify(result));
        })
        .catch(err=>{
            console.log(err)
        })
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
            <h1>Login Page</h1>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="login">Enter login</label>
                <input id="login" name="login" type="text" />
                <br/><br/>
                <label htmlFor="password">Enter your password</label>
                <input id="password" name="password" type="password" />
                <br/><br/>
                <button>Send data!</button>
            </form>
            <br/>
        </div>
        )
    }
}

export default LoginPage;