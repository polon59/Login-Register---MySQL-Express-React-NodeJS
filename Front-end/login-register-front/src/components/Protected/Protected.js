import React, { Component } from 'react'


class Protected extends Component{

    constructor(props){
        super();
        this.props = props;
        this.companyFetcher = props.companyFetcher;
        this.state = {
            data : null
        }
    }


    componentWillMount(){
        this.companyFetcher.fetchProtectedData().then(data=>{
            this.setState({
                data : data
            });
        })
    }



    render(){
        if (!this.state.data) {
            return(
                <div>
                    <h3>protected page</h3>
                    <h5>loading</h5>
                </div>
            )
        }
        return(
            <div>
                <h3>protected page</h3>
                <h5>{this.state.data}</h5>
            </div>
        )
        }
}

export default Protected;