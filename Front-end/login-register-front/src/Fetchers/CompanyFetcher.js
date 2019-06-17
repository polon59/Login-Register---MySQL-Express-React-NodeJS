
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
}

export default CompanyFetcher;