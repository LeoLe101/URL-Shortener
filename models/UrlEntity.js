'use strict';

const mongoose = require('mongoose');

/**
 * Creating new Schema in MongoDB through MongooseJS
 * https://mongoosejs.com/docs/
 */

const UrlSchema = new mongoose.Schema({
    originalURL: String,
    codeURL: String,
    shortenURL: String,
    dateCreated: Date,
});

mongoose.model('UrlEntity', UrlSchema);