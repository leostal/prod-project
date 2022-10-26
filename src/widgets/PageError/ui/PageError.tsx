import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';

import styles from './PageError.module.scss';

import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/utils/classNames';

interface PageErrorProps {
    className?: string;
}

const PageError: FC<PageErrorProps> = props => {
    const { className } = props;
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(styles.pageError, {}, [className])}>
            <p>{t('Что-то пошло не так')}</p>

            <Button onClick={reloadPage}>{t('Перезагрузить')}</Button>
        </div>
    );
};

export default PageError;
