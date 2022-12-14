import React from 'react'
import { useStateValue } from '../StateProvider'
import './styles/main.css'

const Main = () => {

    const [{user}] = useStateValue();
    // const name = user.display_name;
    return (
        <div className='main'>
            <div className='main__avatar'>
                <img src={user ? user.images[0].url : ''} alt=''/>
            </div>
            <h1>Hello <br/> {user ? user.display_name : 'user'}</h1>
        </div>
    )
}

export default Main