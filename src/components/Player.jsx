import React, {  } from 'react'
import Main from './Main';
import Sidebar from './Sidebar'
import './styles/player.css'
import Footer from './Footer';


const Player = () => {
  return (
    <div className='player'>
      <div className='player__container'>
        <Sidebar/>
        <Main/>
      </div>
      <Footer/>
    </div>
  )
}

export default Player