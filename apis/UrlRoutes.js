'use strict';

const Routes = require('express').Router();
const mongoose = require('mongoose');
const validUrl = require('valid-url');
const Constants = require('../utils/Constants');
const GenerateUrlCode = require('../services/UrlEncoder');
const UrlDecoder = require('../services/UrlDecoder');

const Url = mongoose.model('UrlEntity');

/**
 * API for URL Shortener ======================================================
 */
Routes.use((req, res, next) => {
    console.log('--- API Logger ---');
    console.log('- Request Url: ', req.url);
    console.log('- Date: ', Date.now());

    // Handle CORS
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,x-access-token,X-Key');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

// '/api/url' - Post original url to hash and convert to short link
Routes
    .route('/url')
    // Get Request to get the original Url from hashed URL code
    .get(async (req, res) => {
        // Get the original url from hashed code
        const urlCode = req.params.code;
        const foundHashedURL = await Url.findOne({ codeURL: urlCode });

        // If there's already a hashed code, redirect to that url
        if (foundHashedURL) {
            return res.redirect(foundHashedURL.originalUrl);
        } else {
            // res.send('Invalid Url Detected!');
            return res.redirect(Constants.NOT_FOUND);
        }
    })
    // Post Request to generate URL Code
    .post(async (req, res) => {
        if (!req.body) {
            res.status(400).send('Request body is required!');
            return;
        }

        const url = new Url({
            originalUrl: req.body.content,
            codeURL: GenerateUrlCode(),
            shortenURL: 'DO SOMETHING',
            dateCreated: Date.now()
        });

        res.status(200).json({
            url: url,
            message: 'Test Page'
        });
    });

// '/api/not-found' - Get 404 not found response
Routes
    .route('/not-found')
    .get(async (req, res) => {
        // if (!req.body.name) {
        //     return res.status(400).json({
        //         status: 'error',
        //         error: 'req body cannot be empty',
        //     });
        // }
        res.status(404).json({
            message: 'We cannot find what you are looking for ¯\_(ツ)_/¯'
        });
    });

module.exports = Routes;
