import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";


import {useContractWrite,useContractRead} from "wagmi"
import EvotingAbi from "../constants/Evoting.json"
import { EvotingAddress } from "../constants/addresses";


export default function VotingPanel() {
    const [presidentIndex,setPresidentIndex] = useState();
    const [accademicIndex,setAccademicIndex] = useState();
    const [sportsIndex,setSportsIndex] = useState();
    const [confirmVote,setConfirmVote] = useState(false);
    const [confirmVoteForSports,setConfirmVoteForSport] = useState(false);
    const [confirmVoteForAccademic,setConfirmVoteForAccademic] = useState(false);
    const [selectedPresidentIndex, setSelectedPresidentIndex] = useState(null);
    const [selectedSportsIndex, setSelectedSportsIndex] = useState(null);
    const [selectedAccademicIndex, setSelectedAccademicIndex] = useState(null);



    const { data:president, isError, isLoading } = useContractRead({
        address: EvotingAddress,
        abi: EvotingAbi,
        functionName: 'getAllPresidents',
        
      })
      //getAllSports reps
      const { data:sportsrep, isError:SportError, isLoading:SportLoanding } = useContractRead({
        address: EvotingAddress,
        abi: EvotingAbi,
        functionName: 'getAllSports',
        
      })
      //academic reps
      //getAllSports reps
      const { data:accademicrep, isError:AccademicError, isLoading:accademicLoanding } = useContractRead({
        address: EvotingAddress,
        abi: EvotingAbi,
        functionName: 'getAllAccademicReps',
        
      })
      //vote for president
      const {writeAsync:voteforPresident} = useContractWrite({
        address: EvotingAddress,
        abi:EvotingAbi,
        functionName:"voteForPresident",
        args:[presidentIndex]
      })
      //voting for accademic
      
      const {writeAsync:voteforAccademic} = useContractWrite({
        address: EvotingAddress,
        abi:EvotingAbi,
        functionName:"voteForAccademicRep",
        args:[accademicIndex]
      })
      //function handle voting for accademic
      const handleVotingForAccademic = async(index)=>{
        setAccademicIndex(index);
        try{
await voteforAccademic();
setConfirmVoteForAccademic(false);

        }catch(error){
            console.log("Voting Error",error);
        }
      }
      //voting for sports
      const {writeAsync:voteforsports} = useContractWrite({
        address: EvotingAddress,
        abi:EvotingAbi,
        functionName:"voteForSports",
        args:[sportsIndex]
      })
      //function handle voting for accademic
      const handleVotingForSports = async(index)=>{
        setSportsIndex(index);
        try{
await voteforsports();
setConfirmVoteForSport(false);

        }catch(error){
            console.log("Voting Error",error);
        }
      }
      //function handle voting for president
      const handleVotingForPresident = async(index)=>{
        //setPresidentIndex(index);
        try{
await voteforPresident();
setConfirmVote(false);

        }catch(error){
            console.log("Voting Error",error);
        }
      }
      //setIndex
      //function handle voting for president
      const handleVotingForPresidentIndex = async(index)=>{
        setPresidentIndex(index);
    setSelectedPresidentIndex(index);
    setConfirmVote(true);
        
      }

       //function handle voting for Sports
       const handleVotingForSportsIndex = async(index)=>{
        setSportsIndex(index);
    setSelectedSportsIndex(index);
    setConfirmVoteForSport(true);
        
      }
      //function handle voting for Sports
      const handleVotingForAccademicIndex = async(index)=>{
        setAccademicIndex(index);
    setSelectedAccademicIndex(index);
    setConfirmVoteForAccademic(true);
        
      }
    const items =[
        {_name:"terry",
        _regNo:"sct45465",
        _school:"jkuat",
          noofVotes:12345},{_name:"terry",
          _regNo:"sct45465",
          _school:"jkuat",
            noofVotes:12345}]

            useEffect(()=>{
  
            },[])

useEffect(()=>{
    console.log("data freelancerss",president);
},[confirmVote,confirmVoteForAccademic,confirmVoteForSports])
  return (
    <>
      <div className="min-h-full h-screen text-black w-full bg-lime-200 relative">
        <Navbar />
        <div className=" w-full justify-around items-center grid grid-cols-3 gap-2 ml-4 mr-4 ">
            <div>
                <span>PRESIDENT</span>
            </div>
            <div>
                <span>SPORTS REP</span>
            </div>
            <div>
                <span>ACCADEMIC REP</span>
            </div>

        </div>
        <div className="h-full w-full  items-center grid grid-cols-3 gap-2 ml-4 mr-4">

        <div className="w-3/4 grid grid-cols-1 gap-4">
            {president?.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-md shadow-md w-full"
              >
          <div>
          <p className="text-sm text-black font-semibold mb-2">Name:<span className="ml-16">{item._name}</span></p>
                <p className="text-gray-600 mb-2">Reg No: {item._regNo}</p>
                <p className="text-gray-600 mb-2">School: {item._school}</p>
                <p className="text-gray-600">Votes: {Number(item.noofVotes)}</p>
          </div>
          <div className="flex justify-center rounded items-center bg-green-400">
            {selectedPresidentIndex === index && confirmVote ?<button onClick={()=>{handleVotingForPresident(index)}} >Confirm</button>:<button onClick={()=>{handleVotingForPresidentIndex(index)}} >Vote</button>}
            

          </div>
                

              </div>
            ))}
          </div>
          <div className="w-3/4 grid grid-cols-1 gap-4">
            {sportsrep?.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-md shadow-md w-full"
              >
          <div>
          <p className="text-sm text-black font-semibold mb-2">Name:<span className="ml-16">{item._name}</span></p>
                <p className="text-gray-600 mb-2">Reg No: {item._regNo}</p>
                <p className="text-gray-600 mb-2">School: {item._school}</p>
                <p className="text-gray-600">Votes: {Number(item.noofVotes)}</p>
          </div>
          <div className="flex justify-center rounded items-center bg-green-400">
          {selectedSportsIndex === index && confirmVoteForSports ?<button onClick={()=>{handleVotingForSports(index)}} >Confirm</button>:<button onClick={()=>{handleVotingForSportsIndex(index)}} >Vote</button>}

          </div>
                

              </div>
            ))}
          </div>
          <div className="w-3/4 grid grid-cols-1 gap-4">
            {accademicrep?.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-md shadow-md w-full"
              >
          <div>
          <p className="text-sm text-black  font-semibold mb-2">Name:<span className="ml-16">{item._name}</span></p>
                <p className="text-gray-600 mb-2">Reg No: {item._regNo}</p>
                <p className="text-gray-600 mb-2">School: {item._school}</p>
                <p className="text-gray-600">Votes: {Number(item.noofVotes)}</p>
          </div>
          <div className="flex justify-center rounded items-center bg-green-400">
          {selectedAccademicIndex === index && confirmVoteForAccademic ?<button onClick={()=>{handleVotingForAccademic(index)}} >Confirm</button>:<button onClick={()=>{handleVotingForAccademicIndex(index)}} >Vote</button>}

          </div>
                

              </div>
            ))}
          </div>
          
        </div>
        
      </div>
    </>
  );
}
