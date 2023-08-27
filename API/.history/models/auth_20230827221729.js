
const mongoose = require('mongoose');

const AuthSchema= new mongoose.Schema({
    username:{
        typeof: 'string',
        required: true,
        trim: true
    },
    email:{
        typeof: 'string',
        required: true,
        trim: true
    },
    username:{
        typeof: 'string',
        required: true,
        trim: true
    },
})