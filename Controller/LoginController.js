const CompaniesDAO = require('../DAO/CompaniesDAO');

class LoginController {
    
    constructor(application, connection){
        this.companiesDAO = new CompaniesDAO(connection);
        this.application = application;
    }

    setRoutes(){
        console.log("LoginController setroutes");
        this.setRouteLogin();
    }

    setRouteLogin(){
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
}

module.exports = LoginController;