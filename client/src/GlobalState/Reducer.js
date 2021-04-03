const Reducer = (state,action) =>{
    switch(action.type){
        case 'LOG_IN':
            return {
                userEmail: action.payload.currentUser,
                loggedIn: action.payload.LoggedIn
            }

        case 'LOG_OUT':
            console.log(action.payload);

        default:
            return state;
    }
}


export default Reducer;