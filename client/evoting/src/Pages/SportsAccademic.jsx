import React, { useState } from "react";
import Navbar from "../components/Navbar";
import reactLogo from '../assets/Figure.svg';
import { useAccount } from 'wagmi'
import {useContractWrite,useContractRead} from "wagmi"
import EvotingAbi from "../constants/Evoting.json"
import { EvotingAddress } from "../constants/addresses";

export default function RegistrationSportPage() {
  const { address, isConnecting, isDisconnected } = useAccount()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [registrationNum, setRegistrationNum] = useState("");
  const [delegate, setDelegateAddress] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

  const handleRegistrationNumber = (e) => {
    setRegistrationNum(e.target.value);
    console.log(e.target.value);
  };

  const handleAddress = (e) => {
    setDelegateAddress(e.target.value);
    console.log(address);
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    registerPrez(); // Call your registration function
  };
  //write function
  const {
        
    writeAsync: registerPresident
    
  } = useContractWrite({
    address:EvotingAddress,
    abi:EvotingAbi,
    functionName: "addSportsRep",
    args: [name,registrationNum,delegate],
   
    
  })

  const registerPrez =async()=>{
    try{
await registerPresident();
    }catch(error){
      console.log("error register",error);
    }
  }

  return (
    <div className="h-full text-black w-full bg-lime-200">
      <Navbar />
      <div className="h-full text-black w-full grid grid-cols-2 bg-lime-200">
        <div className="w-full h-full flex flex-col justify-start pt-10 mt-10">
          <h1 className="text-5xl">Sport Registration Form</h1>
          <div className="flex-grow mt-10">
            <form className="mt-6 h-full" onSubmit={handleSubmit}>
              <div className="mt-10 flex flex-col pl-10 justify-start">
                <label className="text-left p-2">Name</label>
                <input
                  className="h-10 text-black text-center"
                  type="text"
                  onChange={handleName}
                  value={name}
                />
              </div>
              {/* <div className="mt-16 flex flex-col pl-10 justify-start">
                <label className="text-left p-2">Email Address</label>
                <input
                   className="h-10 text-black text-center"
                  type="text"
                  onChange={handleEmail}
                  value={email}
                />
              </div> */}
              <div className="mt-16 flex flex-col pl-10 justify-start">
                <label className="text-left p-2">Registration Number</label>
                <input
                   className="h-10 text-black text-center"
                  type="text"
                  onChange={handleRegistrationNumber}
                  value={registrationNum}
                />
              </div>
              <div className="mt-16 flex flex-col pl-10 justify-start">
                <label className="text-left p-2">School </label>
                <input
                   className="h-10 text-black text-center"
                  type="text"
                  onChange={handleAddress}
                  placeholder="SCIT"
                  value={delegate}
                />
              </div>
              <div className="bg-teal-400 rounded-2xl w-36 h-10 flex justify-center items-center mt-10 ml-10">
                <button type="submit">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
        <div className="h-full w-full flex justify-center items-center">
          
          <img src={reactLogo} alt="yellow" className="h-1/2 w-1/2" />
          
         
        </div>
      </div>
    </div>
  );
}
