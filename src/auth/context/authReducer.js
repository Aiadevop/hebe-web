import { types } from "../types/types";

//Los reducer deben ser funciones puras que no llaman a recuros externos. Por eso,
//todos las variaciones se hacen en las otras páginas. 

export const authReducer = (state = {}, action) => {

    switch (action.type) {

        case types.login:
            return {
                ...state,
                logged: true,
                user: action.payload //sale del AuthProvider
            };
        case types.logout:
            return {
                logged: false,
            };

        default:
            return state;
    }

}
