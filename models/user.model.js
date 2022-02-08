const mongoose = require('mongoose')

const user = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true })

const model = mongoose.model('Users', user);

module.exports = model