import {AppActionsType, appReducer} from "./appReducer";
import {combineReducers, legacy_createStore} from 'redux';
import {ValuesActionsType, valuesReducer} from "./valuesReducer";

export type RootActionsType = AppActionsType | ValuesActionsType;
export type RootStateType = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
    app: appReducer,
    values: valuesReducer,
});

export const store = legacy_createStore(rootReducer);