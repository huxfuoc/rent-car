import React from 'react'
import '../css/Login.scss'


const Login = () => {
    return (
        <div className='login-form'>
            <div className='image-container'>
                <span className='white-text'>T</span><span className='blue-text'>II</span><span className='white-text'>RA</span>
            </div>
            <div className='form-login'>
                <h3>Login</h3>
                <div className='form-input'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username'></input>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password'></input>
                </div>
                <button className='btn-forgot' onClick={handleForgotPassword}>Forgot Password?</button>
                <button className='btn-login'>Login</button>
            </div>
        </div>
    )
}
const handleForgotPassword = () => {
    console.log("Forgot Password clicked!");
}

export default Login
