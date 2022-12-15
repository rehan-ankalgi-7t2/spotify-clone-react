import React from 'react'
import { useStateValue } from '../StateProvider'
import Header from './Header';
import './styles/main.css'

const Main = () => {
    const [{user, }] = useStateValue();

    const mainStyle = {
        // backgroundImage: `url(${user.images[0].url})`
    };

    // const name = user.display_name;
    return (
        <div className='main' style={mainStyle}>
            <Header/>
            <div className='main__info'>
                <div className='main__avatar'>
                    <img src={user ? user.images[0].url : ''} alt=''/>
                </div>
                <div className="main__playlist--info">
                    <h5>PLAYLIST</h5>
                    <h1>{user ? user.display_name : 'user'}</h1>
                    <p>{user ? user.display_name : 'user'} ▫ 67 Songs, 4hr 53 mins</p>
                </div>
            </div>
            <div className='main__tracks'>
                
            </div>
        </div>
    )
}

export default Main