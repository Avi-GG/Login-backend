const mongoose = require('mongoose');
require('dotenv').config({ path: '../.env' });

mongoose.connect(process.env.DATABASE_URL, {
    ssl: true, // Enable SSL
});
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