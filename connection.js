const mongoose = require('mongoose');

async function connectMongoDb(connection_url){
    mongoose.connect(connection_url)
        .then(console.log("MongoDB Connected"))
        .catch(err => console.log(err));
}

module.exports = {connectMongoDb}