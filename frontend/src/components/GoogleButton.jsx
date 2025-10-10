import React from 'react'

const GoogleButton = () => {
    const handleGoogleLogin = () => {
        window.location.href = "http://localhost:5000/auth/google";
        // replace with your deployed backend URL if hosted
    };
    return (
        <div>
            <button
                onClick={handleGoogleLogin}
                style={{ background: "#DB4437", color: "white", padding: "10px", borderRadius: "5px", marginTop: "10px" }}
            >
                Continue with Google
            </button>
        </div>
    )
}

export default GoogleButton