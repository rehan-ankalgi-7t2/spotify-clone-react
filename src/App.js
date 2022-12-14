import {React, useState, useEffect} from 'react';
import { getTokenFromUrl } from './spotify';
import './App.css';
import Login from './components/Login';
import Player from './components/Player';
import SpotifyWebApi from 'spotify-web-api-js';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer'

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
  const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
      // accessing the token
      const _token = getTokenFromUrl();

      if(_token){
        setToken(_token);

        spotify.setAccessToken(_token)
  
        // getting user
        spotify.getMe().then((_user) => {
          dispatch({
            type: actionTypes.SET_USER,
            user: _user
          })
        })

        spotify.getUserPlaylists(user)
        .then(data => {
          console.log('user playlists', data);
          dispatch({
            type: actionTypes.SET_USER_PLAYLISTS,
            playlists: data.items
          })
        }, (err) => {
          console.error(err);
        });
      }

      console.log('i have the token 👉', _token);
    }, [dispatch, token, user]);

    console.log("🧑", user)

  return (
    <div className="app">
      <div className='container'>
        {token ? (<Player/>) : (<Login/>)}
      </div>
    </div>
  );
}

export default App;
