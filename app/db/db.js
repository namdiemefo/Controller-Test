const config = require('../config/config');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = 8080;
const PROD = false;
var CONNECTION_URL = '', type = '';
// database connection
CONNECTION_URL = PROD ? config.database : config.test_database;
type = PROD ? 'PRODUCTION' : 'DEVELOPMENT';
const DATABASE_NAME = 'local';

console.log(CONNECTION_URL);

exports.Mongoose = mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if(error) {
        console.log(error);
    }
    console.log(`Connected Mongoose to ${type} ${DATABASE_NAME} DB`);
});

console.log(`Connected to Server at port ${PORT}`);