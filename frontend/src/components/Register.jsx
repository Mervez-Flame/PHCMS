// import React, { useState } from 'react';
// import API from "../utils/api";
// import { useNavigate } from 'react-router';
import GoogleButton from "./GoogleButton";
import { assets } from '../assets/assets';

const Register = () => {

    // const [form, setForm] = useState({ name: "", email: "", password: "" });
    // const navigate = useNavigate();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const res = await API.post("/auth/signup", form);
    //         localStorage.setItem("token", res.data.token);
    //         navigate("/dashboard");
    //     } catch (err) {
    //         alert(err.response?.data?.msg || "Signup failed");
    //     }
    // };

    return (
        <div className="auth-container">
            {/* Image section */}
            <div className="auth-image ">
                {/* Replace this with your actual image */}
                <img src={assets.register} alt="Doctor writing on clipboard" className='-image'/>
                <div className="auth-logo">
                    <img src={assets.logo} alt="PHCMS Logo" className='logo '/>
                </div>
            </div>

            {/* Form section */}
            <div className="auth-form">

                <h2>Create Account</h2>
                <p>Kindly fill in your hospital details</p>

                <form>
                    <input type="text" placeholder="Hospital Name" required />
                    <input type="email" placeholder="Enter email" required />
                    <input type="password" placeholder="Enter password" required />
                    <button type="submit" className="btn-primary">
                        Register
                    </button>
                </form>

                <div className="divider">or</div>

                <button className="google-btn">Continue with Google</button>

                <p className="auth-footer">
                    Already have an account? <a href="/login">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Register