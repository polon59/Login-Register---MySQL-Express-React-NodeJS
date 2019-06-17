import React, { Component } from 'react';
import LoadingSpinner from '../common/loadingSpinner';



class RegisterPage extends Component{

    constructor(props){
        super();
        this.companyFetcher = props.companyFetcher;
        this.state = {
            dataSubmited : null,
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        const data = new FormData(e.target);
        this.companyFetcher.sendNewCompanyData(this.stringifyFormData(data))
        .then((result)=>{
            let dataSubmited;
            this.setState({
                dataSubmited : result
            });
        }).catch(err =>{
            this.setState({
                dataSubmited : 'ERROR'
            });
        });

    }

    stringifyFormData = (fd) => {
        const data = {};
          for (let key of fd.keys()) {
            data[key] = fd.get(key);
        }
        return JSON.stringify(data, null, 2);
      }

    renderSubmissionInfo(){
        const dataSubmited = this.state.dataSubmited;
        console.log(dataSubmited)
        if (!dataSubmited) return "nic";
        else if (dataSubmited === "OK") return (<h4>Account created!</h4>);
        else if (dataSubmited === "ERROR") return (<h4>Server error</h4>)
        return(<h4>This login is already in use.</h4>);
    }

    render(){
        return(
            <div>
                <h1>Register Page</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="login">Enter login</label>
                    <input id="login" name="login" type="text" />
                    <br/><br/>
                    <label htmlFor="password">Enter your password</label>
                    <input id="password" name="password" type="password" />
                    <br/><br/>
                    <label htmlFor="companyName">Enter your company name</label>
                    <input id="companyName" name="companyName" type="text" />
                    <br/><br/>
                    <button>Send data!</button>
                </form>
                <br/>
                {this.renderSubmissionInfo()}
            </div>
        )
    }
}

export default RegisterPage;