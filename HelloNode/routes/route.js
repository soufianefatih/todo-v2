class Route {

    constructor () {
        
      const http = require('http');
      const path = require('path');
      const fs = require('fs');
      const ejs = require ('ejs');



      this.server = http.createServer((req,res) => {
        // console.log(req.url, req.method);
      
        
      console.log(req.url);
      switch (req.url) {
         
      
        case '/':

          res.writeHead(200,{'Content-Type':'text/html'});
          console.log(path.join(__dirname, '../views' , 'index.ejs'));
          res.end(ejs.render(fs.readFileSync(path.join(__dirname, '../views' , 'index.ejs'), 'utf8'),[]));
        break;
      
        case '/about':
          res.writeHead(200,{'Content-Type':'text/html'});
          console.log(path.join(__dirname, '../views' , 'about.ejs'));
          res.end(ejs.render(fs.readFileSync(path.join(__dirname, '../views' , 'about.ejs'), 'utf8'),[]));
        break;

        case '/404':
          res.writeHead(404,{'Content-Type':'text/html'});
          console.log(path.join(__dirname, 'views' , '404.ejs'));
          res.end(ejs.render(fs.readFileSync(path.join(__dirname, 'views' , '404.ejs'), 'utf8'),[]));
        break;
      
       
      }
      
      
      
      
      });
      
      
      this.server.listen(5500, 'localhost',() => {
      
          console.log('listening for requests on port 5500');
      
      
      });

    }


}

module.exports = Route;


