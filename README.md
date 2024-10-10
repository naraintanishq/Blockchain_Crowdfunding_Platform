# Blockchain Crowdfunding platform
This project is a decentralized crowdfunding platform built using blockchain technology. It allows users to create and contribute to campaigns in a secure and transparent manner. Donors can send funds directly to campaign owners using Ethereum-based smart contracts, ensuring trust and immutability. The platform integrates MetaMask for seamless transaction handling and displays campaign details, such as title, description, target amount, and collected donations. Additionally, the platform features a chatbot for user assistance and a donation pop-up modal to facilitate easy contributions.

Try running some of the following tasks:

Note - Make sure Metamask is installed in your browser, and use the same version in the json.comfig file. Also setup hardhat localhost server for test coins.
```shell commands to run the project
1. npm init
2. npx hardhat clean
3. npx hardhat compile
4. npx hardhat node //This code will give you test accounts with 10000 test coins for testing purpose, in the terminal copy the private key and import an account in your metamask wallet using this private key
5. npx hardhat run --network localhost scripts/deploy.js
6. npm run dev
```
