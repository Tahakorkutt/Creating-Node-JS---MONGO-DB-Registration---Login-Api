const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
    username: {
        type: String,   // type kelimesini kullanmalısınız
        required: true,
        trim: true
    },
    email: {
        type: String,   // type kelimesini kullanmalısınız
        required: true,
        unique: true
    },
    password: {
        type: String,   // type kelimesini kullanmalısınız
        required: true,
       
    },
    date: {
       type: Date,
       default: new Date()
    }
});

module.exports = mongoose.model('Auth', AuthSchema); // Dışarı aktarma ve veri modelleri oluşturuldu
