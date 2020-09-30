const db = require('../model/db.js');
//const booksModel = require('../model/booksModel.js');
const books = require('../model/booksModel.js');
const BookVersions = require('../model/bookVersionsModel.js');
const BookAuthors = require('../model/bookAuthorsModel.js');
const authorModel = require('../model/authorModel.js');
const ObjectId = require('mongodb').ObjectID;

// for image upload
const path = require('path');
const multer = require('multer');


//Set Storage Engine
const storage = multer.diskStorage({
    destination: './public/img',
    filename: function( req, file, callback){
        callback(null, filename =  file.fieldname + '-' + Date.now() +  path.extname(file.originalname));
    }
});

//init upload 
const upload = multer({
    storage: storage,
    fileFilter: function(req, file, callback){
        checkFileType(file, callback);
    }
}).single('myImage');

// check file type
function checkFileType(file , callback){
    // allowed extensions
    const filetypes = /jpeg|jpg|png/;
    // check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    //check mimetype
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname){
        return callback(null, true);
    }else{
        callback("Error: Images only");
    }
}


const adminController = {
    getAddProduct: function(req,res){
        if (req.session.userType == "Admin") {
            res.render("addproducts",{});
        }
        else {
            console.log("unauthorized");
            res.render("errorpage", {});
        }
    },

    getAdminRequestList: function(req,res){
        if (req.session.userType == "Admin") {
            res.render("adminRequestsListCollective",{});
        }
        else {
            console.log("unauthorized");
            res.render("errorpage", {});
        }
    },

    getAdminRequestListCollective: function(req,res){
        if (req.session.userType == "Admin") {
            res.render("adminRequestsListCollective",{});
        }
        else {
            console.log("unauthorized");
            res.render("errorpage", {});
        }
    },

    getAdminRequestListIndividual: function(req,res){
        if (req.session.userType == "Admin") {
            res.render("adminRequestsListIndividual",{});
        }
        else {
            console.log("unauthorized");
            res.render("errorpage", {});
        }
    },

    getAdminRequestListSTBC: function(req,res){
        if (req.session.userType == "Admin") {
            res.render("adminRequestsListSTBC",{});
        }
        else {
            console.log("unauthorized");
            res.render("errorpage", {});
        }
    },
    
    postProduct: function (req,res,next) {
        var book_ID = ObjectId();
        var author_ID = ObjectId();
        var title = req.body.Book_Title;
        var author = req.body.author;
        var publisher = req.body.publisher;
        var year = req.body.year;
        var category = req.body.category;
        var bookSynopsis = req.body.bookSynopsis;

        var edition = req.body.edition;
        var type = req.body.type;
        var quality = req.body.quality;
        var quantity = req.body.quantity;
        var sellingPrice = req.body.sellingPrice;
        var priceBought = req.body.priceBought;

        var bookCover = req.file.filename; 

        var authorArr = author.split(','); // splits the string for every ',' into an array
        var authorIDArr = []; // stores author _ids that will be passed to the bookvers as author

        authorArrCount = 0;
        authorArr.forEach(function(a, err){
            var aName = a.trim(); // makes sure there's no space at the start and end (useful in string comparison)
            authorModel.findOne({aName: aName}, function(err, authorResult){
                if(authorResult){
                    // if author already exists in the db, push its _ID
                    authorIDArr.push(authorResult._id);
                }else{
                    // else if author DOES NOT exist in the db, make an author object then push its _ID

                    var author = new authorModel({
                        _id :  ObjectId(),
                        aName : aName
                    })

                    author.save();
                    authorIDArr.push(author._id);
                }

                authorArrCount++;
                if( authorArrCount == authorArr.length){

                    var item = {
                        book_ID:  book_ID,
                        title : title,
                        author :  authorIDArr, // passes the IDs array
                        publisher : publisher,
                        year : year,
                        category : category,
                        bookSynopsis : bookSynopsis
                    }
                    
            
                    var item2 = {
                        bookVersion_ID : ObjectId(),
                        book_ID :book_ID,
                        priceBought : priceBought,
                        sellingPrice : sellingPrice,
                        quality : quality,
                        edition : edition,
                        type : type,
                        quantity : quantity,
                        bookCover : '../img/'+bookCover // i added ../img/
                    }
            
                    db.insertOne(books, item);
                    db.insertOne(BookVersions, item2);
            
                    res.redirect('/browse');

                }
            })
        })
    }
}

module.exports = adminController;
