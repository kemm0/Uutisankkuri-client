export const setUser = (user) => {
    return {
        type: 'user/set',
        data: user
    }
}

export const setToken = (token) => {
    return{
        type: 'token/set',
        data: token
    }
}

const userReducer = (state = {}, action) => {
    switch(action.type){
        case 'user/set':
            return {
                ...state,
                user: action.data
            };
        case 'token/set':
            return {
                ...state,
                token: action.data
            }
        default:
            return state;
    }
}

export default userReducer