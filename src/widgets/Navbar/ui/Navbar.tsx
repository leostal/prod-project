import React, { FC } from 'react';
import { classNames } from 'shared/utils/classNames';
import styles from './Navbar.module.scss';
import AppLink from 'shared/ui/AppLink/ui/AppLink';
import { ThemeChanger } from 'shared/ui/ThemeChanger';

interface NavBarProps {
    className?: string;
}

const Navbar: FC<NavBarProps> = props => {
    const { className } = props;

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink
                    className={styles.links_item}
                    to={'/'}
                >
                    Главная
                </AppLink>

                <AppLink
                    className={styles.links_item}
                    to={'/about'}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};

export default Navbar;
