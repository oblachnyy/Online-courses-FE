import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-div'>
            <img
                src="https://destralegal.ru/blog/content/images/2022/11/vozvrat-deneg-za-online-kursi.jpg"
                alt={'Главная'}
            />
            <div className='native-text'>
                Только лучшие курсы от топовых методистов! Качество, успех, много гарантий!
                <Link to="/courses">
                    <button className='open-courses-button'>Выбрать курс</button>
                </Link>
            </div>
            <div className='home-div2'>
                Начни учиться уже сейчас!
                <Link to="/register">
                    <button className='open-courses-button'>Регистрация</button>
                </Link>
                <Link to="/login">
                    <button className='open-courses-button'>Авторизация</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;