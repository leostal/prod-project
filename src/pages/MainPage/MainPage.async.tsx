import { lazy } from 'react';

export const MainPageAsync = lazy(
    () =>
        new Promise(resolve => {
            // FIXME: THIS PROMISE IS ONLY FOR LEARNING!!!! DELETE ME IF U WANT TO DEPLOY TO PROD
            // FIXME: THIS SHIT MADE FOR UNDERSTANDING HOW SUSPENSE WORKS.
            // FIXME: THIS TIMEOUT SHOWS UP WHEN CHUNK OF THIS PAGE IS LOADING!
            // @ts-ignore
            setTimeout(() => resolve(import('./MainPage')), 1500);
        })
);
