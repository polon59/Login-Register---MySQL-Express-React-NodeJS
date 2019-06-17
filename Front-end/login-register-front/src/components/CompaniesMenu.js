import React, { Component } from 'react';
import loadingSpinner from './common/loadingSpinner';
import fetchError from './common/fetchError';


class CompaniesMenu extends Component{

    constructor(props){
        super();
        this.companyFetcher = props.companyFetcher;
        this.state = {
            companies : null
        }
    }

    componentWillMount(){
        this.companyFetcher.fetchCompaniesData()
        .then(result =>{
            this.updateCompaniesList(result);
        })
        .catch((err)=>{
            this.updateCompaniesList("ERR");
        })
    }

    updateCompaniesList =(newValue)=>{
        this.setState({
            companies : newValue
        });
    }

    render(){
        const {companies} = this.state;
        if (!companies){
            return(
                <div>
                    <h1>companies Menu</h1>
                    <loadingSpinner/>
                </div>
            )
        } else if(companies === "ERR"){
            return(
                <div>
                    <h1>companies Menu</h1>
                    <fetchError/>
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