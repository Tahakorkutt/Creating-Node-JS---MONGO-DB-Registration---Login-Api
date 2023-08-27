
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
        unique: true // aynı mailden tekrardan kayıt almama durumu
    },
    password:{
        typeof: 'string',
        required: true,
       
    },
})