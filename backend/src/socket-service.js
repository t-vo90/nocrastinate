const io = require('socket.io')({
  cors: {
    origin: true,
    methods: ['GET', 'POST'],
    credentials: true,
  },
})

io.on('connect', socket => {
  socket.emit('Connection Established!')

  //   setInterval(() => {
  //     socket.emit('hello world!')
  //   }, 2000)

  //   socket.on('new message', cb => {
  //     console.log(' a new dawn')
  //     cb('this is a response!')
  //   })

  socket.on('new message', (streamId, message) => {
    socket.to(streamId).emit('new live stream message', message)
  })

  socket.on('join stream', streamId => {
    socket.join(streamId)
  })

  socket.on('go live', (userId, cb) => {
    console.log(`${userId} is going live`)

    socket.broadcast.emit('new live stream', userId)
    socket.join(userId)

    cb(true)
  })
})

module.exports = io
