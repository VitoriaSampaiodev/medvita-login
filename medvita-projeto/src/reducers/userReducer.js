import actionsEnum from "../actions/actionsEnum";

const userReducer = (state, action) => {
    switch(action.type) {
        case actionsEnum.LOGIN_SUCCESS:
            return {...state, name: action.payload.name, consultas: action.payload.consultas}
    }
    return {...state};
}


export default userReducer;