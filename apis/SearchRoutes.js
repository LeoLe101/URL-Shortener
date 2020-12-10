'use strict';

// const Routes = require('express').Router();
// const mongoose = require('mongoose');
// const validUrl = require('valid-url');
// const Constants = require('../utils/Constants');
// const UrlEncoder = require('../services/UrlEncoder');

// const Url = mongoose.model('UrlEntity');

Routes.use((req, res, next) => {
    console.log('--- Search API Logger ---');
    console.log('- Request Url: ', req.url);
    console.log('- Request Type: ', req.method);
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

// // Get Request to get the original Url from hashed URL code
// Routes.get('/url/:code', async (req, res) => {
//     console.log('--- URL { GET } ---');

//     // Get the original url from hashed code
//     const urlCode = req.params.code;
//     const foundHashedURL = await Url.findOne({ codeURL: urlCode });

//     // If there's already a hashed code, redirect to that url
//     if (foundHashedURL) {
//         return res.redirect(foundHashedURL.originalUrl);
//     } else {
//         return res.redirect(Constants.NOT_FOUND);
//     }
//     return;
// });

// // Post Request to generate URL Code
// Routes.post('/url', async (req, res) => {
//     console.log('--- URL { POST } ---');
//     if (!req.body.originalUrl || !validUrl.isUri(Constants.BASE_URL)) {

//         console.log('- POST Url Error');
//         console.log('- Body not found: ', req.body);
//         console.log('- Base URL valid: ', !validUrl.isUri(Constants.BASE_URL));

//         res.status(401).json({
//             message: 'Server Error! Please Try Again.',
//             success: false
//         });
//         return;
//     }

//     const originalUrl = req.body.originalUrl;
//     const urlCode = UrlEncoder();

//     if (validUrl.isUri(originalUrl)) {
//         console.log('Valid Original URL');

//         // find if this original url is hashed in DB or not
//         let hashedURL = await Url.findOne({ originalUrl: originalUrl });
//         console.log('Hashed URL: ', hashedURL);

//         // Original url hashed in DB already
//         if (hashedURL) {
//             return res.status(200).json({
//                 message: 'Successfully Shrink URL!',
//                 success: true,
//                 url: hashedURL,
//                 dateCreated: Date.now()
//             });
//         }
//         // Original url not hashed yet
//         else {
//             const shortenURL = `${Constants.BASE_URL}/${urlCode}`;

//             const newUrl = new Url({
//                 originalUrl: originalUrl,
//                 codeURL: urlCode,
//                 shortenURL: shortenURL,
//                 dateCreated: Date.now()
//             });

//             await newUrl.save(); // Save DB

//             return res.status(201).json({
//                 message: 'Successfully Shrink URL!',
//                 success: true,
//                 url: hashedURL,
//                 dateCreated: Date.now()
//             });
//         }

//     } else {
//         return res.status(400).json({
//             message: 'Invalid URL Format Input! Please re-enter the URL.',
//             success: false
//         });
//     }

// });

// // '/api/not-found' - Get 404 not found response
// Routes.get('/not-found', async (req, res) => {
//     res.status(404).json({
//         message: 'Not Found! We cannot find what you are looking for ¯\_(ツ)_/¯',
//         success: false
//     });
// });

// module.exports = Routes;
