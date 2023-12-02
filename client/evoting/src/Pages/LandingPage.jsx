import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomeNavBar from "../components/HomeNavbar";
import VotingImage from "../assets/voting2.png"
import ConnectButton from "../components/Connect";
export default function LandingPage(){
  const navigate = useNavigate();
    return(
        <>
        <div className="h-full text-black  w-full bg-lime-200 ">
          {/* <HomeNavBar/> */}
          <div className="flex justify-between items-center mt-10 m-20">
            <div className="w-full h-full">
<div>
<img src={VotingImage} style={{ width: '500px', height: '500px' }}  alt="Voting Image"/>
</div>
            </div>
            <div className="flex flex-col items-center h-full w-full text-black gap-16 ">
            <span className="text-7xl md:text-9xl">Online</span>
            <span className="text-7xl">Voting</span>
            <div className="flex flex-col 
            
            ">
              <span>Hello There...</span>
              <span>
Welcome to the JKUAT Student's council Online Voting
Platform</span>
<span>
Start making your decision today.</span>
            </div>
           
<ConnectButton/>
            
            
            </div>

          </div>
          

        





        </div>
       </>
    )
}