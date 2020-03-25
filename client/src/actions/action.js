import axios from 'axios';


export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const SET_ERROR = 'SET_ERROR'

const server = 'http://localhost:5000/api'

export const getUser = () => dispatch => {

    setTimeout(() => {
        axios 
            .get(`${server}/users`)
            .then(res => {
                console.log(res.data)
                dispatch({type: FETCH_USER_SUCCESS, payload: res.data})
            })
            .catch(err => dispatch({ type: SET_ERROR, payload: err }))
    }, []);
}

export const postUser = user => dispatch => {
    axios
        .post(`${server}/users`, user)
        .then(res => {
            console.log(res.data)
            dispatch({type: FETCH_USER_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type: SET_ERROR, payload: err}))
}

export const del_User = e => dispatch => {
    axios
        .delete(`${server}/users/{id}`, e)
        .then(res => {
            console.log(res.data)
            dispatch({type: FETCH_USER_SUCCESS, payload: res.data})
        })
        .catch(err => dispatch({type: SET_ERROR, payload: err}))
}

export const getPost = () => dispatch => {
    setTimeout(()=>{
        axios   
            .get(`${server}/users`)
            .then(res =>{
                console.log(res.data)
                dispatch({type: FETCH_POST_SUCCESS, payload: res.data})
            })
            .catch(err => dispatch({type: SET_ERROR, payload: err}))
    })
}

export const postPost = post => dispatch => {
        axios
            .post(`${server}/posts`, post)
            .then(res =>{
                console.log(res.data)
                dispatch({type: FETCH_POST_SUCCESS, payload: res.data})
            })
            .catch(err => dispatch({type: SET_ERROR, payload: err}))
}

export const del_Post = e => dispatch => {
        axios
            .post(`${server}/users/{id}`, e)
            .then(res => {
                console.log(res.data)
                dispatch({type: FETCH_POST_SUCCESS, payload: res.data})
            })
            .catch(err => dispatch({type: SET_ERROR, payload: err}))

}