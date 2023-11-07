import { useWeb3Modal } from '@web3modal/wagmi/react'

export default function ConnectButton() {
  // 4. Use modal hook
  const { open } = useWeb3Modal()

  return (
    <>
    <div className='flex justify-around items-center h-20'>
    <button onClick={() => open()}> Connect Modal</button>
      <button onClick={() => open({ view: 'Networks' })}>Open Network </button>
    </div>
     
    </>
  )
}