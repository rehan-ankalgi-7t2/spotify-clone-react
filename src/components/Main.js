import React from 'react'
import { useStateValue } from '../StateProvider'
import './styles/main.css'
import spotifyLogo from '../assets/icons/spotify-logo.png'

const Main = () => {

    const [{user}, dispatch] = useStateValue();
    // const name = user.display_name;
    return (
        <div className='main'>
            <div className='main__avatar'>
                <img src={user ? user.images[0].url : ''}/>
            </div>
            <h1>Hello <br/> {user ? user.display_name : 'user'}</h1>
        </div>
    )
}

export default Main