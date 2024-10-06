const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`${process.env.DATABASE_URL}/data`);
// console.log(dbURL);
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true, // Enforces unique usernames
    },
    password: {
        type: String,
        required: true,
    },
    
});

module.exports =  mongoose.model('user', userSchema);