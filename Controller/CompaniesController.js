
class CompaniesController {
    
    constructor(application, connection){
        this.application = application;
        this.connection = connection;
    }


    setRoutes(){
        console.log("CompaniesController setroutes");
    }
}

module.exports = CompaniesController;