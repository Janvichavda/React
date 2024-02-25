import React, { Component } from 'react';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginForm: true,
        };
    }

    render() {
        const { isLoginForm } = this.state;
        console.log("Login ~ constructor ~ isLoginForm:", isLoginForm)

        return (

            <>
                <div className="wrapper">

                    <div className="title-text">
                        <div className={`title ${isLoginForm ? 'login' : 'signup'}`}>
                            {isLoginForm ? 'Login Form' : 'Signup Form'}
                        </div>
                    </div>


                    <div className="form-container">
                        <div className="slide-controls">
                            <input
                                type="radio"
                                name="slide"
                                id="login"
                                checked={isLoginForm}
                                onChange={() => this.setState({ isLoginForm: true })}
                            />
                            <input
                                type="radio"
                                name="slide"
                                id="signup"
                                checked={!isLoginForm}
                                onChange={() => this.setState({ isLoginForm: false })}
                            />
                            <label
                                htmlFor="login"
                                className={`slide login ${isLoginForm ? 'selected' : ''}`}
                            >
                                Login
                            </label>
                            <label
                                htmlFor="signup"
                                className={`slide signup ${!isLoginForm ? 'selected' : ''}`}
                            >
                                Signup
                            </label>
                            <div className="slider-tab"></div>
                        </div>

                        <div className="form-inner">
                            {isLoginForm ? (
                                <form className="login">
                                    <div className="field">
                                        <input type="text" placeholder="Email Address" required />
                                    </div>
                                    <div className="field">
                                        <input type="password" placeholder="Password" required />
                                    </div>
                                    <div className="pass-link">
                                        <a href="#">Forgot password?</a>
                                    </div>
                                    <div className="field btn">
                                        <div className="btn-layer"></div>
                                        <input type="submit" value="Login" />
                                    </div>
                                    <div className="signup-link">
                                        Not a member? <a href="#!" onClick={this.toggleForm}>Signup now</a>
                                    </div>
                                </form>
                            ) : (
                                <form className="signup">
                                    <div className="field">
                                        <input type="text" placeholder="Email Address" required />
                                    </div>
                                    <div className="field">
                                        <input type="password" placeholder="Password" required />
                                    </div>
                                    <div className="field">
                                        <input type="password" placeholder="Confirm password" required />
                                    </div>
                                    <div className="field btn">
                                        <div className="btn-layer"></div>
                                        <input type="submit" value="Signup" />
                                    </div>
                                </form>
                            )}
                        </div>

                    </div>
                </div>

            </>
        );
    }
}

export default Login;