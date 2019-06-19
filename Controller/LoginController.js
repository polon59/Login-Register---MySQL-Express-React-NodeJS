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
        this.application.post('/login', (req,res) =>{
            this.companiesDAO.checkLoginParameters(req)
            .then((result)=>{
                console.log(result);
                res.send(result);
            })
            .catch(err => {
                console.log(err);
                res.send(err);
            });
        });
    }
}

module.exports = LoginController;