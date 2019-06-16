const express = require('express');
const CompaniesController = require('./Controller/CompaniesController');
const UserController = require('./Controller/UserController');
const DBConnection = require('./DAO/DB init/DBConnection');

const application = express();
const port = process.env.PORT || 6000;

const dBConnection = new DBConnection();

dBConnection.createDBConnection().then(connection =>{
    if (!connection) process.exit();
    const userController = new UserController(application, connection);
    const companiesController = new CompaniesController(application, connection);
    userController.setRoutes();
    companiesController.setRoutes();
    application.listen(port, () => console.log(`Server listening on port ${port}`));
});

