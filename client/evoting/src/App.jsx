import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './Pages/LandingPage'
import RegistrationPage from './Pages/RegistrationForm'
import VotingPanel from './Pages/VotingPanel'
// forge create --rpc-url   https://rpc-mumbai.maticvigil.com --private-key  952369c437b7813b1bfb94ab753a75ed458880e05fe9e753f34ceba7147c1460     src/Evoting.sol:Evotin
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-blue-900 w-full  h-screen flex'>
        <VotingPanel/>
      </div>
    </>
  )
}

export default App
