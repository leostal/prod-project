import React, { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';

const App = () => {
    const { theme, changeTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>

            <button onClick={changeTheme}>Change theme</button>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
