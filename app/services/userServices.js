let axios = require('axios');
let event = require('../models/event');
const user = require('../models/user');
let config = ('../config/config');
let crypto = require('crypto');



async function register(req, res, next) {
    try {
        let payload = req.body;
        await user.insertMany({
            username: payload.username,
            password: crypto.createHash('sha256').update(payload.password).digest('hex')
        });

        return res.json({
            success: "true",
            message: "success register",
        });

    } catch (error) {
        return res.json({
            success: "false",
            message: "fail, get data",
            log: error.message,
        });
    }
}

async function login(req, res, next) {
    try {
        let payload = req.body;
        if (!payload.username || !payload.password) {
            return res.json({
                success: "false",
                message: "username or password can`t by null",
            });
        }

        let query = {
            password: crypto.createHash('sha256').update(payload.password).digest('hex'),
            username: payload.username
        }

        let loginData = await user.findOne(query);

        if (loginData == undefined) {
            return res.json({
                success: "false",
                message: "username or password wrong",
            });
        }

        return res.json({
            success: "true",
            message: "login Success",
        })
    } catch (error) {
        return res.json({
            success: "false",
            message: "failed : err",
            log: error.message
        })
    }
}

module.exports = {register, login}
