export const initialState = {
    user: null,
    playlists: [],
    // playing: false,
    // item: null
}

export const actionTypes = {
    SET_USER: 'SET_USER',
    SET_USER_PLAYLISTS: 'SET_USER_PLAYLISTS'
};


const reducer = (state, action) => {
    console.log(action)

    switch(action.type){
        case actionTypes.SET_USER:
            return { ...state, user: action.user };

        case actionTypes.SET_USER_PLAYLISTS:
            return { ...state, playlists: action.playlists }
        
        default:
            return { state };
    }
};

export default reducer;