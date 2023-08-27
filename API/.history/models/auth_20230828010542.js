const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
    username: {
        type: String,   // Burada type kullanmalısınız
        required: true,
        trim: true
    },
    email: {
        type: String,   // Burada type kullanmalısınız
        required: true,
        unique: true
    },
    password: {
        type: String,   // Burada type kullanmalısınız
        required: true,
       
    },
    date: {
       type: Date,
       default: new Date()
    }
});

module.exports = mongoose.model('Auth', AuthSchema); // Dışarı aktarma ve veri modelleri oluşturuldu
