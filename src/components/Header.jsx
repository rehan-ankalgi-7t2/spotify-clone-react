import { Search } from '@mui/icons-material'
import React, { useContext } from 'react'
import './styles/header.css'
import { useStateValue } from '../StateProvider'

const Header = () => {

  const [{ user }] = useStateValue();

  return (
    <header className='header'>
        <div className="header__left">
          <div className='searchbar-container'>
            <Search/>
            <input type="search" name="search" id="searchbar" placeholder='Search for artists, playlists and tracks'/>
          </div>
        </div>
        <div className="header__right">
        <img src={user ? user.images[0].url : ''} alt=''/>
        <p>{user ? user.display_name : 'user'}</p>
        </div>
    </header>
  )
}

export default Header