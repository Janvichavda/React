const redux = require('redux')
const { thunk } = require('redux-thunk')
const axios = require('axios')

const initialstate = {
    loading: true,
    users: [],
    error: ''
}
const REQUEST_FETCH_DATA = 'REQUEST_FETCH_DATA'
const requestFetchData = { type: REQUEST_FETCH_DATA }

const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
const request_success = (data) => { return { type: REQUEST_SUCCESS, apidata: data } }

const REQUEST_FAIL = 'REQUEST_FAIL'
const request_fail = { type: REQUEST_FAIL, error: 'this is error' }

const fetchData = () => {
    return function (dispatch) {
        dispatch(requestFetchData)
        axios.get('https://jsonplaceholder.typicode.com/todos/1')
            .then((users) => { dispatch(request_success(users)) })
            .catch((error) => { dispatch(request_fail()) })
    }
}

const datamanager = (currentstate = initialstate, action) => {
    switch (action.type) {
        case REQUEST_FETCH_DATA:
            return {
                loading: true,
                users: [],
                error: ""
            }


        case REQUEST_SUCCESS:
            return {
                ...currentState,
                loading: false,
                users: action.apiData,
                error: ""
            }

        case REQUEST_FAIL:
            return {
                ...currentState,
                loading: false,
                users: [],
                error: action.error
            }


        default: currentstate;
            break;
    }
}
const store = redux.createStore(datamanager, redux.applyMiddleware(thunk))
const unsubscribe = store.subscribe(() => { console.log(store.getState()); });
store.dispatch(fetchData());