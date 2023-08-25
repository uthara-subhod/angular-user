const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname: {
        type:String,
        default:'',
    },
    lastname:{
        type: String,
        default: '',
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    joinedAt: {
        type: Date,
        default: Date.now(),
    },
    profile: {
        type: String,
        default: '',
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("user",userSchema)