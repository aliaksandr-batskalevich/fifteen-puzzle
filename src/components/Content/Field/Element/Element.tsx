import React from 'react';
import s from './Element.module.scss';

type ElementPropsType = {
    value: number
    index: number

    onclick: (index: number) => void
};

export const Element: React.FC<ElementPropsType> = ({value, index, onclick}) => {

    const isElement = !!value;
    const className = isElement ? `${s.elementWrapper} ${s.element}` : s.elementWrapper;

    const elementOnClickHandler = () => {
        onclick(index);
    };

    return (
        <div className={className} onClick={elementOnClickHandler}>
            <div className={s.circle}>
                {isElement && value}
            </div>
        </div>
    );
};