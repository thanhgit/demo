

let express = require('express')
let bodyParser = require('body-parser')
require('dotenv').config({path: __dirname + '/.env'})

let app = express()

let port = process.env['PORT'];


app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  


app.get("/", (req, res) => res.json({message: "Welcome to our Bookstore!"}));

app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing
