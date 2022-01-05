
class Database {
    constructor () {
        const mysql = require('mysql');

        this.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'nodejs'
          });

        this.connection.connect((err) => {
        if (err) throw err;
        console.log('Connected!');
        });
    }
    insert (query) {
      this.connection.query(query,(err)=> {
          if (err) throw err;

          console.log('added successfully');
      })
    }

    find (query) {
        this.connection.query(query,(err)=> {
            if (err) throw err;
  
            console.log('find successfully');
        })
      }
      findbyID (query) {
        this.connection.query(query,(err)=> {
            if (err) throw err;
  
            console.log('findbyID successfully');
        })
      }
      delete (query) {
        this.connection.query(query,(err)=> {
            if (err) throw err;
  
            console.log('delete successfully');
        })
      }

}
module.exports = Database;
