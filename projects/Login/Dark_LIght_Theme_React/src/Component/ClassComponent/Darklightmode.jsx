import React, { Component } from "react";

class LightDarkmode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
    };
  }

  toggleDarkMode = () => {
    this.setState((prevState) => ({ isDarkMode: !prevState.isDarkMode }));
  };

  render() {
    const { isDarkMode } = this.state;
    return (
      <>
        <div className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}>

          <button className="btn p-0 rounded-circle" onClick={this.toggleDarkMode}>
            {isDarkMode ? <>
              <img src="https://assets.codepen.io/210284/sun.png" alt="sun" />
            </> : <>
              <img src="https://assets.codepen.io/210284/moon.png" alt="moon" />
            </>}
          </button>

        </div >
      </>
    );
  }
}

export default LightDarkmode;