var express = require('express')
var bodyParser = require('body-parser')
var session = require('express-session')

var app = express()

app.use(bodyParser.json())
