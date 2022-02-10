const io = require("socket.io")(process.env.PORT || 5000, {
    cors: {
        origin: "http://localhost:3000",
    },
});


let users = []

const setUser = (socketId, username) => {
    !users.some(user => user.username === username) && users.push({ socketId, username });
    // console.log(users)
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId)
}

io.on('connection', (socket) => {
    console.log('A user connected')

    socket.on('setUser', (username) => {
        // console.log(username)
        setUser(socket.id, username)
        socket.emit('getUser', users)
    })

    socket.on('sendMessage', ({ senderUsername, recieverUsername, message }) => {
        try {
            const userData = users.find(user => user.username === recieverUsername)
            io.to(userData.socketId).emit("getMessage", { text: message, senderUsername })
        } catch (err) { console.log(err) }
    })

    socket.on('disconnect', () => {
        removeUser(socket.id)
    })
})