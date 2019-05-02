const express = require('express')
        , http = require('http')
        , path = require('path')
        , bodyParser = require('body-parser')
        , port = process.env.PORT || 3000
        , cors = require('cors')
        , app = express();

const server = http.createServer(app);

app.use(bodyParser.json());
app.use(cors())

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

server.listen(port, () => {
    console.log('Server is up... running on port 3000')
})
