import React, { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

const init = () => {
  const user = JSON.parse(sessionStorage.getItem('user'));

  return {
    logged: !!user, //si el user existe, logged será true
    user,
  }
}

export const AuthProvider = ({ children }) => {

  //dispatch es una función que acepta una acción o una acción asíncrona;
  // entonces puede o no despachar una o más acciones al store.
  const [authState, dispatch] = useReducer(authReducer, {}, init)


  const login = (name = '') => {

    //   const user = {id: 'ABC', name: name}
    //   const action = {type: types.login,payload: user,}

    sessionStorage.setItem('user', JSON.stringify(user))
    dispatch(action)
  }

  const logout = () => {

    sessionStorage.clear();
    const action = { type: types.logout, payload: {} };
    dispatch(action);

  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login: login,
      logout: logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
