import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'src/css/Login.scss';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            const token = 'token_check_yes';
            localStorage.setItem('token', token);

            navigate('/app');
            console.log('Token:', token);
        } else {
            alert('Tài khoản hoặc mật khẩu không đúng');
        }
    };

    return (
        <div className='login-form'>
            <div className='image-container'>
                <span className='white-text'>T</span><span className='blue-text'>II</span><span className='white-text'>RA</span>
            </div>
            <div className='form-login'>
                <h3>Login</h3>
                <div className='form-input'>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button className='btn-forgot' onClick={handleForgotPassword}>Forgot Password?</button>
                <button className='btn-login' onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

const handleForgotPassword = () => {
    console.log("Forgot Password clicked!");
};

export default Login;
