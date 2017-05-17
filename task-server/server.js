var express = require("express");
var app = express();
var path = require("path");
var cors = require('cors')
var bodyParser = require('body-parser');
var auth = require('./routes/auth');
var index = require('./routes/index');
var messages = require('./routes/messages');

app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());
app.use(bodyParser.json());

app.use('/', index);
app.use('/auth',auth);
app.use('/messages', messages);
app.use('*', index);
// app.use(function(req, res) {
//     // send index.html to start client side
//     res.sendFile("index.html", { root: path.join(__dirname, '../public/') });
// });

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});