require('@nomiclabs/hardhat-waffle')
require('dotenv').config()

const PRIVATE_KEY = process.env.PRIVATE_KEY

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    hardhat: {},
    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    crossfiTestnet: {
      url: '',
      chainId: 4157,
      accounts: [PRIVATE_KEY],
    },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
}
