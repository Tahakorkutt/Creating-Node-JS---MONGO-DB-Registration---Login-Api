
const mongoose = require('mongoose');

const AuthSchema= new mongoose.Schema({
    username:{
        
        required: true,
        trim: true
    },
    email:{
       
        required: true,
        unique: true // aynı mailden tekrardan kayıt almama durumu
    },
    password:{
       
        required: true,
       
    },
    date:{
       type:Date,
       default: new Date()//şuanki zaman durumu
    }
})
module.exports = mongoose.model('AuthSchema', AuthSchema) // dışarı aktarma ve verimodelleri