
const mongoose = require('mongoose');
require('dotenv').config()
import "dotenv/config"

const database = () =>{ 
    const user = process.env.USER;
    const password = process.env.PASSWORD;
    
    mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.taur7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
.then(()=> console.log('success database'))
.catch((err:Error)=> console.log('database not connected'))
}
module.exports = database