import React, { FC, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';

import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/utils/classNames';

interface DebugButtonProps {
    className?: string;
}

const DebugButton: FC<DebugButtonProps> = props => {
    const { className } = props;
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const onThrow = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error();
        }
    }, [error]);

    return (
        <Button
            onClick={onThrow}
            className={classNames('', {}, [className])}
        >
            {t('Создать ошибку')}
        </Button>
    );
};

export default DebugButton;
