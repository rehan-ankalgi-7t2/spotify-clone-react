import React, {  } from 'react'
import Main from './Main';
import Sidebar from './Sidebar'
import './styles/player.css'


const Player = () => {
  return (
    <div className='player'>
        <Sidebar/>
        <Main/>
    </div>
  )
}

export default Player