export type ValuesActionsType = ReturnType<typeof setValuesArr> | ReturnType<typeof replaceElements>;

export type ValuesStateType = {
  valuesArr: Array<number>
};

const valuesInitState: ValuesStateType = {
    valuesArr: [],
};

export const valuesReducer = (state: ValuesStateType = valuesInitState, action: ValuesActionsType): ValuesStateType => {
    switch (action.type) {
        case 'SET_VALUES_ARR':
            return {...state, ...action.payload};
        case 'REPLACE_ELEMENTS':
            let valuesArr = [...state.valuesArr];
            valuesArr[action.payload.nullPosition] = valuesArr[action.payload.elementPosition];
            valuesArr[action.payload.elementPosition] = 0;
            return {...state, valuesArr};
        default:
            return state;
    }
};

export const setValuesArr = (valuesArr: Array<number>) => {
    return {
        type: 'SET_VALUES_ARR',
        payload: {valuesArr}
    } as const;
};
export const replaceElements = (nullPosition: number, elementPosition: number) => {
    return {
        type: 'REPLACE_ELEMENTS',
        payload: {nullPosition, elementPosition}
    } as const;
};