const axios = require('axios');
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
const decrypt = async (data) => {
  const response = await axios.post('/decrypt', {data: data})
  return response.data
}

export default decrypt
