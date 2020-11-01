export const setUser = (userObj: any) => ({
    type: "SET_USER",
    payload: userObj,
});

export const logOut = () => ({
    type: "LOG_OUT",
});

const initialState = {};

const currentUser = (state = initialState, action: any) => {
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case "LOG_OUT":
            return {
                ...state,
                user: {},
                loggedIn: false
            }
        default:
            return state
    }
};

export default currentUser;