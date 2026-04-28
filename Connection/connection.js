// const dns = require('dns');
// dns.setServers(['8.8.8.8', '8.8.4.4']);

const mongoose = require('mongoose')

const connectionString = process.env.CONNECTION_STRING

mongoose.connect(connectionString).then(res => {
    console.log("Server Connected with Mongodb Server !")
}).catch(err => {
    console.log(err)
})