var express = require("express");
var router = express.Router();
var service = require("../services/service");

router.get("/sampleText", function(req, res){
    service.getSampleText()
        .then(function(text){
            res.send(text);
        });
});

module.exports = router;