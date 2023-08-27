
const mongoose = require('mongoose');

const AuthSchema= new mongoose.Schema({
    username:{
        type: 'string',
        required: true,
        trim: true
    },
    email:{
        type: 'string',
        required: true,
        unique: true // aynı mailden tekrardan kayıt almama durumu
    },
    password:{
        type: 'string',
        required: true,
       
    },
    date:{
       type:Date,
       default: new Date()//şuanki zaman durumu
    }
})
module.exports = mongoose.model('AuthSchema', AuthSchema) // dışarı aktarma ve verimodelleri