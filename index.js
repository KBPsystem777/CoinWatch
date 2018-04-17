


const express = require('express');
const app = express();
const request = require('request');

app.use(express.static(__dirname + '/public'));

/*

app.get('/', function (req, res) {
    res.send("Hey there, Welcome to Coin-Watch!!"),
    console.log("Hey there, Welcome to Coin-Watch")
});

*/


app.listen(3000);
