const IdGenerator = require('nanoid');

const GenerateUrlCode = () => {
    return IdGenerator.nanoid();
}

module.exports = GenerateUrlCode; 