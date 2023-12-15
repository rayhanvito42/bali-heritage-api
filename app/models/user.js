let mongoose = require('mongoose');
const {
    model,
    Schema
} = mongoose;
let validator = require('validator');
let moment = require('moment');

process.env.TZ = "Asia/Jakarta";

let userSchema = Schema({
    username: {
        type: String,
        required: {
            value: true,
            message: "Username tidak boleh kosong"
        }
    },
    password: {
        type: String,
        required: {
            value: true,
            message: "Username tidak boleh kosong"
        }
    }
}, {
    collection: 'user'
});

module.exports = model('User', userSchema);
