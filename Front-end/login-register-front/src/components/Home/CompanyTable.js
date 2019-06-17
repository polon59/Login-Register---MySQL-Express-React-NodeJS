import React from 'react';

const CompanyTable = (props) =>{
    const companiesTableBody = props.companies.map((company, index)=>{
        return (
            <tr key = {index}>
                <td>{index+1}</td>
                <td>{company.id}</td>
                <td>{company.companyName}</td>
                <td>{company.login}</td>
                <td>{company.password}</td>
            </tr>
        )
    })

    return (
        <table className="companiesTable">
        <thead>
            <tr>
                <th>no.</th>
                <th>ID in DB</th>
                <th>company name</th>
                <th>login</th>
                <th>password</th>
            </tr>
        </thead>
        <tbody>
        {companiesTableBody}
        </tbody>
    </table>
    )
}

export default CompanyTable;