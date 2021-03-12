const express = require('express')
var fs = require('fs')

var bodyParser = require('body-parser')
const app = express()
const port = 3000
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
  }));
app.use(bodyParser.json());  
     // to support JSON-encoded bodies
app.post('/register', function(req, res) {
    if(createFile(req.body.name, req.body.email, req.body.pass)){
        res.status(200).send(req.body.name);
    }
    res.sendStatus(401);
});

app.get('/listOfMovies', function(req, res) {
    fs.readFile('movies.json', (err, data) => {
        if (err) throw err;
        let movies = JSON.parse(data);
        res.send(movies);
    });

});

function createFile(name, email, pass){
    
    user = `${name} , ${email}, ${pass} \n`;
    fs.appendFile(`users.txt`, user , function (err) {
        if(err) {
            return 0;
        }
    });
    return 1;
}


    
    

    









