'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Constants = require('./utils/Constants');

// Connect to DB before starting the Server
mongoose.connect(Constants.MONGOOSE_URI, Constants.MONGOOSE_OPTIONS)
	.then(() => {
		console.log('Connected to DB successfully!!!');

		// Register MongoDB Schema for URL entity
		require('./models/UrlEntity');

		const app = express();

		// Setup Middleware Handler
		app.use(bodyParser.json());

		// Setup Routes
		const RouteAPIs = require('./apis/api');
		app.use(RouteAPIs);

		// Start listening to HTTP Request
		app.listen(Constants.PORT, () => {
			console.log(`Server listening at http://localhost:${Constants.PORT}`)
		});

	})
	.catch(err => {
		console.log('Error while connecting with DB!!!', err);
	});

