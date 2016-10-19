var express = require('express');
var bodyParser = require('body-parser');
var data = require('./data') //is required to get data from module.exports
var port = 3000;

var app = express();

app.use(bodyParser.json())

app.get('/api/data/', getData)
app.post('/api/data/', addData)



app.listen(port, function () {
  console.log('listening on port ' + port + '...');
})


function getData(req,res) {
  res.status(200).json(data)
}

function addData(req, res) {
  data.push(req.body)
  res.status(200).end()
}
