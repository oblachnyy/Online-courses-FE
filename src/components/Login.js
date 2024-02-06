import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // todo: Логика отправки на сервер авторизации
    const handleLogin = () => {
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className='login-div'>
            <h2>Авторизация</h2>
            <label className="login-label-mail">
                Почта:{" "}
                <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <br />
            <label className="login-label-pass">
                Пароль:{" "}
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <button className="button-login" onClick={handleLogin}>Войти</button>
        </div>
    );
};

export default Login;