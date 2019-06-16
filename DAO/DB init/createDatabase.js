const mysql = require('mysql');
const databaseName = "loginRegisterTestDB";

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "mysQLpassword"
});

connection.connect((err)=>{
    if (err) throw err;
    console.log("Connected to MySQL.")
    createDatabase();
})

const createDatabase = ()=>{
    connection.query(`CREATE DATABASE ${databaseName};`, (err, result)=>{
        if (err) throw err;
        console.log(`Database successfuly created (name: ${databaseName}).`)
    })
}