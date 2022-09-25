import React, { FC } from 'react';
import { classNames } from 'shared/utils/classNames';
import styles from './ThemeChanger.module.scss';
import { Button } from 'shared/ui/Button';
import { useTheme } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider/utils/ThemeContext';
import { ButtonVariant } from 'shared/ui/Button/ui/Button';

import ThemeDarkIcon from 'shared/assets/icons/dark-theme.svg';
import ThemeLightIcon from 'shared/assets/icons/light-theme.svg';

interface ThemeChangerProps {
    className?: string;
}

const ThemeChanger: FC<ThemeChangerProps> = props => {
    const { className } = props;
    const { theme, changeTheme } = useTheme();

    return (
        <Button
            variant={ButtonVariant.CLEAR}
            onClick={changeTheme}
            className={classNames(styles.themeChanger, {}, [className])}
        >
            {theme === Theme.DARK ? <ThemeLightIcon /> : <ThemeDarkIcon />}
        </Button>
    );
};

export default ThemeChanger;
