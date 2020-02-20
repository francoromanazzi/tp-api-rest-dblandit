const initialState = {
    cursos: [],
}

const cursosReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CURSOS':
            return {
                ...state,
                cursos: action.payload
            }
        case 'DELETE_CURSO':
            return {
                ...state,
                cursos: state.cursos.filter(curso => curso._id !== action.payload)
            }
        case 'ADD_CURSO':
            return {
                ...state,
                cursos: [...state.cursos, action.payload]
            }
        default:
            return state
    }
}

export default cursosReducer