const CryptoJS = require("crypto-js")

const secret = "XRxPzeZcxoukhsiX88npc7AL5cu5dDm7"

exports.handle = function(e, ctx, cb) {
  const body = JSON.parse(e.body)

  console.log('body', e.body)
  console.log('body data', e.body.data)
  console.log('parsed body', JSON.parse(e.body))
  console.log('parsed body data', JSON.parse(e.body).data)
  console.log('pb', body)
  console.log('pbd', body.data)
  // console.log('data', params.data)
  const data = CryptoJS.AES.decrypt(body.data, secret).toString(CryptoJS.enc.Utf8)
  let response = {
    statusCode: 200,
    body: data
  };
  cb(null, response);
}
