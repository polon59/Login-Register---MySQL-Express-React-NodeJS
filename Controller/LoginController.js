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
                if (result.length < 1) {
                    res.status(401).send();
                    console.log("authentication failed");
                    return;
                }
                req.session.loggedin = true;
                req.session.userId = result[0].id;
                console.log(`LOGGED USER ID=${result[0].id}`);
                res.status(200).send({userID : result[0].id});
            })
            .catch(err => {
                console.log(err);
                res.status(500).send();
            });
        });
    }
}

module.exports = LoginController;