const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true,
        trim : true
    }
})