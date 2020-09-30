const express = require('express')
const app = express()
const port = process.env.PORT || 9090;
const hbs = require("hbs")
// const mongoose = require('mongoose');
const path = require('path');


const bodyParser= require('body-parser')
const multer = require('multer');

app.use(bodyParser.urlencoded({extended: true}))

const routes = require('./routes/routes.js');
// const db = require('./model/db.js');
// const db = require('mongodb');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');

const MongoClient = require('mongodb').MongoClient
const myurl = 'mongodb+srv://admin:bnDNut4AG77aqK3@cluster0.u3t5h.mongodb.net/chapterone?retryWrites=true&w=majority';

//Set Storage Engine
const storage = multer.diskStorage({
    destination: './public/uploads',
    filename: function( req, file, callback){
        callback(null, file.fieldname + '-' + Date.now() +  path.extname(file.originalname));
    }
});

//init upload 
const upload = multer({
    storage: storage
}).single('myImage');

//helper used if a variable is equal to a value
hbs.registerHelper('ifEquals', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

mongoose.set('useFindAndModify', false);


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + "/public"));

mongoose.connect(myurl,  { useNewUrlParser: true , useUnifiedTopology: true });

MongoClient.connect(myurl,  { useNewUrlParser: true , useUnifiedTopology: true }  , (err, client) => {
    if (err) return console.log(err)
    db = client.db('chapterone') 
    app.listen(port, () => {
      console.log('Listening to port: ' + port);
      console.log('Connected to Database: ' + myurl);
    })
})




// use `express-session`` middleware and set its options
// use `MongoStore` as server-side session storage
app.use(session({
    'secret': 'chapterone-secret',
    'resave': false,
    'saveUninitialized': false,
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));

// parses incoming requests with urlencoded payloads
app.use(express.urlencoded({extended: true}));

app.use('/', routes);

// app.listen(port, function(){
//     console.log('App listening at port ' + port)
// });

//////////////////////////////


