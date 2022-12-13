import React from 'react'
import './styles/sidebar.css'
import Playlists from './Playlists'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul>
          <li><a href="#">🏠 Home</a></li>
          <li><a href="#">🔍 Search</a></li>
          <li><a href="#">📚 Your Library</a></li>
          <li><a href="#">❤ Liked Songs</a></li>
          <li><a href="#">➕ Create Playlist</a></li>
        </ul>
        <Playlists/>
    </div>
  )
}

export default Sidebar