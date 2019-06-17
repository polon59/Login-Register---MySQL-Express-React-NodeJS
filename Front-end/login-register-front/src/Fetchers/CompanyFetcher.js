
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
              console.log(res.status + "STATUS")

            if (data === 'created company') return "OK";
            else if (data === 'loginExists') return 'badLogin';
            return "ERR"
          })
          .catch(error => {
            console.log(error);
            return "ERROR";
          });
    }
}

export default CompanyFetcher;