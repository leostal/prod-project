import React, { FC } from 'react';

import './Loader.scss';

import { classNames } from 'shared/utils/classNames';

interface LoaderProps {
    className?: string;
}

const Loader: FC<LoaderProps> = props => {
    const { className } = props;

    return <div className={classNames('loader', {}, [className])}></div>;
};

export default Loader;
