let express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    config = require('./app/config/config'),
    morgan = require('morgan'),
    compression = require('compression'),
    mongoose = require('mongoose');
app = express();

// view engine setup
let eventRoutes = require('./app/routes/eventRoutes');
let userRoutes = require('./app/routes/userRoutes');

mongoose.Promise = global.Promise;
mongoose
    .connect(config.MONGODB_URI).then(
        () => {
            console.log("Mongodb is connected");
        },
        err => {
            console.log("Cannot connect to the mongodb" + err);
        }
    );

app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(compression());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(eventRoutes);
app.use(userRoutes);
app.use(express.static(__dirname));
module.exports = app;