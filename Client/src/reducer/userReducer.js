const initialState = {
    users : []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_CREATE-SUCCES':
            return {
                ...state,
                users : action.payload
            };
        case 'USER_LOGIN':
            return {
                ...state
            };
        default:
            return state
        
    }
}

export default userReducer