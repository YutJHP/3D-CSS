import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './AIFriend.scss'

function AIFriend() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='buttonLayout'>
      <div className='bottonSlot'>
      <div className='cube'>
          <div className='front'><div className='frontText'>Play</div></div>
          <div className='back'></div>
          <div className='left'></div>
          <div className='right'></div>
          <div className='top'></div>
          <div className='bottom'></div>
        </div>
      </div>
      <div className='bottonSlot'>
        <div className='cube'>
          <div className='front'><div className='frontText'>Work</div></div>
          <div className='back'></div>
          <div className='left'></div>
          <div className='right'></div>
          <div className='top'></div>
          <div className='bottom'></div>
        </div>
        </div>
        <div className='bottonSlot'>
        <div className='cube'>
          <div className='front'><div className='frontText'>Chat</div></div>
          <div className='back'></div>
          <div className='left'></div>
          <div className='right'></div>
          <div className='top'></div>
          <div className='bottom'></div>
        </div>
        </div>
        <div className='bottonSlot'>
        <div className='cube'>
          <div className='front'><div className='frontText'>Resume</div></div>
          <div className='back'></div>
          <div className='left'></div>
          <div className='right'></div>
          <div className='top'></div>
          <div className='bottom'></div>
        </div>
        </div>
    </div>

    </>
  )
}



export default AIFriend;

