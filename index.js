const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model');
const Message = require('./models/message.model');
const Conversation = require('./models/conversation.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const server = require('http').createServer(app)
const io = require("socket.io")(process.env.PORT || 5000, {
    cors: {
        origin: "*",
    },
});

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 4000;

//mongodb+srv://abhinavginti:eojay8VdTDhp96yP@cluster0.gbpfp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://abhinavginti:eojay8VdTDhp96yP@cluster0.gbpfp.mongodb.net/lyknMessenger?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connection Successful')
}).catch((err) => console.log(err))


io.on('connection', (socket) => {
    console.log('A user connected')
})

//server.listen(port, () => console.log(`Server running on Port:${port}`))
app.listen(port, () => console.log(`Server running on Port:${port}`))