const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const bookVersionSchema = new Schema({
    bookversion_ID: {
        type: Number,
        unique: true,
        required: [true,'Required']
    },
    book_ID: {
        type: Schema.Types.ObjectId,
        ref: "Books",
        required: [true, 'Required']
    },
    priceBought: {
        type: Number,
        required: [true,'Required']
    },
    sellingPrice: {
        type: Number,
        required: [true,'Required']
    },
    quality: {
        type: String,
        enum: ['New','Used'],
        required: [true,'Required']
    },
    edition: {
        type: String,
        // enum: ['New','Used'],
        required: [true,'Required']
    },
    type: {
        type: String,
        enum: ['Softbound','Hardbound'],
        required: [true,'Required']
    },
    quantity: {
        type: Number,
        required: [true,'Required']
    }
    // bookCover: {

    // }
});

module.exports = mongoose.model('BookVersions',bookVersionSchema);