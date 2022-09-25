import React from 'react';
import './styles/index.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/AppRouter';
import { NavBar } from 'widgets/NavBar';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <NavBar />

            <AppRouter />
        </div>
    );
};

export default App;
