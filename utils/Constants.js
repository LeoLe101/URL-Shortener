'use strict';

// Misc
const PORT = process.env.PORT || 8080;
const BASE_URL = `http://localhost:${PORT}`;
const NOT_FOUND = `${BASE_URL}/not-found`;

// API Routes Const 
const API = `${BASE_URL}/api`;
const SHORTEN_URL = `${API}/url`;
const SEARCH_URL = `${API}/search`;

// Mongoos Const 
const MONGOOSE_URI = 'mongodb://localhost';
const MONGOOSE_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

module.exports = {
    MONGOOSE_URI,
    BASE_URL,
    NOT_FOUND,
    SEARCH_URL,
    SHORTEN_URL,
    PORT,
    MONGOOSE_OPTIONS
}
