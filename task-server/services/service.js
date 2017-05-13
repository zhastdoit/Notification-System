var sampleText = require("../models/sampleText");

var getSampleText = function () {
    var p = Promise.resolve(sampleText);
    return p;
}

module.exports = {
    getSampleText: getSampleText
}