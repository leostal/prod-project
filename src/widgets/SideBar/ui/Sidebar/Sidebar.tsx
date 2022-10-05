import React, { FC, useState } from 'react';
import { classNames } from 'shared/utils/classNames';
import styles from './Sidebar.module.scss';
import { ThemeChanger } from 'shared/ui/ThemeChanger';

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
            <button onClick={onToggle}>Toggle</button>
            <div className={styles.switchers}>
                <ThemeChanger />
                {/* LangSwitcher */}
            </div>
        </div>
    );
};

export default Sidebar;
