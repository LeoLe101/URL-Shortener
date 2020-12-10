'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Constants = require('./utils/Constants');
const { BASE_URL } = require('./utils/Constants');

// Connect to DB before starting the Server
mongoose.connect(Constants.MONGOOSE_URI, Constants.MONGOOSE_OPTIONS)
	.then(() => {
		console.log('Connected to DB successfully!!!');

		// Register MongoDB Schema for URL entity
		require('./models/UrlEntity');

		const app = express();

		// Setup Middleware Handler and Routes
		app.use(express.json());

		const RouteAPIs = require('./apis/UrlRoutes');
		app.use('/api', RouteAPIs);
		// '/' - Home Page
		app.get('/', async (req, res) => {
			res.send('From Seattle with Luv!!!');
		});

		// Start listening to HTTP Request
		app.listen(Constants.PORT, () => {
			console.log(`Server listening at ${BASE_URL}`)
		});

	})
	.catch(err => {
		console.log('Error while connecting with DB!!!', err);
	});
