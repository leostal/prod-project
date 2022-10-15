import React, { FC } from 'react';

import { useTheme } from 'app/providers/ThemeProvider';
import { Theme } from 'app/providers/ThemeProvider/utils/ThemeContext';

import ThemeDarkIcon from 'shared/assets/icons/dark-theme.svg';
import ThemeLightIcon from 'shared/assets/icons/light-theme.svg';
import { Button } from 'shared/ui/Button';
import { ButtonVariant } from 'shared/ui/Button/ui/Button';
import { classNames } from 'shared/utils/classNames';

interface ThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = props => {
    const { className } = props;
    const { theme, changeTheme } = useTheme();

    return (
        <Button
            variant={ButtonVariant.CLEAR}
            onClick={changeTheme}
            className={classNames('', {}, [className])}
        >
            {theme === Theme.DARK ? <ThemeLightIcon /> : <ThemeDarkIcon />}
        </Button>
    );
};

export default ThemeSwitcher;
