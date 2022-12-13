import {React} from 'react'
import './styles/login.css'
import spotifyLogo from '../assets/icons/spotify-logo-lg-white.png'
import { loginUrl } from '../spotify'

const Login = () => {
  return (
    <div className='login'>
        <img src={spotifyLogo} alt=''/>
        <button><a href={loginUrl}>Login</a></button>
    </div>
  )
}

export default Login