const express = require('express');
const bodyParser = require('body-parser');
const CompaniesController = require('./Controller/CompaniesController');
const UserController = require('./Controller/UserController');
const LoginController = require('./Controller/LoginController');
const DBConnection = require('./DAO/DB init/DBConnection');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const application = express();
const port = process.env.PORT || 8000;
application.use(bodyParser.json());
application.use(bodyParser.urlencoded({extended:false}));
application.use(cookieParser());

// application.use(session({
//     secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));

const dBConnection = new DBConnection();

dBConnection.createDBConnection().then(connection =>{
    if (!connection) process.exit();
    allowCORS(application);
    const userController = new UserController(application, connection);
    const companiesController = new CompaniesController(application, connection);
    const loginController = new LoginController(application, connection);
    userController.setRoutes();
    loginController.setRoutes();
    companiesController.setRoutes();
    application.listen(port, () => console.log(`Server listening on port ${port}`));
});


function allowCORS(application){
    application.all('/*', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", 'http://localhost:3000');
        res.header('Access-Control-Allow-Credentials', true);
        res.header('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT,DELETE');
        res.header('Access-Control-Allow-Headers', 'Content-Type,Accept');
        next();
      });
}

