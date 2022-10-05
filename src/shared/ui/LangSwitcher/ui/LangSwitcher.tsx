import React, { FC } from 'react';
import { classNames } from 'shared/utils/classNames';
import styles from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ButtonVariant } from 'shared/ui/Button/ui/Button';
import TranslateIcon from 'shared/assets/icons/translate.svg';

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcher: FC<LangSwitcherProps> = props => {
    const { className } = props;
    const { t, i18n } = useTranslation();

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            variant={ButtonVariant.CLEAR}
            onClick={onToggle}
            className={classNames(styles.langSwitcher, {}, [className])}
        >
            <TranslateIcon className={styles.icon} />
            {t('Язык')}
        </Button>
    );
};

export default LangSwitcher;
