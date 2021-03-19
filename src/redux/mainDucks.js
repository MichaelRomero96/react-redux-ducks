import axios from 'axios';

//initialData

const initialState = {
    mainUser: { id: 1, name: 'Luis' },
    products: [
        { id: 1, title: 'product #1' },
        { id: 2, title: 'product #2' },
        { id: 3, title: 'product #3' },
    ],
    user: []
}



//types
export const AUTH_LOGOUT = 'AUTH_LOGOUT'
export const AUTH_LOGIN = 'AUTH_LOGIN'
export const PRODUCT_CHANGE = 'PRODUCT_CHANGE'
export const GET_USER_DATA = 'GET_USER_DATA'


// reducers

export default function mainReducer(state = initialState, action) {
    switch (action.type) {

        case AUTH_LOGOUT:
            return {
                ...state,
                mainUser: null
            }
        case AUTH_LOGIN:
            return {
                ...state,
                mainUser: action.payload
            }
        case PRODUCT_CHANGE:
            return {
                ...state,
                products: [{ id: 4, title: 'product #4' }]
            }
        case GET_USER_DATA:
            return {
                ...state,
                user: action.payload
            }
        default: return state
    }
}



// actions

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