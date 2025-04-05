
import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image'; // Assuming you're using Next.js
import Web3Modal from 'web3modal';
import { ethers } from "ethers";
import { tokenABI , tokenAddress } from './constants';



const fetchContractERC20 = (signerOrProvider) => new ethers.Contract(tokenAddress, tokenABI, signerOrProvider);
console.log("tokenABI:",tokenABI);
//const contractInstance = fetchContractERC20(signerOrProvider);
//console.log(contractInstance);
export const ERC20ICOContext = React.createContext();
export const ERC20Provider = ({ children }) => {
  
  //-----USER ACCOUNT
  const [holderToken, setHolderArray] = useState([]);
  const [account, setAccount] = useState('');
  const [accountBalance, setAccountBalance] = useState('');
  const [userId, setUserId] = useState('');


  //------TOKEN INFO
  const [NoOfToken, setNoOfToken] = useState("");
  const [TokenName, setTokenName] = useState("");
  const [TokenStandard, setTokenStandard] = useState("");
  const [TokenSymbol, setTokenSymbol] = useState("");
  const [TokenOwner, setTokenOwner] = useState("");
  const [TokenOwnerBal, setTokenOwnerBal] = useState("");
  
  //----------CONNECTING WALLET APP
  const checkConnection = async () => {
    try {
      if (!window.ethereum) return console.log("Install MetaMask");
      const accounts = await window.ethereum.request({ method: "eth_accounts" });
      setAccount(accounts[0]);
      

      //------- CREATING CONNECTIION & FETCHING DATA
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const acc = await provider.listAccounts();
      console.log("Connected accounts:", acc);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      console.log("Signer address:", address);
      const contract = fetchContractERC20(signer);
      console.log("Contract instance:", contract);


      //----GET ALL THE TOKEN HOLDERS 
      const allTokenHolder = await contract.balanceOf(accounts[0]);
      const network = await provider.getNetwork();
      console.log("Provider network:", network);
      console.log("Balance of all token holder :", allTokenHolder.toBigInt());
      setAccountBalance(allTokenHolder.toBigInt());
      const totalHolder = await contract.transactionId();
      setUserId(ethers.BigNumber.from(totalHolder));

    } catch (error) {
      console.log("App is not connected");
    }
  };


  //------ Transfer ETHERS to METAMASK wallet by HARDHAT
 const EtherHardhat = async () => {
    try{
    // Connect to the Hardhat local network
    const hardhatProvider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545"); // Default Hardhat RPC URL
  
    // Specify the Hardhat account that has tokens
    const senderPrivateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"; // Replace with the private key of the Hardhat account
    const senderWallet = new ethers.Wallet(senderPrivateKey, hardhatProvider);
    const tx = await senderWallet.sendTransaction({
      to: "0x78A82c351b5CaAfc47b36f1c38FC837262A7f677", // The address to fund
      value: ethers.utils.parseEther("100"), // Amount in Ether
    });
    await tx.wait();
    console.log("Ether transferred successfully!");
  }catch(error){
    console.group("ethers not transfered");
  }
  };


  //--------ERC20 CONTRACT
  const ERC20FunToken = async () => {
    try {
      //--------------CONNECTION
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContractERC20(signer);
      //-----TOKEN SUPPLY
      const supply = await contract.totalSupply();
      const totalSupply = ethers.BigNumber.from(supply);
      console.log("total suplly is : ", supply.toString());
      setNoOfToken(totalSupply);
      //---TOKEN NAME
      const name = await contract.name();
      console.log(name);
      setTokenName(name);

      //--TOKEN SYMBOL
      const symbol = await contract.symbol();
      setTokenSymbol(symbol);

      //----TOKEN STANDARD
      const standard = await contract.standard();
      setTokenStandard(standard);

      //----TOKEN OWNER
      const ownerOfContract = await contract.ownerOfContract();
      setTokenOwner(ownerOfContract);

      //-----OWNER TOKEN BALANCE
      const balanceToken = await contract.balanceOf(ownerOfContract);
      setTokenOwnerBal(balanceToken.toBigInt());
      console.log("Balance of the provider ",ownerOfContract," is :" ,balanceToken.toBigInt());
      const balanceUser = await contract.balanceOf(signer.getAddress());
      console.log("Balance of the user ", signer.getAddress()," is ",balanceUser.toBigInt());
    } catch (error) {
      console.error("Error in ERC20 token", error);
    }
  };

 const transferToken = async (address, value) => {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const acc = await provider.listAccounts();
      console.log("Connected accounts while transfer: unknown", acc);
      const signer = provider.getSigner();
      const address1 = await signer.getAddress();
      console.log("Signer address while transfer:", address1);
      const contract = fetchContractERC20(signer);
      console.log(" transfer to address :", address);
      console.log("ammount sent by value : ", value );
      const balance = await contract.balanceOf(address);
      console.log("Balance stringed:", balance.toString());
      console.log("Balance parsed :", ethers.utils.formatUnits(balance, 18)); // Display balance in human-readable format
      
      const valueInWei = ethers.utils.parseUnits(value.toString(), 18); // Convert value to 18 decimal format
      console.log("calue raw :", value);
      console.log("calue raw to string :", value.toString());
      console.log("value in wei:", valueInWei );
      console.log("calue in wei to string :", valueInWei.toString());
      const nonce = await provider.getTransactionCount(address1, "latest"); // Get the current nonce
      const transfer = await contract.transfer(address, value.toString(),{ nonce });//{ nonce } is very important to avoid conflict in many transaction pending
      
      //await transfer.wait();
      console.log("Transfer completed successfully!");
      //window.location.reload();// Optionally reload the page
      //window.location.wait();
      //console.log(address, " : " ,address.balanceOf());
    } catch (error) {
      console.log("Something went wrong while transfer token");
    }

  };


