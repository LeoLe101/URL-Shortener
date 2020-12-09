'use strict';

const Routes = require('express').Router();
const mongoose = require('mongoose');
const validUrl = require('valid-url');
const Constants = require('../utils/Constants');
// const shortCode = require('../middlewares/uniqueUrlCode');

const Url = mongoose.model('UrlEntity');

// Home Page
Routes.get('/', async (req, res) => {
    res.status(200).json({
        message: 'From Seattle with Luv!'
    })
    res.send('From Seattle with Luv!!!')
});

Routes.get('/api/code', async (req, res) => {
    const urlCode = req.params.code;
    const foundHashedURL = await Url.findOne({ codeURL: urlCode });

    if (foundHashedURL) {
        return res.redirect(foundHashedURL.originalUrl);
    } else {
        return res.redirect(Constants.NOT_FOUND);
    }
});


Routes.post('/not-found', async (req, res) => {
    res.status(404).json({
        message: 'We cannot find what you are looking for ¯\_(ツ)_/¯'
    })
    res.send('Test Page!')
    console.log('Send Test');
});


Routes.post('/api/url', async (req, res) => {
    res.status(200).json({
        message: 'Test Page'
    })
    res.send('Test Page!')
    console.log('Send Test');
});



module.exports = Routes;
