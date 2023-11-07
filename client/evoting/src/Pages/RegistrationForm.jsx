import React from "react";
import reactLogo from '../assets/Figure.svg'

export default function RegistrationPage() {
  return (
    <>
      <div className="h-full text-white w-full grid grid-cols-2">
        <div className="w-full h-full flex flex-col justify-start pt-10 mt-10">
          <h1 className="text-5xl">Registration Form</h1>
          <div className="flex-grow mt-10">
            {/* Form */}
            <form className="mt-6 h-full">
              <div className="mt-10 flex flex-col pl-10 justify-start  ">
                <label className="text-left p-2">Name</label>
                <input className="h-10" type="text" />
              </div>
              <div className="mt-16 flex flex-col pl-10 justify-start">
                <label className="text-left p-2">Email Address</label>
                <input className="h-10" type="text" />
              </div>
              <div className="mt-16 flex flex-col pl-10 justify-start">
                <label className="text-left p-2">Registration Number</label>
                <input className="h-10" type="text" />
              </div>
              <div className="mt-16 flex flex-col pl-10 justify-start">
                <label className="text-left p-2">Delegate Address</label>
                <input className="h-10" type="text" />
              </div>
              <div className="bg-blue-700 rounded-2xl w-36 h-10 flex justify-center items-center mt-10 ml-10">
                <button>SUBMIT</button>
              </div>
            </form>
            {/* End of Form */}
          </div>
        </div>
        <div className="h-full w-full flex justify-center items-center">
           
<img src={reactLogo} alt="yollow " className="h-1/2 w-1/2"/>
          
        </div>
      </div>
    </>
  );
}
