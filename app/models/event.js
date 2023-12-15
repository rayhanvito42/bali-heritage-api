let mongoose = require('mongoose');
const {
    model,
    Schema
} = mongoose;
let validator = require('validator');
let moment = require('moment');

process.env.TZ = "Asia/Jakarta";

let eventSchema = Schema({
    name: {
        type: String,
        required: {
            value: true,
            message: "Nama tidak boleh kosong"
        }
    },
    email: {
        type: String,
        required: {
            value: true,
            message: "email tidak boleh kosong"
        }
    },
    phone_number: {
        type: String,
        required: {
            value: true,
            message: "No. Telepon tidak boleh kosong"
        }
    },
    event: {
        type: String,
        required: {
            value: true,
            message: "Event tidak boleh kosong"
        }
    },
},
{
    collection: 'event'
});

module.exports = model('Event', eventSchema);

