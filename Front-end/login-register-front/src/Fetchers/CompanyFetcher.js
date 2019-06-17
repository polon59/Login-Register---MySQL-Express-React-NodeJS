
class CompanyFetcher{

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


    sendNewCompanyData(data){
        return fetch('http://localhost:8000/addCompany', {
            method: "PUT",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: data
          })
          .then((res)=>{
              const {status} = res;
            if (status === 200) return "OK";
            else if (status === 409) return 'badLogin';
            return "ERROR"
          })
          .catch(error => {
            console.log(error);
            return "ERROR";
          });
    }


    deleteCompany(companyId){
        return fetch('http://localhost:8000/deleteCompany', {
            method: "DELETE",
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: companyId
          })
          .then((res)=>{
              const {status} = res;
            if (status === 200) return "OK";
            return "ERROR"
          })
          .catch(error => {
            console.log(error);
            return "ERROR";
          });
    }
}




export default CompanyFetcher;