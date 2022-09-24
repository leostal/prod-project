import React from 'react';
import { Link } from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/AppRouter';

const App = () => {
    const { theme, changeTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <button onClick={changeTheme}>Change theme</button>

            <AppRouter />
        </div>
    );
};

export default App;
