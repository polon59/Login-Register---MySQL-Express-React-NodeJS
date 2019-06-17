import React, { Component } from 'react'


class CompaniesMenu extends React.Component{

    constructor(props){
        super();
        this.state = {
            companies : null
        }
    }

    fetchCompaniesData(){
        return fetch('http://localhost:8000/registeredCompanies',{
            method: "GET",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            }
          })
          .then(response => response.json())
          .then(data => {return data;})
    }

    componentWillMount(){
        this.fetchCompaniesData()
        .then(result =>{
            this.setState({
                companies : result
            });
        })
        .catch((err)=>{
            alert("intercepted")
            this.setState({
                companies : "ERR"
            });
        })
    }

    render(){
        const {companies} = this.state;
        if (!companies){
            return(
                <div>
                    <h1>companies Menu</h1>
                    <p>Loading...</p>
                </div>
            )
        } else if(companies === "ERR"){
            return(
                <div>
                    <h1>companies Menu</h1>
                    <p>Request error. Try again later.</p>
                </div>
            )
        }

        return(
            <div>
                <h1>companies Menu</h1>
                {JSON.stringify(companies)}
            </div>
        )
    }
}

export default CompaniesMenu;