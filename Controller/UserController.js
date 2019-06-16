
class UserController {
    
    constructor(application, connection){
        this.application = application;
        this.connection = connection;
    }


    setRoutes(){
        console.log("UserController setroutes");
    }
}

module.exports = UserController;