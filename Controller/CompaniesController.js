const CompaniesDAO = require('../DAO/CompaniesDAO');

class CompaniesController {
    
    constructor(application, connection){
        this.companiesDAO = new CompaniesDAO(connection);
        this.application = application;
    }

    setRoutes(){
        console.log("CompaniesController setroutes");
        this.setMainRoute();
        this.setRouteCreatingCompany();
    }

    setMainRoute(){
        this.application.get('/', (req,res) =>{
            console.log("main")
            res.send('sdfsd');
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