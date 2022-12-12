
// documentation
// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = process.env.SPOTIFY_CLIENT_ID || "deeeb3e579574c00907faf1875a1a850";
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

// const scopes = "user-read-currently-playing \ user-read-recently-played \ user-read-playback-state \ user-top-ready \ user-modify-playback-state"

var scope = "streaming \
               user-read-email \
               user-read-private \
               user-read-currently-playing \
               user-read-playback-position \
               user-read-recently-played \
               user-read-playback-state \
               user-top-read \
               user-modify-playback-state"

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=token&show_dialog=true`;


export const getTokenFromUrl = () =>{
    const hash = window.location.hash
      let _token = window.localStorage.getItem("token")

      if (!_token && hash) {
          _token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

          window.location.hash = ""
          window.localStorage.setItem("token", _token)
      }

      return _token
}