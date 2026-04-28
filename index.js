// DNS fix - must be first line
// const dns = require('dns');
// dns.setServers(['8.8.8.8', '8.8.4.4']);

// IMPORTING and configuring dotenv for environment variables
require('dotenv').config()

// importing express.js module
const express = require('express')
const routes = require('./Routes/routes')
const cors = require('cors')

// creating server app instance
const app = express()

// importing mongodb connection
require('./Connection/connection')

// configuring cors to app
app.use(cors())

// configuring json middleware
app.use(express.json())

// configuring routes into app
app.use(routes)

//serving uploaded files to cilent side
app.use('/uploadImg',express.static('bookImages'))

//serving uploaded resumes to client side
app.use('/resumes', express.static('resumeFiles'))

// setting a specific port number
const PORT = process.env.PORT || 3000

// turning on listening mode for server
app.listen(PORT, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log(`server running at http://localhost:${PORT}`)
    }
})