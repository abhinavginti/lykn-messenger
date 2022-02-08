const mongoose = require('mongoose')

const conversation = new mongoose.Schema(
    {
        members: { type: Array }
    },
    { timestamps: true }
)

const model = mongoose.model('Conversation',conversation);

module.exports = model