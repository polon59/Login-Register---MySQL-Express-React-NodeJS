import React, { Component } from 'react';
import LoadingSpinner from '../common/loadingSpinner';
import FetchError from '../common/fetchError';


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
                    <LoadingSpinner/>
                </div>
            )
        } else if(companies === "ERR"){
            return(
                <div>
                    <h1>companies Menu</h1>
                    <FetchError/>
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