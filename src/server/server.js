const express = require('express')
        , http = require('http')
        , path = require('path')
        , bodyParser = require('body-parser')
        , port = process.env.PORT || 5000
        , cors = require('cors')
        , hostValidation = require('host-validation')
        , app = express();

const CryptoJS = require("crypto-js")

const secret = "XRxPzeZcxoukhsiX88npc7AL5cu5dDm7"

const server = http.createServer(app);

app.use(bodyParser.json());
app.use(cors())
// app.use(hostValidation({ honsts: [/http:\/\/localhost/, /http:\/\/ec2-63-35-203-203.eu-west-1.compute.amazonaws.com/]}))
// app.options('*', cors())

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

app.post('/decrypt', function (req, res) {
  const data = CryptoJS.AES.decrypt(req.body.data, secret).toString(CryptoJS.enc.Utf8)
  res.send(data)
})

app.listen(port, (req,res) => {
  console.log(`Server is up... running on port ${port}`)
})
// server.listen(port, (req,res) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
// 	res.setHeader('Access-Control-Request-Method', '*');
// 	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
// 	res.setHeader('Access-Control-Allow-Headers', '*');
//   console.log('Server is up... running on port 3000')
// })
