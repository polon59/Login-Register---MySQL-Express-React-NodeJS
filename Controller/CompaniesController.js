const CompaniesDAO = require('../DAO/CompaniesDAO');

class CompaniesController {
    
    constructor(application, connection){
        this.companiesDAO = new CompaniesDAO(connection);
        this.application = application;
    }

    setRoutes(){
        console.log("CompaniesController setroutes");
        this.setRouteGetAllCompanies();
        this.setRouteCreatingCompany();
    }

    setRouteGetAllCompanies(){
        this.application.get('/registeredCompanies', (req,res) =>{
            this.companiesDAO.getAllCompanies()
            .then((result)=>{
                res.send(result);
            })
            .catch(err => {
                res.send(err);
            });
        });
    }

    setRouteCreatingCompany(){
        this.application.put('/addCompany', (req,res) =>{

            this.companiesDAO.addNewCompany(req)
            .then(()=>{
                res.send("created company");
            })
            .catch(err => {
                res.send(err);
            });
        });
    }
}

module.exports = CompaniesController;