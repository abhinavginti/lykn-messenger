const io = require("socket.io")(process.env.PORT || 5000, {
    cors: {
        origin: "http://localhost:3000",
    },
});




io.on('connection', (socket) => {
    console.log('A user connected')
    
})