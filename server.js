/**
 * Created by javeed shaik on 10/8/2017.
 */

var express = require('express');
app = express();

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/test');
//cheking coonection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected to database!');
});

app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/dist/index.html');
});

app.listen(4200, function () {
  console.log('server running @localhost:4200');
});



