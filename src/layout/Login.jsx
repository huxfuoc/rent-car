import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'src/css/Login.scss';

import { useTranslation } from 'react-i18next'

const Login = () => {
    const { t } = useTranslation("global")

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            const token = 'token_check_yes';
            localStorage.setItem('token', token);
            navigate('/app');
        } else {
            alert('Username or password is incorrect');
        }
    };

    return (
        <div className='login-form'>
            <div className='image-container'>
                <span className='white-text'>T</span><span className='blue-text'>II</span><span className='white-text'>RA</span>
            </div>
            <div className='form-login'>
                <h3>{t("login.login")}</h3>
                <div className='form-input'>
                    <label htmlFor='username'>{t("login.username")}</label>
                    <input type='text' id='username' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                    <label htmlFor='password'>{t("login.password")}</label>
                    <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button className='btn-forgot' onClick={handleForgotPassword}>{t("login.forgotPassword")}</button>
                <button className='btn-login' onClick={handleLogin}>{t("login.login")}</button>
            </div>
        </div>
    );
};

const handleForgotPassword = () => {
    console.log("Forgot Password clicked!");
};

export default Login;
