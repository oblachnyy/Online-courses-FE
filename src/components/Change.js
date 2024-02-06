import React, { useState } from "react";

const Change = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [middleName, setMiddleName] = useState("");

    const handleChange = () => {

        //todo: Логика изменения

        console.log("Email:", email);
        console.log("Password:", password);
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Middle Name:", middleName);
    };

    return (
        <div className='change-div'>
            <h2>Сменить данные профиля</h2>
            <label className="change-label">
                Почта:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label className="change-label">
                Пароль:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <label className="change-label">
                Фамилия:
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </label>
            <label className="change-label">
                Имя:
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </label>
            <label className="change-label">
                Отчество:
                <input
                    type="text"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                />
            </label>
            <button className="changeButton-profile" onClick={handleChange}>
                Изменить данные
            </button>
        </div>
    );
};

export default Change;
