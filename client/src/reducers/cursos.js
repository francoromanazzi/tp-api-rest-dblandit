const initialState = {
    cursos: []
}

const cursosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CURSOS':
            return {
                ...state,
                cursos: action.payload
            }
        default:
            return state
    }
}

export default cursosReducer