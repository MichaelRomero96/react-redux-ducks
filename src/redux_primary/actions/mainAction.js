import axios from "axios"
import { AUTH_LOGOUT, AUTH_LOGIN, PRODUCT_CHANGE, GET_USER_DATA } from "../types"

export const logoutAction = () => async (dispatch) => {
    dispatch({
        type: AUTH_LOGOUT
    })
}

export const loginAction = () => async (dispatch) => {
    dispatch({
        type: AUTH_LOGIN,
        payload: { id: 2, name: 'Juan' }
    })
}

export const productChangeAction = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_CHANGE
    })
}

export const getUserData = () => async (dispatch) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch({
            type: GET_USER_DATA,
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}