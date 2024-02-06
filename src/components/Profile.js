import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    const handleChange = () => {

        // todo: логика
        navigate("/change");
    };

    const handleCourses = () => {
        navigate("/mycourses");
    }

    const handleCompleteCourses = () => {
        navigate("/complete-courses");
    }

    const handleExit = () => {
        // todo: Логика выхода
        navigate("/");
    }

    return (
        <div className='profile-div'>
            <h2>Мой профиль</h2>
            <label className="profile-label-info">
                <p>Ваша почта:{" "}</p>
                <p>Фамилия:{" "}</p>
                <p>Имя:{" "}</p>
                <p>Отчество:{" "}</p>
                <button className="changeButton-profile" onClick={handleChange}>
                    Изменить данные
                </button>
            </label>
            <label className="profile-label2-info">
                <button className="myCoursesButton-profile" onClick={handleCourses}>
                    Мои курсы
                </button>
                {" "}
                <button className="exCoursesButton-profile" onClick={handleCompleteCourses}>
                    Завершенные курсы
                </button>
                {" "}
                <button className="exitButton-profile" onClick={handleExit}>
                    Выйти из аккаунта
                </button>
            </label>
        </div>
    );
};

export default Profile;