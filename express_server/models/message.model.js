const mongoose = require('mongoose')

const message = new mongoose.Schema(
    {
        conversationId: { type: String, required: true },
        senderUsername: { type: String, required: true },
        messageText: { type: String, required: true }
    },
    { timestamps: true }
)

const model = mongoose.model('Messages', message)

module.exports = model