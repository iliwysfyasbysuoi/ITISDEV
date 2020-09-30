const mongoose = require('mongoose');

const url = 'mongodb+srv://admin:bnDNut4AG77aqK3@cluster0.u3t5h.mongodb.net/chapterone?retryWrites=true&w=majority';

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

mongoose.set('useCreateIndex', true);

// defines an object which contains necessary database functions
const database = {

    // connects to database
    connect: function () {
        mongoose.connect(url, options, function(error) {
            if(error) throw error;
            console.log('Connected to: ' + url);
        });
    },

    // inserts a single `doc` to the database based on the model `model`
    insertOne: function(model, doc) {
        model.create(doc, function(error, result) {
            if(error) throw error;
            console.log('Added ' + result);
        });
    },

    //insertOne WITH CALLBACK
    insertOneWithCallback: function(model, doc, callback) {
        model.create(doc, function(error, result) {
            if(error) return callback(false);
            console.log('Added ' + result);
            return callback(true);
        });
    },


    // inserts multiple `docs` to the database based on the model `model`
    insertMany: function(model, docs) {
        model.insertMany(docs, function(error, result) {
            if(error) throw error;
            console.log('Added ' + result);
        });
    },

    // searches for a single document based on the model `model`
    // filtered through the object `query`
    // limits the fields returned based on the string `projection`
    // callback function is called after the execution of findOne() function
    findOne: function(model, query, projection, callback) {
        model.findOne(query, projection, function(error, result) {
            if(error) throw error;
            return callback(result);
        });
    },

    // searches for multiple documents based on the model `model`
    // filtered through the object `query`
    // limits the fields returned based on the string `projection`
    // callback function is called after the execution of findMany() function
    findMany: function(model, query, projection, callback) {
        model.find(query, projection, function(error, result) {
            if(error) throw error;
            return callback(result);
        });
    },

    // updates the value defined in the object `update`
    // on a single document based on the model `model`
    // filtered by the object `filter`
    updateOne: function(model, filter, update) {
        model.updateOne(filter, update, function(error, result) {
            if(error) throw error;
            console.log('Document modified: ' + result.nModified);
        });
    },

    // updates the value defined in the object `update`
    // on multiple documents based on the model `model`
    // filtered using the object `filter`
    updateMany: function(model, filter, update) {
        model.updateMany(filter, update, function(error, result) {
            if(error) throw error;
            console.log('Documents modified: ' + result.nModified);
        });
    },

    // deletes a single document based on the model `model`
    // filtered using the object `conditions`
    deleteOne: function(model, conditions) {
        model.deleteOne(conditions, function (error, result) {
            if(error) throw error;
            console.log('Document deleted: ' + result.deletedCount);
        });
    },

    // deletes multiple documents based on the model `model`
    // filtered using the object `conditions`
    deleteMany: function(model, conditions) {
        model.deleteMany(conditions, function (error, result) {
            if(error) throw error;
            console.log('Document deleted: ' + result.deletedCount);
        });
    }

}

module.exports = database;
