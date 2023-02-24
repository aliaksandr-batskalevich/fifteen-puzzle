import React from 'react';
import s from './WinMessage.module.scss';

type WinMessagePropsType = {
    score: number
    tryAgain: () => void
}

export const WinMessage: React.FC<WinMessagePropsType> = ({score, tryAgain}) => {

    return (
        <div className={s.winMessageWrapper}>
            <h2>You won!</h2>
            <p>Your score is: {score}.</p>
            <button onClick={tryAgain}>Try again!</button>
        </div>
    );
};