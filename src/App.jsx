import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Playground.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <body>
      <div className='scene'>
        <div className='floor'></div>
        <div className='cube' onClick={e=>Green()} onMouseEnter={e => Hover()} onMouseLeave={e => Reset()}>
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
    <a href='YourNewFriend.html'>Click me to see more :D</a>
    </>
  )
}

var clicked=false;

function Green(){
  if(clicked){
    document.getElementsByClassName("front")[0].style.backgroundColor = "#0ff7";
    document.getElementsByClassName("back")[0].style.backgroundColor = "#0ff7";
    document.getElementsByClassName("left")[0].style.backgroundColor = "#0ff7";
    document.getElementsByClassName("right")[0].style.backgroundColor = "#0ff7";
    document.getElementsByClassName("top")[0].style.backgroundColor = "#0ff7";
    document.getElementsByClassName("bottom")[0].style.backgroundColor = "#0ff7";
    clicked = false;
  } else {
    document.getElementsByClassName("front")[0].style.backgroundColor = "green";
    document.getElementsByClassName("back")[0].style.backgroundColor = "green";
    document.getElementsByClassName("left")[0].style.backgroundColor = "green";
    document.getElementsByClassName("right")[0].style.backgroundColor = "green";
    document.getElementsByClassName("top")[0].style.backgroundColor = "green";
    document.getElementsByClassName("bottom")[0].style.backgroundColor = "green";
    clicked = true;
  }
}


function Hover(){

  document.getElementsByClassName("front")[0].style.backgroundColor = "#85050597";
  document.getElementsByClassName("back")[0].style.backgroundColor = "#85050597";
  document.getElementsByClassName("left")[0].style.backgroundColor = "#85050597";
  document.getElementsByClassName("right")[0].style.backgroundColor = "#85050597";
  document.getElementsByClassName("top")[0].style.backgroundColor = "#85050597";
  document.getElementsByClassName("bottom")[0].style.backgroundColor = "#85050597";


}


function Reset(){
  if(clicked){
    document.getElementsByClassName("front")[0].style.backgroundColor = "green";
    document.getElementsByClassName("back")[0].style.backgroundColor = "green";
    document.getElementsByClassName("left")[0].style.backgroundColor = "green";
    document.getElementsByClassName("right")[0].style.backgroundColor = "green";
    document.getElementsByClassName("top")[0].style.backgroundColor = "green";
    document.getElementsByClassName("bottom")[0].style.backgroundColor = "green";
  } else {
    document.getElementsByClassName("front")[0].style.backgroundColor = "#0ff7";
    document.getElementsByClassName("back")[0].style.backgroundColor = "#0ff7";
    document.getElementsByClassName("left")[0].style.backgroundColor = "#0ff7";
    document.getElementsByClassName("right")[0].style.backgroundColor = "#0ff7";
    document.getElementsByClassName("top")[0].style.backgroundColor = "#0ff7";
    document.getElementsByClassName("bottom")[0].style.backgroundColor = "#0ff7";
  }
}

export default App;

