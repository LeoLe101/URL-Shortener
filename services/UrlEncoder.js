const { customAlphabet } = require('nanoid');

const GenerateUrlCode = () => {
    const nanoid = customAlphabet('1234567890abcdefQWERASDFZXCVYYUIOHJKLBNM', 5)
    return nanoid();
}

module.exports = GenerateUrlCode; 