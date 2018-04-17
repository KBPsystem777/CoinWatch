


var express = require('express');
var app = express();
var request = require('request');


app.get('/', function (req, res) {
    res.send("Hey there, Welcome to Coin-Watch!!"),
    console.log("Hey there, Welcome to Coin-Watch")
});
app.listen(3000);
