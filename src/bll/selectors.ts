import {RootStateType} from "./store";
import {MovesNullRulesType} from "./appReducer";


// app
export const getIsGameFinished = (state: RootStateType): boolean => state.app.isGameFinished;
export const getMovesNullRules = (state: RootStateType): MovesNullRulesType => state.app.movesNullRules;
export const getScore = (state: RootStateType): number => state.app.score;

// values
export const getValuesArr = (state: RootStateType): Array<number> => state.values.valuesArr;