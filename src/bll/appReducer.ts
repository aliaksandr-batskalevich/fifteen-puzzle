import {RootActionsType} from "./store";

export type AppActionsType = ReturnType<typeof setIsGameFinished>
    | ReturnType<typeof setScoreInNull>;

export type MovesNullRulesType = Array<Array<number>>;
export type AppStateType = {
    isGameFinished: boolean
    score: number
    movesNullRules: MovesNullRulesType
};

const appInitState: AppStateType = {
    isGameFinished: false,
    score: 0,
    movesNullRules: [
        [1, 4], //0
        [0, 2, 5], //1
        [1, 3, 6], //2
        [2, 7], //3
        [0, 5, 8], //4
        [1, 4, 6, 9], //5
        [2, 5, 7, 10], //6
        [3, 6, 11], //7
        [4, 9, 12], //8
        [5, 8, 10, 13], //9
        [6, 9, 11, 14], //10
        [7, 10, 15], //11
        [8, 13], //12
        [9, 12, 14], //13
        [10, 13, 15], //14
        [11, 14], //15
    ],
};


export const appReducer = (state: AppStateType = appInitState, action: RootActionsType): AppStateType => {
    switch (action.type) {
        case 'SET_IS_GAME_FINISHED':
            return {...state, ...action.payload};
        case 'REPLACE_ELEMENTS':
            return {...state, score: state.score + 1};
        case 'SET_SCORE_IN_NULL':
            return {...state, score: 0};
        default:
            return state;
    }
};

export const setIsGameFinished = (isGameFinished: boolean) => {
    return {
        type: 'SET_IS_GAME_FINISHED',
        payload: {isGameFinished}
    } as const;
};
export const setScoreInNull = () => {
    return {
        type: 'SET_SCORE_IN_NULL'
    } as const;
};