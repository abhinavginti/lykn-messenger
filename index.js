const express = require('express')
const app = express();
const cors = require('cors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const Message = require('./models/message.model')
const Conversation = require('./models/conversation.model')

app.use(cors())
app.use(express.json())
const port = process.env.PORT || 4000;

//mongodb+srv://abhinavginti:eojay8VdTDhp96yP@cluster0.gbpfp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://abhinavginti:eojay8VdTDhp96yP@cluster0.gbpfp.mongodb.net/lyknMessenger?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connection Successful')
}).catch((err) => console.log(err))

const VerifyUser = async (token) => {
    const decoded_token = await jwt.verify(token, 'lykn_messenger_200400');
    const user = await User.findOne({ username: decoded_token.username })
    if (user) {
        return { status: true, user: user }
    }
    else {
        return { status: false }
    }
}


app.post('/api/register', async (req, res) => {
    try {
        const newPassword = await bcrypt.hash(req.body.password, 10);
        await User.create({
            username: req.body.username,
            password: newPassword
        })
        res.json({ status: true })
    }
    catch (err) {
        res.json({ status: false, error: Object.keys(err.keyValue)[0] })
    }
})

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        username: req.body.username
    })
    if (!user) {
        res.json({ status: false, error: 'User not found' })
        return
    }

    const isPassValid = await bcrypt.compare(req.body.password, user.password)
    if (isPassValid) {
        const token = await jwt.sign({
            username: user.username
        }, 'lykn_messenger_200400')
        return res.json({
            status: true, username: user.username, user: token
        })

    }
    else {
        res.json({ status: false, error: 'Password do not match' })
        return
    }
})

app.get('/api/auth', async (req, res) => {
    console.log(req.headers['x-access-token'])
    const VerifiedData = await VerifyUser(req.headers['x-access-token']);
    if (VerifiedData.status) {
        return res.json({ status: true })
    }
    else return res.json({ status: false, error: 'Invalid Token' })
})

app.listen(port, () => console.log(`App is running on port: ${port}`))