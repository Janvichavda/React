// import React from 'react';
// class ClassComponentInReact extends React.Component 

import React, { Component } from 'react';
class ClassComponentInReact extends Component {
    // otherfunction(){
    //     return <>otherfunction</>
    // }
    // otherfunction1(){
    //     return <>otherfunction 1</>
    // }
    // otherfunction2(){
    //     return <>otherfunction 2</>
    // }
    render() {
        return (
            <div>
                <h1>Janvi</h1>
                <p>in ReactJs we can create Component using class that will considered as class compo</p>
                <p>class compo have render method for return.</p>
                {/* {this.otherfunction()} */}
            </div>
        );
    }
}

export default ClassComponentInReact;