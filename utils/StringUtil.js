const GetNameWithoutSpace = (str) => {
    return str.replace(/ +/g, "");
};

module.exports = {
    GetNameWithoutSpace
}