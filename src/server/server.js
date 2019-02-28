const express = require('express')
        , http = require('http')
        , socketio = require('socket.io')
        , path = require('path')
        , bodyParser = require('body-parser')
        , port = process.env.PORT || 3000
        , cors = require('cors')
        , app = express();

require('dotenv').config();

const server = http.createServer(app)
        , io = socketio(server);

app.use(bodyParser.json());
app.use(cors())

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

require('./routes/tweets.js')(app, io);

server.listen(port, () => {
    console.log('Server is up... running on port 3000')
})