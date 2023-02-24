import React from 'react';
import s from './Field.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {getMovesNullRules, getValuesArr} from "../../../bll/selectors";
import {Element} from "./Element/Element";
import {v1} from "uuid";
import {replaceElements} from "../../../bll/valuesReducer";
import {testIsGameFinished} from "../../../utilites/functions";
import {setIsGameFinished} from "../../../bll/appReducer";

export const Field = () => {

    const valuesArr = useSelector(getValuesArr);
    const movesNullRules = useSelector(getMovesNullRules);
    const dispatch = useDispatch();

    let nullPosition = valuesArr.indexOf(0);

    // test isGameFinished
    testIsGameFinished(valuesArr) && dispatch(setIsGameFinished(true));

    const elementOnClickHandler = (index: number) => {
        if (movesNullRules[nullPosition].includes(index)) {
            dispatch(replaceElements(nullPosition, index));
        }
    };

    let elementsToRender = valuesArr.map((value, index) => <Element key={v1()} value={value} index={index} onclick={elementOnClickHandler}/>);

    let rows = [];
    let row = [];
    for (let element of elementsToRender) {
        if (row.push(element) === 4) {
            rows.push(row);
            row = [];
        }
    }

    let rowsToRender = rows.map(row => <div key={v1()} className={s.row}>{row}</div>);

    return (
        <div className={s.fieldWrapper}>
            {rowsToRender}
        </div>
    );
};