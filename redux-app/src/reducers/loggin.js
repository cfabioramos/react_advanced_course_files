const logginReducer = (state=true, action) => {

    switch(action.type) {
        case 'SIGN_IN':
            state = true
            return state
        case 'LOG_OFF':
            state = false
            return state
        default:
            return state
    }

}
export default logginReducer