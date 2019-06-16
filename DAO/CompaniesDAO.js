
class CompaniesDAO {
    
    constructor(connection){
        this.connection = connection;
    }

    addNewCompany(request){
        return new Promise((resolve,reject)=>{
            const {login,password,name} = request.body;
            const sql = `INSERT INTO companies (login, password, companyName)
            VALUES ('${login}', '${password}', '${name}');`

            this.connection.query(sql, (err, result)=>{  
                if(err)return reject(err);
                resolve(result);
            });
        })
    }

}

module.exports = CompaniesDAO;