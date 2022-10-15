import React, { ButtonHTMLAttributes, FC } from 'react';

import styles from './Button.module.scss';

import { classNames } from 'shared/utils/classNames';

export enum ButtonVariant {
    CLEAR = 'clear',
    CONTAINED = 'contained',
    OUTLINED = 'outlined',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: ButtonVariant;
}

const Button: FC<ButtonProps> = props => {
    const { children, className, variant, ...rest } = props;

    return (
        <button
            className={classNames(styles.button, {}, [className, styles[variant]])}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
