const DBConnection = require('./DBConnection');

const dataBaseConn = new DBConnection();
dataBaseConn.createDBConnection()
.then(connection=>{
    dropTables(connection);
});


function dropTables(connection) {
    dropCompaniesTable(connection);
    dropUsersTable(connection);
}

function dropUsersTable(connection){
    let sql = `DROP TABLE IF EXISTS users;`;
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("users Table dropped");
    });
    
}

function dropCompaniesTable(connection){
    let sql = `DROP TABLE IF EXISTS companies;`;
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("companies Table dropped");
    });
    
}