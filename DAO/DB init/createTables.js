const DBConnection = require('./DBConnection');

const dataBaseConn = new DBConnection();
dataBaseConn.createDBConnection()
.then(connection=>{
    createTables(connection);
});


function createTables(connection) {
    console.log('in create tables')
    createCompaniesTable(connection);
    createUsersTable(connection);
}

function createUsersTable(connection){
    let sql = `CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        companyID INTEGER REFERENCES companies(id),
        login VARCHAR(30) UNIQUE,
        password VARCHAR(30)
    );`;
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("users Table Created");
    });
    
}

function createCompaniesTable(connection){
    let sql = `CREATE TABLE companies (
        id SERIAL PRIMARY KEY,
        login VARCHAR(30) UNIQUE,
        password VARCHAR(30),
        companyName TEXT
    );`;
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("companies Table Created");
    });
    
}