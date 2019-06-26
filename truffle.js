const HDWalletProvider = require("truffle-hdwallet-provider");
require('dotenv').config()  // Store environment-specific variable from '.env' to process.env
console.log(process.env.MNENOMIC_PROD, process.env.INFURA_API_KEY)

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider("89BF7519DACFC74F1D506DD24E2068EB1716FDC7EF76F1D93B4C3213C189C4D7", "https://ropsten.infura.io/v3/a301162f38e54281a1c6e25656459dfc")
      },
      network_id: 3,
      gas: 3000000
    },
    kovan: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC, "https://kovan.infura.io/v3/" + process.env.INFURA_API_KEY),
      network_id: 42,
      gas: 3000000,
      gasPrice: 10000000000
    },
    main: {
      provider: () => new HDWalletProvider(process.env.MNENOMIC_PROD, 'https://mainnet.infura.io/v3/' + process.env.INFURA_API_KEY),
      network_id: 1,
      gas: 3000000,
      gasPrice: 10000000000
    }
  }
};
