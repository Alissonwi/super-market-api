const express = require('express')
const mongoose = require('mongoose')
const databaseConfig = require('./config/database')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser');
const cors = require('cors');

class App {
    constructor() {
        this.express = express();
        this.isDev = process.env.NODE_ENV !== 'production'

        this.database()
        this.midlewares()
        this.routes()
    }

    database() {
        mongoose.connect(databaseConfig.uri, {
            useCreateIndex: true,
            useNewUrlParser: true,
        }).then(() => {
            this.isDev && console.log("Connected with Mongo!");
        })
            .catch((error) => {
                console.log("Failed to connect with Mongo");
                console.log("ERROR: " + error);
            });
    }

    midlewares() {
        this.express.use(cors())
		this.express.use(express.static('./server/public'))
		this.express.use(bodyParser.json({limit: '50mb'}));
    }

    routes(){
        this.express.use(
			function(req, res, next) {
				res.header("Access-Control-Allow-Origin", "*");
				res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
				res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
				next();
			}, require('./routes'))
    }
}

module.exports = new App().express