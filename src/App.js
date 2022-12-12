import {React, useState, useEffect} from 'react';
import { getTokenFromUrl } from './spotify';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import Player from './components/Player';
import SpotifyWebApi from 'spotify-web-api-js';
import lofiMusic from './music/lofi-study.mp3'

// ~~~~~~~~~~~~~~~~~~~~~~~ LEARNING OBJECTIVES ~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 👉 React context api
// 👉 Spotify API
// 👉 Spotify user authentication
// 👉 Material UI
// 👉 Hooks and State
// 👉 Responsive design


const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);
  const [user, setUser] = useState({});

    useEffect(() => {
      const _token = getTokenFromUrl();
      setToken(_token);
      spotify.setAccessToken(_token)

      spotify.getMe().then((_user) => {
        setUser(_user)
      })
      // console.log('i have the token 👉', _token);
    }, []);

  return (
    <div className="app">
      <Header/>
      <div className='container'>
        {token ? (<Player user={user}/>) : (<Login/>)}
      </div>
    </div>
  );
}

export default App;
