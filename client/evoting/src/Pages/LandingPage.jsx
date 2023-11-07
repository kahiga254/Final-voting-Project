import React from "react";

export default function LandingPage(){
    return(
        <>
        <div className="h-full text-white  w-full">
        <div className="h-1/2 w-full">
  <div className="h-1/2 w-full flex-col text-7xl justify-start items-start pt-10 ">
    <h1 className="text-7xl pb-10">Hello There...</h1>
    <h1 className="pb-10">Welcome to the Online Voting</h1>
    <h1 className="pb-10">Platform</h1>
    <h1 className="text-3xl">Start making your decision today.</h1>
  </div>
 
  
</div>
<div className="w-full justify-start text-white mt-48">
  <div className="w-1/2 h-full flex justify-around">
    <div className="bg-gray-400 w-40 h-10 text-center rounded-xl flex items-center justify-center">
      <button className="text-center">LOGIN</button>
    </div>
    <div>
      <button className="w-40 h-10 bg-gray-400 text-white rounded-xl flex items-center justify-center">REGISTER</button>
    </div>
  </div>
</div>




        </div>
       </>
    )
}