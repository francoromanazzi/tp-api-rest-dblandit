const initialState = {
    errors: []
}

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ERRORS':
            return {
                errors: action.payload.error.message
            }
        case 'CLEAR_ERRORS':
            return {
                errors: []
            }
        default:
            return state
    }
}

export default errorReducer