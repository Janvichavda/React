import React, { Component } from 'react';

class StateClassComponentInReact extends Component {
    constructor(props) {
        super(props)
        this.state = { counter: 0 }
    }

    render() {

        return (
            <>
                <div className='bg-secondary text-center'>
                    <button className='bg-dark bg-gradient py-2 mx-2' onClick={() => { this.setState({ counter: this.state.counter - 1 }) }}>decrement</button> {this.state.counter}
                    <button className='bg-dark bg-gradient mx-2 py-2' onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}>increment</button>
                    <br />
                    <button className='bg-dark bg-gradient mx-2 px-3 my-2 py-2' onClick={() => { this.setState({ counter: this.state.counter = 0 }) }}>Reset</button>
                    <br />
                </div>
            </>
        );
    }
}
export default StateClassComponentInReact;