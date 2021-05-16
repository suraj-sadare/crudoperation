const mongoose = require("mongoose");
const validator = require("validator");
const userSchema= new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique:true,
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: {
        type: String,
        required: true
    }
});
const userSignup= new mongoose.model('Mongodb', userSchema);
module.exports = userSignup;