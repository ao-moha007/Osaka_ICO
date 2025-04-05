# OsakaToken ICO - A Decentralized Application for ERC-20 Token ICO

## Overview

The **OsakaToken ICO** is a decentralized application (DApp) built with **Next.js** and **Ethereum** using **Web3Modal** and **Ethers.js**. This application allows users to interact with the **OsakaToken** (an ERC-20-like token) by performing various actions such as checking token balances, transferring tokens, connecting to the ICO, and interacting with the Ethereum blockchain.

This ICO DApp features functionalities for minting and transferring the **OsakaToken**, as well as tracking token holders.

## Features

- **Connect with Ethereum**: Connect to Ethereum wallets like MetaMask and interact with the OsakaToken contract.
- **ICO Functionality**: Allows users to participate in the ICO by purchasing the token and tracking token balance.
- **Token Transfer**: Users can transfer tokens to other Ethereum addresses.
- **Token Holder Information**: The DApp retrieves and displays data on token holders and their balances.
- **Ether Transfer**: The DApp supports transferring Ether from the Hardhat local network to a MetaMask wallet.
- **Real-Time Blockchain Data**: Fetch real-time blockchain data like token balances, total supply, and transaction IDs from the contract.

## Tech Stack

- **Next.js**: React framework for building the user interface.
- **Ethers.js**: Ethereum JavaScript library for interacting with the Ethereum blockchain.
- **Web3Modal**: A modal for connecting Ethereum wallets such as MetaMask.
- **Solidity**: Ethereum smart contract language for implementing the ERC-20-like token.
- **Ethereum**: Ethereum blockchain for running the smart contract and managing transactions.

## Prerequisites

Before running the application, make sure you have:

1. **Node.js** installed.
2. **MetaMask** or another Ethereum wallet to interact with the blockchain.
3. **Hardhat** local network (if transferring Ether between wallets).
4. **Infura** or another Ethereum provider for accessing the network in production.

## Setup

### 1. Clone the repository

Clone the project from GitHub:

```bash
git clone https://github.com/ao-moha007/Osaka_ICO.git

```

### 2. Install dependencies

Install the required dependencies:

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and configure the required environment variables:

```env
NEXT_PUBLIC_INFURA_URL=YOUR_INFURA_URL
```

### 4. Run the development server

Start the development server:

```bash
npm run dev
```

### 5. Open the app

Visit the app at [http://localhost:3000](http://localhost:3000) in your web browser.

## Usage

### Connecting to MetaMask

Upon opening the DApp, the user will be prompted to connect their MetaMask wallet using **Web3Modal**. Once connected, the user can interact with the **OsakaToken** contract.

### Interacting with the ICO

Once connected, the user can perform the following actions:

1. **Check Account**: Displays the user's Ethereum account address and token balance.
2. **Transfer Tokens**: Users can send **OsakaTokens** to other addresses by entering the recipient's address and amount.
3. **Fetch Token Data**: Retrieve important information about the token such as the total supply, name, symbol, and owner details.
4. **Transfer Ether**: Users can transfer Ether from the Hardhat local network to their MetaMask wallet for testing purposes.
5. **Token Holders**: The app fetches and displays data for all token holders on the contract, including their token balance and transaction details.

### Functions

#### 1. **`checkConnection()`**
   - Checks the connection to the Ethereum network and fetches account information like the balance of **OsakaToken** and total token holders.
   
#### 2. **`ERC20FunToken()`**
   - Fetches the total supply, name, symbol, standard, owner, and other details of the **OsakaToken** from the smart contract.

#### 3. **`transferToken(address, value)`**
   - Allows users to transfer **OsakaTokens** to another Ethereum address.

#### 4. **`EtherHardhat()`**
   - Sends Ether from a Hardhat local network wallet to a MetaMask wallet for testing purposes.

#### 5. **`transferToMeta(walletAddress, amountToTransfer)`**
   - Transfers **OsakaTokens** from a Hardhat local wallet to a MetaMask wallet.

#### 6. **`tokenHolderData()`**
   - Fetches and logs the data of all token holders from the contract.

### Example

To transfer tokens:

```javascript
transferToken('0xRecipientAddress', 100);  // Transfer 100 tokens to the specified address
```

To fetch token data:

```javascript
ERC20FunToken();  // Fetch token details like total supply, name, and symbol
```

## Contract Details

### **Smart Contract: OsakaToken**

- **Name**: OsakaToken
- **Symbol**: OSK
- **Decimals**: 18
- **Total Supply**: The total number of tokens available in the ICO.
- **Owner**: The address that deployed the contract.
- **Token Holder**: A list of all token holder addresses and their balances.

### Contract ABI

The contract ABI (Application Binary Interface) and the address of the deployed contract are stored in the `constants.js` file:

```js
export const tokenABI = [...];  // ABI of the ERC-20 contract
export const tokenAddress = "0xYourTokenAddress";  // Address of the deployed contract
```

## License

This project is released under the **MIT License**.
