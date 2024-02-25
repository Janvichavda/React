import { useReducer } from "react"

const ADD_PIZZA = 'ADD_PIZZA'
function addpizza() {
    return {
        type: ADD_PIZZA
    }
}

const BUY_PIZZA = 'BUY_PIZZA'
function buypizza() {
    return {
        type: BUY_PIZZA
    }
}


const initialState = {
    pizza: 100

}

const reducer = (state = initialState, action) => {
    switch (action) {
        case ADD_PIZZA: return {
            ...initialState, pizza: state.pizza + 1
        }
        case BUY_PIZZA: return {
            ...initialState, pizza: state.pizza - 1
        }
    }
}
const PizzaStock = () => {

    const [currentStock, dispatcher] = useReducer(reducer, initialState);

    return (<div>
        <p>Pizza Stock:{currentStock.pizza}</p>
        <button onClick={() => { dispatcher(ADD_PIZZA); }}>ADD PIZZA</button>
        <button onClick={() => { dispatcher(BUY_PIZZA); }}>BUY PIZZA</button>
    </div>);
}

export default PizzaStock; 