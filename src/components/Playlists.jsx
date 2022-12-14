import React, { useContext} from 'react'
import { StateContext } from '../StateProvider';
import './styles/playlist.css'


const Playlists = () => {

  const [{ playlists }] = useContext(StateContext);

  return (
    <div className='playlist'>
      <h4>Playlists</h4>
      <hr/>
      <ul>
        {playlists.map(playlist => (
          <li key={playlist.id}>{playlist.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Playlists