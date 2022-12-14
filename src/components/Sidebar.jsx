import React from 'react'
import './styles/sidebar.css'
import Playlists from './Playlists'
import { Add, Home, LibraryMusic, Search } from '@mui/icons-material'
import spotifyLogo from '../assets/icons/spotify-logo.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h1>
        <img src={spotifyLogo} alt="" />
        <span>Spotify</span>
      </h1>
      <span><Home/><p>Home</p></span>
      <span><Search/><p>Search</p></span>
      <span><LibraryMusic/><p>Library</p></span>
      <button><Add/> create playlist</button>
      <Playlists/>
    </div>
  )
}

export default Sidebar