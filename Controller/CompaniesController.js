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
        this.application.put('/addCompany', (req,res,next) =>{

            this.companiesDAO.addNewCompany(req)
            .then(()=>{
                console.log("added new company" + req.body)
                res.status(200).send();
                
            })
            .catch(err => {
                console.log(err)
                err.code == 'ER_DUP_ENTRY' ? res.status(409).send() : res.status(500).send();
                next();
            });
        });
    }
}

module.exports = CompaniesController;