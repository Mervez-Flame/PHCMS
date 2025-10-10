import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router'

const Login = () => {
    return (
        <div className="auth-container">
            {/* Image section */}
            <div className="auth-image">
                {/* Replace this with your actual image */}
                <img src={assets.login} alt="Doctor using laptop" className='-image'/>
                <div className="auth-logo">
                    <img src={assets.logo} alt="PHCMS Logo" className='logo' />
                </div>
            </div>

            {/* Form section */}
            <div className="auth-form">

                <h2>Welcome Back</h2>
                <p>Kindly log into your account</p>

                <form>
                    <input type="email" placeholder="Enter email" required />
                    <input type="password" placeholder="Enter password" required />
                    <button type="submit" className="btn-primary">
                        Login
                    </button>
                </form>

                <div className="divider">or</div>

                <button className="google-btn">Continue with Google</button>

                <p className="auth-footer">
                    Are you new to PHCMS? <Link href="https://phcms-exzr.vercel.app//register">Create a new account</Link>
                </p>
            </div>
        </div>
    )
}

export default Login