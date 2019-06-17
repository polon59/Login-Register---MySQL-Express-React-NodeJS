import React, { Component } from 'react';
import LoadingSpinner from '../common/loadingSpinner';
import FetchError from '../common/fetchError';
import CompanyTable from './CompanyTable';


class CompaniesMenu extends Component{

    constructor(props){
        super();
        this.companyFetcher = props.companyFetcher;
        this.state = {
            companies : null
        }
    }

    componentWillMount(){
        this.updateCompaniesList();
    }

    updateCompaniesList =()=>{
        this.companyFetcher.fetchCompaniesData()
        .then(result =>{
            this.setState({
                companies : result
            });
        })
        .catch((err)=>{
            this.setState({
                companies : "ERR"
            });
        })
    }

    deleteCompany = (id) =>{
        this.companyFetcher.deleteCompany(id).then(()=>{
            this.updateCompaniesList();
        })
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
                <CompanyTable companies = {companies} deleteCompany={this.deleteCompany}/>
                {JSON.stringify(companies)}
            </div>
        )
    }
}

export default CompaniesMenu;