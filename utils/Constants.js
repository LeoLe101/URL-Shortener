'use strict';

const PORT = process.env.PORT || 3000;
const MONGOOSE_URI = 'mongodb://localhost';
const BASE_URL = `http://localhost:${PORT}`;
const NOT_FOUND = `${BASE_URL}/api/not-found`;
const SHORTEN_URL = `${BASE_URL}/api/url`;
const MONGOOSE_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

module.exports = {
    MONGOOSE_URI,
    BASE_URL,
    NOT_FOUND,
    SHORTEN_URL,
    PORT,
    MONGOOSE_OPTIONS
}
