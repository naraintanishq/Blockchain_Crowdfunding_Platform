'use client';
import React, { useState, useEffect, children } from "react";
import Web3Modal from "web3modal"; //Wenb3Modal from
import { ethers } from "ethers";


//INTERNAL IMPORT
import { LockAddress, LockABI } from "./contants";


const fetchContract = (signerOrProvider) =>
    new ethers.Contract(LockAddress, LockABI, signerOrProvider); //44:24

export const CrowdFundingContext = React.createContext();  //CrowdFunding Context

export const CrowdFundingProvider = ({ children }) => {
    const titleData = "Crowd Funding Contract";
    const [currentAccount, setCurrentAccount] = useState("");

    const createCampaign = async (campaign) => {
        const { title, description, amount, deadline} = campaign;
        const web3Modal = new Web3Modal(); //new Wenb3Modal
        const connection = await web3Modal.connect();
        const provider = new ethers.BrowserProvider(connection);
        const signer = await provider.getSigner();
        const Contract = fetchContract(signer);

        // console.log(currentAccount);
        try{
            const transaction =  await Contract.createCampaign(
                currentAccount, //Owner
                title, //title
                description, //description
                ethers.parseUnits(amount, 18), //converting amount to ethers till 18 decimal points
                new Date(deadline).getTime() //deadline
            );

            await transaction.wait();

            console.log("Contract call success", transaction);
        } catch(error){
            console.log("contract call failure: ", error);
        }
    };

    const getCampaigns = async () => {
        const provider = new ethers.JsonRpcProvider("http://localhost:8545");
        const contract = fetchContract(provider);

        const campaigns = await contract.getCampaigns();

        const parsedCampaigns = campaigns.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.formatEther(campaign.target.toString()),
            deadline: Number(campaign.deadline),
            amountCollected: ethers.formatEther(campaign.amountCollected.toString()),
            pId: i,
        }));

        return parsedCampaigns;
    };

    const getUserCampaigns = async() => {
        const provider = new ethers.JsonRpcProvider("http://localhost:8545");
        const contract = fetchContract(provider);

        const allCampaigns = await contract.getCampaigns();

        const accounts = await window.ethereum.request({
            method: "eth_accounts",  
        })
        const currentUser = accounts[0];

        const filteredCampaigns = allCampaigns.filter(
            (campaign) => campaign.owner === currentUser  //"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
        );

        const userData = filteredCampaigns.map((campaign, i) => ({
            owner: campaign.owner,
            title: campaign.title,
            description: campaign.description,
            target: ethers.formatEther(campaign.target.toString()),
            deadline: Number(campaign.deadline),
            amountCollected: ethers.formatEther(campaign.amountCollected.toString()),
            pId: i,
        }));

        return userData;
    };

    const donate = async(pId, amount) => {
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.BrowserProvider(connection);
        const signer = await provider.getSigner();
        const contract = fetchContract(signer);

        const campaignData = await contract.donateTOCampaign(pId, {
            value: ethers.parseEther(amount),
        });

        await campaignData.wait();
        location.reload();

        return campaignData;
    };

    const getDonations = async(pId) => {
        const provider = new ethers.JsonRpcProvider("http://localhost:8545");
        const contract = fetchContract(provider);

        const donations = await contract.getDonators(pId);
        const numberOfDonations = donations[0].length;

        const parsedDonations = [];

        for(let i = 0; i < numberOfDonations ; i++) {
            parsedDonations.push({
                donator: donations[0][i],
                donation: ethers.formatEther(donations[1][i].toString()),
            })
        }

        return parsedDonations;
    };

    //---CHECK WALLET CONNECTION

    const checkIfWalletConnected = async() => {
        try {
            if(!window.ethereum)
                return setOpenError(true), setError("Install MetaMask");

        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        });

        if(accounts.length) {
            setCurrentAccount(accounts[0]);
        } else{
            console.log("No Account Found");
        }
        }
        catch(error){
            console.log("Error while connecting to wallet");
        }
    };

    useEffect(() => {
        checkIfWalletConnected();
    },[]);

    const connectWallet = async() => {
        try{
            if(!window.ethereum) return console.log("Install MetaMask");

            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setCurrentAccount(accounts[0]);
        }catch (error) {
            console.log("Error while connecting to wallet");
        }
    };

    // useEffect(() => {
    //     window.ethereum.on('accountsChanged', checkIfWalletConnected);
    //     return () => {
    //         window.ethereum.removeListener('accountsChanged', checkIfWalletConnected);
    //     };
    // }, []);
    
    useEffect(() => {
    window.ethereum.on('accountsChanged', checkIfWalletConnected);
    return () => {
        window.ethereum.removeListener('accountsChanged', checkIfWalletConnected);
    };
}, []);


    return(
        <CrowdFundingContext.Provider 
          value={{
            titleData,
            currentAccount,
            createCampaign,
            getCampaigns,
            getUserCampaigns,
            donate,
            getDonations,
            connectWallet
          }}> 
          {children} 
          </CrowdFundingContext.Provider>
    );
};