import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';


class LoginPage extends Component{

    constructor(props){
        super();
        this.props = props;
        this.companyFetcher = props.companyFetcher;
        this.state = {
            authenticated : null
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const data = new FormData(e.target);
        this.companyFetcher.sendLoginData(this.stringifyFormData(data))
        .then(result=>{
            alert(result);
            this.handleLoginStatus(result);
        })
        .catch(err=>{
            console.log(err)
        })
    }

    handleLoginStatus = (status) =>{
        const {history} = this.props;
        switch (status) {
            case 200:
                alert("OK")
                this.props.authenticate();
                history.push('/protected');
                break;
            case 401:
                alert("AUTH FAIL")
                this.setState({
                    authenticated : false
                })
                break;
            default:
                alert("DEFAULT")
                this.setState({
                    authenticated : "ERR"
                })
                break;
        }
    }

    stringifyFormData = (fd) => {
        const data = {};
          for (let key of fd.keys()) {
            data[key] = fd.get(key);
        }
        return JSON.stringify(data, null, 2);
      }

    render(){
        if (!this.state.authenticated){
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
}

export default withRouter(LoginPage);