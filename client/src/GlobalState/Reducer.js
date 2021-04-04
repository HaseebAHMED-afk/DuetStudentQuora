const Reducer = (state,action) =>{
    switch(action.type){
        case 'LOG_IN':
            return {
                currentUser: action.payload.currentUser,
                loggedIn: action.payload.LoggedIn
            }

        case 'LOG_OUT':
           return {
               userEmail: action.payload.currentUser,
               loggedIn: action.payload.LoggedIn
           }

        default:
            return state;
    }
}


export default Reducer;