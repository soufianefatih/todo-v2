const Database = require('./database/db');


// module.exports={ 
//   createData:function(inputData,callback){
//     let sql = 'INSERT INTO crud SET ?'; 
//     Database.query(sql, inputData,function (err, data) {
//     if (err) throw err;
//       return callback(data);
//     });
//   }
// }

class Project {

    constructor (id_project ,name_project,description,id_tak) {

         this.id_project = id_project;
         this.name_project = name_project;
         this.id_tak = id_tak;
         this.description = description;

    }

    addProject () {
      let sql = `INSERT INTO project (name_project,description)
      VALUES(
        '${this.name_project}'
        '${this.description}'
      )`
      Database.insert(sql);
    }

   
    findProject () {

      let sql = `SELECT * FROM project`

      Database.find(sql);

    }
    findProjectID () {

      let sql = `SELECT * FROM project WHERE id_project = ${id_project};`;

      Database.findbyID(sql);

    }
    DeleteProject () {

      let sql = `DELETE * FROM project WHERE id_project = ${id_project};`;

      Database.delete(sql);

    }

}

module.exports = Project;

