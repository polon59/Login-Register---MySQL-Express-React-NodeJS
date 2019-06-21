const CompaniesDAO = require('../DAO/CompaniesDAO');
const jwt = require('jsonwebtoken');

class LoginController {
    
    constructor(application, connection){
        this.companiesDAO = new CompaniesDAO(connection);
        this.application = application;
    }

    setRoutes(){
        this.setRouteLogin();
    }

    setRouteLogin(){
        this.application.post('/login', (request,res) =>{
            this.companiesDAO.checkLoginParameters(request)
            .then((result)=>{
                if (result.length < 1) {
                    res.status(401).send();
                    console.log("authentication failed");
                    return;
                }

                const secret = 'secret';
                const userId = result[0].id;

                const token = jwt.sign({
                    data: userId
                  }, secret, { expiresIn: '1h' });

                res.cookie('token', token, { httpOnly: true })
                .sendStatus(200);
              }
            )
            .catch(err => {
                console.log(err);
                res.status(500).send();
            });
        });
    }
}

module.exports = LoginController;