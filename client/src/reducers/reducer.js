import {
    FETCH_USER_SUCCESS,
    FETCH_POST_SUCCESS,
    SET_ERROR
} from '../actions/action'

export const initialState = {
    user: [],
    comments: [],
    error: ''
}

export const rootReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type){
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                user: action.payload,

            };
        case FETCH_POST_SUCCESS:
            return{
                ...state,
                comments: action.payload,
            };
        case SET_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }

}