var express = require('express');
var bodyParser = require('body-parser');
var port = 3000;
var mainCtrl = require('./mainCtrl')


var app = express();

app.use(bodyParser.json());

app.get('/api/data', mainCtrl.getData); //need 1b
app.post('/api/data', mainCtrl.addData);
app.get('/api/data/:id', mainCtrl.getDataById);
app.delete('/api/data/:id', mainCtrl.deleteDataById);
app.put('/api/data/:id', mainCtrl.updateDataQueryById)



app.listen(port, function() {
	console.log('Listening on port',port);
})
