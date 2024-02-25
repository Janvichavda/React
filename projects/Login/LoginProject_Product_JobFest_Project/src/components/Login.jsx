import React, { useState, useEffect } from "react";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoggedIn, setLoggedIn] = useState(!!localStorage.getItem("token"));
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const storedUserInfo = localStorage.getItem("userInfo");
                if (storedUserInfo) {
                    const user = JSON.parse(storedUserInfo);
                    setUserInfo(user);
                }
            } catch (error) {
                console.error("Error fetching user info:", error);
                setUserInfo(null);
            } finally {
                setLoading(false);
            }
        };

        // Clear token and user information when not logged in
        if (!isLoggedIn) {
            localStorage.removeItem("token");
            localStorage.removeItem("userInfo");
        }

        if (isLoggedIn) {
            fetchUserInfo();
        }
    }, [isLoggedIn]);

    // Function to generate a random token
    const generateRandomToken = () => {
        const tokenLength = 32; // You can adjust the length as needed
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        let token = "";
        for (let i = 0; i < tokenLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            token += characters.charAt(randomIndex);
        }

        return token;
    };

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:5000/users");
            const users = await response.json();

            const user = users.find((user) => {
                return user.email === email && user.password === password;
            });
            if (user) {
                console.log("Login successful");
                // Generate a random token
                const randomToken = generateRandomToken();

                // Save the token in localStorage
                localStorage.setItem("token", randomToken);
                localStorage.setItem("userInfo", JSON.stringify(user)); // Store user information as a string

                setLoggedIn(true);
                setError("");

                // Redirect based on user role
                if (user.role === "admin") {
                    console.log("user.role:", user.role);
                    // Redirect to admin dashboard
                    navigate("/admin");
                } else {
                    // Redirect to user home page
                    navigate("/");
                }
            } else {
                console.log("Invalid credentials");
                setError("Invalid credentials");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setError("Error during login");
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        setLoggedIn(false);
    };

    const renderLogoutForm = () => {
        if (loading) {
            return <p>Loading...</p>;
        }

        if (userInfo) {
            return (
                <div>
                    <h2>Welcome, {userInfo.email}!</h2>
                    <MDBBtn onClick={handleLogout}>Logout</MDBBtn>
                </div>
            );
        } else {
            return (
                <div>
                    <p>Error fetching user info</p>
                    <MDBBtn onClick={handleLogout}>Logout</MDBBtn>
                </div>
            );
        }
    };
    const handleCheckboxChange = (event) => {
        setShowPassword(event.target.checked);
    };

    return (
        <div>
            <MDBContainer fluid>
                <MDBRow className="d-flex justify-content-center align-items-center h-100">
                    <MDBCol col="12">

                        <MDBCard
                            className="bg-white my-5 mx-auto"
                            style={{ borderRadius: "1rem", maxWidth: "500px" }}
                        >
                            <Link to='/' className="d-flex justify-content-end p-3"><i class="fa-solid fa-house"></i></Link>

                            <MDBCardBody className="p-md-5 w-100 d-flex flex-column">
                                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                                <p className="text-white-50 mb-3">
                                    Please enter your login and password!
                                </p>

                                {error && <p style={{ color: "red" }}>{error}</p>}

                                <MDBInput
                                    className="shadow-sm"
                                    wrapperClass="mb-4 w-100 "
                                    label="Email"
                                    type="email"
                                    size="lg"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <MDBInput
                                    className="shadow-sm"
                                    wrapperClass="mb-4 w-100 "
                                    label="Password"
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    size="lg"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />

                                <MDBCheckbox
                                    name="flexCheck"
                                    id="flexCheckDefault"
                                    className="mb-4"
                                    label="Show Password"
                                    checked={showPassword}
                                    onChange={handleCheckboxChange}
                                />

                                <MDBBtn onClick={handleLogin} size="lg">
                                    Sign in
                                </MDBBtn>

                                <p className="pt-5 text-center">- Or Sign in With -</p>

                                <div className="pt-3 d-flex justify-content-between mb-5">
                                    <div >
                                        <MDBBtn className="bg-light">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="28px" height="28px">
                                                <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" /><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" /><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" /><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                                            </svg>
                                        </MDBBtn>
                                    </div>
                                    <div >
                                        <MDBBtn className="bg-light">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28px" height="28px" viewBox="0 0 32 32">
                                                <path fill="#316FF6" d="M 19.253906 2 C 15.311906 2 13 4.0821719 13 8.8261719 L 13 13 L 8 13 L 8 18 L 13 18 L 13 30 L 18 30 L 18 18 L 22 18 L 23 13 L 18 13 L 18 9.671875 C 18 7.884875 18.582766 7 20.259766 7 L 23 7 L 23 2.2050781 C 22.526 2.1410781 21.144906 2 19.253906 2 z"></path>
                                            </svg>
                                        </MDBBtn>
                                    </div>
                                    <div >
                                        <MDBBtn className="bg-light">
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28px" height="28px" viewBox="0 0 48 48">
                                                <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
                                            </svg>
                                        </MDBBtn>

                                    </div>
                                </div>

                                <p className="mt-5  mb-0 text-center">
                                    Don't have an account?{" "}
                                    <Link
                                        to="/register"
                                        style={{ cursor: "pointer", color: "blue" }}
                                    >
                                        Sign up
                                    </Link>
                                </p>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default Login;
