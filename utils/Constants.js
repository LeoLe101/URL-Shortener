
const MONGOOSE_URI = 'mongodb://localhost';
const NOT_FOUND = 'http://localhost:3000/not-found';

const PORT = 3000;

const MONGOOSE_OPTIONS = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

module.exports = {
    MONGOOSE_URI,
    NOT_FOUND,
    PORT,
    MONGOOSE_OPTIONS
}
