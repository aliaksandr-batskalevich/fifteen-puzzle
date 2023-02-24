import React, {useEffect} from 'react';
import s from './Content.module.scss';
import {Field} from "./Field/Field";
import {useDispatch, useSelector} from "react-redux";
import {getIsGameFinished, getScore} from "../../bll/selectors";
import {WinMessage} from "./WinMessage/WinMessage";
import {setValuesArr} from "../../bll/valuesReducer";
import {initValues} from "../../utilites/functions";
import {setIsGameFinished, setScoreInNull} from "../../bll/appReducer";


export const Content = () => {

    // init App
    useEffect(() => {
        initGame();
    }, []);

    const dispatch = useDispatch();

    const isGameFinished = useSelector(getIsGameFinished);
    const score = useSelector(getScore);

    const initGame = () => {
        let valuesArr = initValues();
        dispatch(setValuesArr(valuesArr));
        dispatch(setScoreInNull());
        dispatch(setIsGameFinished(false));
    };

    const tryAgainHandler = () => {
        initGame();
    };

    const testWin = () => {
        dispatch(setValuesArr([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,0]));
    };

    const fieldWrapperStyle = isGameFinished ? {filter: 'blur(3px)', pointerEvents: 'none' as const} : undefined;

    return (
        <div className={s.contentWrapper}>
            <div className={s.score} onDoubleClick={testWin}>{`Your score: ${score}`}</div>
            <div style={fieldWrapperStyle}><Field/></div>
            {isGameFinished && <WinMessage score={score} tryAgain={tryAgainHandler}/>}
        </div>
    );
};