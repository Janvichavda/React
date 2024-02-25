import React, { Component } from 'react';


class StateClassComponentInReact extends Component {
    constructor(props) {
        super(props)
        this.state = { stateData: "State Value", counter: 0, status: false }
        this.btnClickMethodInClass = this.btnClickMethodInClass.bind(this)
    }

    dataMember = "Data Member inside class"
    btnClickMethodInClassArrow = () => {
        console.log("calledbtnClickMethodInClassArrow");
        console.log("this.dataMember");
        this.dataMember = "Something"
        this.setState({ stateData: "data" })
    }
    btnClickMethodInClass() {
        console.log("called btnClickMethodInClass")
        console.log(this.dataMember);
    }
    render() {
        let data = "Data inside render value"
        let btnClickHandle = () => {
            console.log("called");
        }
        return (
            <>
                <h3>Btn Click</h3>
                <button onClick={btnClickHandle}>Click me</button> <br />
                <button onClick={this.btnClickMethodInClass}>Click me method as class properties</button><br />
                <button onClick={this.btnClickMethodInClassArrow}>Click me class arrow function</button><br />

                <p>Variable inside render : {data}</p>
                <p>Datamember from Class : {this.dataMember}</p>
                <p>State from Class : {this.state.stateData}</p>
                <button onClick={() => { this.setState({ counter: this.state.counter - 1 }) }}>decrement</button> {this.state.counter}
                <button onClick={() => { this.setState({ counter: this.state.counter + 1 }) }}>increment</button>
                <br />

                <button onClick={() => { this.setState({ status: !this.state.status }) }}>Change Status {JSON.stringify(this.state.status)}</button>

                <br />
            </>
        );
    }
}
export default StateClassComponentInReact;