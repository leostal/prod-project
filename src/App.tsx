import React, { Suspense, useCallback, useContext, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './styles/index.scss';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';

const App = () => {
    const { theme, changeTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>

            <button onClick={changeTheme}>Change theme</button>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
