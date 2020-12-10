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

		// Set CORS Header
		app.use((req, res, next) => {
			res.header('Access-Control-Allow-Origin', '*');
			res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
			res.header('Access-Control-Allow-Headers', 'Content-type,Accept,x-access-token,X-Key');
			if (req.method == 'OPTIONS') {
				res.status(200).end();
			} else {
				next();
			}
		});

		// Shorten URL
		const UrlAPIs = require('./apis/UrlRoutes');
		app.use('/api', UrlAPIs);

		// Search URL
		const SearchAPIs = require('./apis/SearchRoutes');
		app.use('/api', SearchAPIs);

		// Home URL
		app.get('/', async (req, res) => {
			res.send('From Seattle with Luv!!!');
		});

		// 404 Not Found response
		app.get('/not-found', async (req, res) => {
			res.status(404).json({
				message: 'Not Found! We cannot find what you are looking for ¯\_(ツ)_/¯',
				success: false
			});
		});

		// Start listening to HTTP Request
		app.listen(Constants.PORT, () => {
			console.log(`Server listening at ${BASE_URL}`)
		});

	})
	.catch(err => {
		console.log('Error while connecting with DB!!!', err);
	});
