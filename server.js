const { MongoClient } = require('mongodb')
const express = require('express')

const url = 'mongodb://localhost:27017'
const dbName = 'weatheroo'
const client = new MongoClient(url)

async function startServer() {
	try {

		await client.connect()
		console.log('Connected successfully to MongoDB server')

		const db = client.db(dbName)

		const app = express()
		const port = process.env.PORT || 8000

		app.listen(port, function () {
			console.log(`Server started on port ${port}`)
		})

	} catch (err) {
		console.error('Error connecting to MongoDB:', err)
	}
}

startServer()
