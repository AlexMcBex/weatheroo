// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')

// EXPRESS
const app = express()

// DB
const db = require('./config/db')
mongoose.connect(db, {
	useNewUrlParser: true,
})

//  PORTS
const serverDevPort = 8000
// const clientDevPort = 3000
const port = process.env.PORT || serverDevPort


// ROUTES



// RUN API
app.listen(port, () => {
	console.log('listening on port ' + port)
})