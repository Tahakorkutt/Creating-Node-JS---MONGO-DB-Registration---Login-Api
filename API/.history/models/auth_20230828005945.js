const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Aynı mailden tekrardan kayıt almama durumu
    },
    password: {
        type: String,
        required: true,
       
    },
    date: {
       type: Date,
       default: new Date() // Şuanki zaman durumu
    }
});

module.exports = mongoose.model('Auth', AuthSchema); // Dışarı aktarma ve veri modelleri oluşturuldu, Mongoose şeması düzeltildi
