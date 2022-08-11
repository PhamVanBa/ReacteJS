import { GET_LIST_TODO, SHOW_LOADING, HIDE_LOADING } from "../actionTypes";

const initialState = {
    todos: [],
    isLoading: false
}

// (state, action) => newState
function todoReducer(state = initialState, action) {
    switch (action.type) {
        case SHOW_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case HIDE_LOADING:
            return {
                ...state,
                isLoading: false
            };
        case GET_LIST_TODO:
            return {
                ...state,
                todos: action.payload
            };
        default:
            return state;
    }
}

export default todoReducer;

