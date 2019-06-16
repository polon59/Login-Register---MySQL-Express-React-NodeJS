class DbConnection{
    
      constructor(){
        this.mysql = require('mysql');
        this.host = "localhost";
        this.user = "root";
        this.password = "mysQLpassword";
        this.database = "loginRegisterTestDB";
      }
    
      createDBConnection(){
        const {host,user,password,database} = this;
        let connection = this.mysql.createConnection({
          host: host,
          user: user,
          password: password,
          database: database
        });
        return this.isConnectionSuccessful(connection);
      }
  
  
      isConnectionSuccessful(connection){
        return new Promise((resolve,reject)=>{
          connection.connect((error)=>{
            if (error){
              console.log(`Error (CHECK CONNECTION) ${error.message}`)
              resolve(null);
            }else{
              console.log("Connection with database established");
              resolve(connection);
            }
          })
        })
      }
    
    }
    
    module.exports = DbConnection;
  