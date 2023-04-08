require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

const { PRIVATE_KEY, ETHERSCAN_API_KEY, TESTNET_URL } = process.env;

module.exports = {
  solidity: '0.8.17',
  networks: {
    taiko: {
      url: TESTNET_URL,
      accounts: [PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: {
      taiko: ETHERSCAN_API_KEY
    },
    customChains: [
      {
        network: 'taiko',
        chainId: 167004,
        urls: {
          apiURL: 'https://explorer.a2.taiko.xyz/api',
          browserURL: 'https://explorer.a2.taiko.xyz'
        }
      }
    ]
  }
};
