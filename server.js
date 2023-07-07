const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8000

// Middleware
app.use(express.json())

// Routes
app.get('/', (req, res) => {
  res.send('Weatheroo BackEnd')
})

// Connect to MongoDB
mongoose.connect('mongodb://localhost/weatheroo', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('You are connected to MongoDB'))
  .catch((err) => console.log(err))

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})