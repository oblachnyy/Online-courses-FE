import React, { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRegister = () => {
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div className='register-div'>
            <h2>Регистрация</h2>
            <label className="register-label-mail">
                Почта:{" "}
                <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            <br />
            <label className="register-label-pass">
                Пароль:{" "}
                <input type="password" value={password} onChange={handlePasswordChange} />
            </label>
            <button className="button-register" onClick={handleRegister}>Зарегистрироваться</button>
        </div>
    );
};

export default Register;