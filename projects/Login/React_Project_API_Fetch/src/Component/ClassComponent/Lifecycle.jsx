import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LifecycleClassComponentInReact extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = { counter: 0 }
    }
    // componentWillMount() { console.log("componentWillMount"); }
    componentDidMount() { console.log("componentDidMount"); }
    // componentWillReceiveProps(nextProps) { console.log("componentWillReceiveProps"); }
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        // return false
        return true
    }
    // componentWillUpdate(nextProps, nextState) { console.log("componentWillUpdate"); }
    componentDidUpdate(prevProps, prevState) { console.log("componentDidUpdate"); }
    componentWillUnmount() { console.log("componentWillUnmount"); }
    render() {
        console.log("render");
        return (
            <div>
                <button onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}>Click {this.state.counter}</button>
                <img src="https://i0.wp.com/programmingwithmosh.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-1.44.28-PM.png?ssl=1" style={{ width: "80%" }} alt="" />
            </div>
        );
    }
}

LifecycleClassComponentInReact.propTypes = {

};

export default LifecycleClassComponentInReact;