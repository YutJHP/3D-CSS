import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Playground.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      <div className='scene'>
        <div className='floor'></div>
        <div className='cube'>
          <div className='front'></div>
          <div className='back'></div>
          <div className='left'></div>
          <div className='right'></div>
          <div className='top'>
             <div className='ballShadow'></div>
          </div>
          <div className='bottom'></div>
        </div>
        <div className='ball'></div>
      </div>
    </body>
  )
}

export default App
