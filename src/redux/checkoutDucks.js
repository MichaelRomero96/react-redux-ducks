

//initialData

const initialState = {
    checkout: []
}



//types
export const CHECKOUT_UPDATE = 'CHECKOUT_UPDATE'



// reducers

export default function checkoutReducer(state = initialState, action) {
    switch (action.type) {

        case CHECKOUT_UPDATE:
            return {
                ...state,
                checkout: action.payload
            }
        default: return state
    }
}



// actions

export const updateCheckout = (checkout) => async (dispatch) => {
    dispatch({
        type: CHECKOUT_UPDATE,
        payload: checkout
    })
}
