let axios = require('axios');
let event = require('../models/event');
let config = ('../config/config');


async function index(req, res, next) {
    try {
        let eventService = await event.find().select();
        return res.json({
            success: "true",
            message: "Berhasil Mendapatkan Data Event",
            data: eventService
        });
    } catch (error) {
        return res.json({
            success: "false",
            message: "failed get data",
            log : error.message,
        });
    }
}

async function store(req, res, next) {
    try {
        let payload = req.body;
        await event.insertMany({
            name: payload.name,
            email: payload.email,
            phone_number: payload.phone_number,
            event: payload.event
        });
        return res.json({
            success: "true",
            message: "success adding event",
        });
    } catch (error) {
        return res.json({
            success: "false",
            message: "fail, get data",
            log: error.message,
        });
    }
}

async function del (req, res, next) {
    try {
        let payload = req.params.id
        await event.deleteOne({
            _id: payload
        })

        return res.json({
            success: "true",
            message: "Success delete participant"
        })
    } catch (error) {
        return res.json({
            success: "false",
            message: "fail, delete data",
            log: error.message,
        });
    }
}

module.exports = {
    index,
    store,
    del
}