const redux = require('redux')
const reduxLogger = require("redux-logger")

const createStore = redux.createStore
const combineReducers = redux.combineReducers

const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware

const BUY_CAKE = 'BUY_CAKE'
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

const ADD_CAKE = 'ADD_CAKE'
function addcake() {
    return {
        type: ADD_CAKE,
        info: 'third redux action'
    }
}

const BUY_ICECREAM = 'BUY_ICECREAM'
function buyicecream() {
    return {
        type: BUY_ICECREAM,
        info: 'firstice redux action'
    }
}

const ADD_ICECREAM = 'ADD_ICECREAM'
function addice() {
    return {
        type: ADD_ICECREAM,
        info: 'secondice redux action'
    }
}

const initialState = {
    numOfCakes: 10,
}

const initialStateice = {
    numOfIcecream: 10
}



const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        case ADD_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes + 1
        }
        default: return state
    }
}

const reducerice = (state = initialStateice, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIcecream: state.numOfIcecream - 1
        }
        case ADD_ICECREAM: return {
            ...state,
            numOfIcecream: state.numOfIcecream + 1
        }

        default: return state
    }
}

const rootReducer = combineReducers({
    cake: reducer,
    iceCream: reducerice
})


const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState())
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
store.dispatch(buyCake())
// store.dispatch(addcake())
// store.dispatch(buyicecream())
// store.dispatch(addice())
// console.log(store.getState());
unsubscribe()