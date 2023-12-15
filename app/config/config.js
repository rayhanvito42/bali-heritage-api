const dotenv = require('dotenv').config({ encoding: 'latin1' });
// console.log(dotenv.PORT);
module.exports = {
    PORT: process.env.PORT,
    SOCKET_PORT: 8081, // Random Video Chat Port
    MYSQL_PORT : process.env.MYSQL_PORT,
    HTTPS: process.env.HTTPS_STAT, //
    JWT_SECRET: process.env.JWT_SECRET,
    DB_NAME: process.env.DB_NAME,
    DB_PASS: process.env.DB_PASS,
    DB_USER: process.env.DB_USER,
    DB_HOST: process.env.DB_HOST,
    // ASSETS: "../../../img/",
    ASSETS: "../../public/img/",
    MONGODB_URI: process.env.MONGODB_URI,
    FCM_SERVERKEY: process.env.FCM_SERVERKEY,
    PUBLIC_DIR: process.env.PUBLIC_DIR,
    FCM_SERVER: process.env.FCM_SERVER,
    MODE: process.env.MODE,
    KEY_DEV_XENDIT: process.env.XENDIT_DEV,
    KEY_LIVE_XENDIT: process.env.XENDIT_LIV,
    XENDIT_CODE: process.env.XENDIT_INETRNAL_CODE,
    URL_WEB : process.env.HTTPS_STAT == 'off' ? process.env.URL_DEV : process.env.URL_LIVE,
    MAILER_MASTER: process.env.MAILER_MASTER,
    MAILER_PWD: process.env.MAILER_PWD,
    MAILER_HOST: process.env.MAILER_HOST,
    MAILER_PORT: process.env.MAILER_PORT
}