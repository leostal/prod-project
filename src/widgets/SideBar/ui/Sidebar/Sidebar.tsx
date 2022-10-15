import React, { FC, useState } from 'react';

import styles from './Sidebar.module.scss';

import LangSwitcher from 'shared/ui/LangSwitcher/ui/LangSwitcher';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { classNames } from 'shared/utils/classNames';

interface SidebarProps {
    className?: string;
}

const Sidebar: FC<SidebarProps> = props => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    };

    return (
        <div className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
            {/*<button onClick={onToggle}>Toggle</button>*/}
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.lang} />
            </div>
        </div>
    );
};

export default Sidebar;
