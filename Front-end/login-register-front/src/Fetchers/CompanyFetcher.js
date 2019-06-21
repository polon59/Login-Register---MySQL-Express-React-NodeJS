
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
            body: JSON.stringify({id :companyId})
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


    fetchProtectedData(){
      return fetch('http://localhost:8000/protected',{
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          credentials: 'include'
        }
      })
      .then(response => response.text())
      .then(data => {return data;})
    }


    sendLoginData(data){
      console.log(data)
      return fetch('http://localhost:8000/login', {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          credentials: 'include'
        },
        body: data
      })
      .then((res)=>{
        if (res.status === 401){
          return 401;
        }
        else if (res.status === 200){
          return 200;
        }
        else{
          return 500;
        }
      })
      .catch(error => {
        console.log(error);
        return "Internal server error";
      });
    }
}




export default CompanyFetcher;