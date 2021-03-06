const CompaniesDAO = require('../DAO/CompaniesDAO');
const withAuth = require('./withAuth');

class CompaniesController {
    
    constructor(application, connection){
        this.companiesDAO = new CompaniesDAO(connection);
        this.application = application;
    }

    setRoutes(){
        console.log("CompaniesController setroutes");
        this.setRouteGetAllCompanies();
        this.setRouteCreatingCompany();
        this.setRouteDeleteCompany();
        this.setRouteGetSecretData();
    }

    setRouteGetAllCompanies(){
        this.application.get('/registeredCompanies', (req,res) =>{
            this.companiesDAO.getAllCompanies()
            .then((result)=>{
                res.cookie('cookie', 'monster')
                res.send(result);
            })
            .catch(err => {
                res.send(err);
            });
        });
    }

    setRouteGetSecretData(){
        this.application.get('/protected', withAuth, (req,res,next) =>{
            res.status(200).send({info:"logged in"});
        });
    }

    setRouteDeleteCompany(){
        this.application.delete('/deleteCompany', (req,res) =>{

            this.companiesDAO.deleteCompany(req)
            .then(()=>{
                console.log("deleted company" + req.body.id)
                res.status(200).send();
            })
            .catch(err => {
                console.log(err)
                res.status(500).send();
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