import React, { FC } from 'react';

import styles from './PageLoader.module.scss';

import Loader from 'shared/ui/Loader';
import { classNames } from 'shared/utils/classNames';

interface PageLoaderProps {
    className?: string;
}

const PageLoader: FC<PageLoaderProps> = props => {
    const { className } = props;

    return (
        <div className={classNames(styles.pageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};

export default PageLoader;
