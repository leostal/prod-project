import React, { FC } from "react";
import { classNames } from "shared/utils/classNames";
import styles from "./Navbar.module.scss";
import AppLink from "shared/ui/AppLink/ui/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { useTranslation } from "react-i18next";

interface NavBarProps {
    className?: string;
}

const Navbar: FC<NavBarProps> = props => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink
                    className={styles.links_item}
                    to={"/"}
                >
                    {t("Главная")}
                </AppLink>

                <AppLink
                    className={styles.links_item}
                    to={"/about"}
                >
                    {t("О сайте")}
                </AppLink>
            </div>
        </div>
    );
};

export default Navbar;
