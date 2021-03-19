import { AUTH_LOGOUT, AUTH_LOGIN, PRODUCT_CHANGE, GET_USER_DATA } from "../types"

const initialState = {
    user: { id: 1, name: 'Luis' },
    products: [
        { id: 1, title: 'product #1' },
        { id: 2, title: 'product #2' },
        { id: 3, title: 'product #3' },
    ]
}

export default (state = initialState, action) => {
    switch (action.type) {

        case AUTH_LOGOUT:
            return {
                ...state,
                user: null
            }
        case AUTH_LOGIN:
            return {
                ...state,
                user: action.payload
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
