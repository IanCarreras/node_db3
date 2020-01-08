const express = require('express');
const logger = require('./middleware/logger')
const notFound = require('./middleware/notFound')
const error = require('./middleware/error')
const SchemeRouter = require('./schemes/scheme-router.js');
const server = express()

server.use(logger())
server.use(express.json())

server.use('/api/schemes', SchemeRouter);

server.use(notFound())
server.use(error())

module.exports = server;