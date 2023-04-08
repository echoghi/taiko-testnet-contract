# taiko-testnet-contract

A testnet contract to explore development in Taiko's zkEVM rollup.

## Prerequisites

- Network setup: https://taiko.xyz/docs/guides/configure-your-wallet

## Deploy with Hardhat

1. If you haven't already, install [nodejs](https://nodejs.org/en/download/) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install).
2. Run `yarn install` to install dependencies.
3. Create a `.env` file following the example `.env.example` in the root directory.
4. Run `yarn compile` to compile the contract.
5. Run `yarn deploy` or `yarn deployLedger` (requires frame wallet) to deploy the contract on the Taiko Testnet.
6. Once you deploy, run `npx hardhat verify --network taiko <deployed address>` to verify your contract (etherscan api key required).
