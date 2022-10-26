import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';

import styles from './NotFoundPage.module.scss';

import { classNames } from 'shared/utils/classNames';

interface NotFoundPageProps {
    className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = props => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.notFoundPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    );
};

export default NotFoundPage;
