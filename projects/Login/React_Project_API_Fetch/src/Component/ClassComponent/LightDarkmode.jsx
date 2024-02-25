import React, { Component } from "react";

class LightDarkmode extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDarkMode: false,
        };
    }

    toggleDarkMode = () => {
        this.setState((prevState) => ({ isDarkMode: !prevState.isDarkMode }), () => {
            const newColor = this.state.isDarkMode ? "black" : "white";
            document.body.style.backgroundColor = newColor;
        });
    };

    render() {
        const { isDarkMode } = this.state;
        return (
            <>
                <div>
                    <button className="btn p-0 rounded-circle" onClick={this.toggleDarkMode}>
                        {isDarkMode ? (
                            <img className="img" src="https://assets.codepen.io/210284/sun.png" alt="sun" />
                        ) : (
                            <img className="img" src="https://assets.codepen.io/210284/moon.png" alt="moon" />
                        )}
                    </button>
                </div>
            </>
        );
    }
}

export default LightDarkmode;
