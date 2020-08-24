const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const messageSchema = new Schema({
    message_ID: {
        type: Number,
        unique: true,
        required: [true,'Required']
    },
    sender: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: [true, 'Required']
    },
    message: {
        type : String,
        required: [true, 'Required']
    },
    date: {
        type: Date
    },
    read: {
        type : String,
        enum: ['Unread', 'Read'],
        default: 'Unread'
    }
});

module.exports = mongoose.model('Messages', messageSchema);