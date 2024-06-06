import React, { useReducer } from "react";
import userGlobalState from "../states/userGlobalState";
import userReducer from "../reducers/userReducer";
import actionsEnum from "../actions/actionsEnum";


export const UserContext = React.createContext();

const GlobalUserContext = ({children}) => {
    const [state, dispatch] = useReducer(userReducer, userGlobalState)

    const funcs = {
        handleLogin: function (payload) {
            dispatch({type: actionsEnum.LOGIN_SUCCESS, payload: payload})
        }
    }

    return <UserContext.Provider value={{state, funcs}}>{children}</UserContext.Provider>
}

export default GlobalUserContext;