//   Account #0: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 (10000 ETH)
// Private Key: 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80


  //---------------TRANSFER TOKENS TO MY WALLET
  const transferToMeta = async (walletAddress, amountToTransfer) => {
    try {
      // Connect to the Hardhat local network
      const hardhatProvider = new ethers.providers.JsonRpcProvider("http://127.0.0.1:8545"); // Default Hardhat RPC URL
  
      // Specify the Hardhat account that has tokens
      const senderPrivateKey = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"; // Replace with the private key of the Hardhat account
      const senderWallet = new ethers.Wallet(senderPrivateKey, hardhatProvider);
  
      // Make sure to use the correct token contract address
      //const tokenAddress = tokenAddress; // Replace with your token contract address
      //const tokenABI = tokenABI;
  
      // Create a contract instance for the ERC20 token
      const contract = new ethers.Contract(tokenAddress, tokenABI, senderWallet);
  
      // Convert the amount to the correct format (based on token's decimals) THIS WAS THE PROBLEM THAT CAUSES THE NON TRANSFER
      const amount = ethers.utils.parseUnits(amountToTransfer.toString(), 18); // Replace 18 with the token's decimals if different
      //const bal = contract.balanceOf(walletAddress);
      //console.log(`Transferring just ${amount} tokens from ${bal.toString()} `);
      // Execute the transfer from the Hardhat account to the connected MetaMask wallet
      console.log(`Transferring ${amount} tokens to ${walletAddress} from ${senderWallet.address} `);
      const bal = await contract.balanceOf(senderWallet.address);
      console.log("Token Balance of the sender :", bal.toString());
      const bal2 = await contract.balanceOf(walletAddress);
      console.log("Token Balance of the reciever",walletAddress ,": ", bal2.toString());
      const nonce = await hardhatProvider.getTransactionCount(walletAddress, "latest"); // Get the current nonce

      const tx = await contract.transfer(walletAddress, amountToTransfer);
  
      console.log("Transaction sent! Waiting for confirmation...");
      await tx.wait(); // Wait for the transaction to be mined
      console.log("Tokens transferred successfully!");
    } catch (error) {
      console.error("Something went wrong during the transfer:", error);
    }
  };
  
  
  //-----------GET TOKEN HOLDER DATA
  const tokenHolderData = async () => {
    try {
      const web3modal = new Web3Modal();
      const connection = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);
      const signer = provider.getSigner();
      const contract = fetchContractERC20(signer);
      console.log(contract.name);
      const allTokenHolder = await contract.getTokenHolder();
      
      allTokenHolder.map(async (el) => {
        const singleHolderData = await contract.getTokenHolderData(el);
        console.log("this is one element of tokenholder : ",singleHolderData[0].toString(),singleHolderData[1].toString(),singleHolderData[2].toString(),singleHolderData[3].toString(),singleHolderData[4].toString());
        holderToken.push(singleHolderData);
        console.log(holderToken);

      })

    } catch (error) {
      console.log("Something wrong in getting data");
    }
  }

  return (
    <>
    
    <ERC20ICOContext.Provider value={{  holderToken,transferToken,EtherHardhat,checkConnection, ERC20FunToken, transferToMeta, tokenHolderData, account, accountBalance, userId ,NoOfToken,TokenName ,TokenStandard ,TokenSymbol ,TokenOwner ,TokenOwnerBal}}>{children}</ERC20ICOContext.Provider>
 
    </>
    );
};
