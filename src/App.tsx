import React from 'react';
import s from './App.module.scss';
import {Content} from "./components/Content/Content";

function App() {

    return (
        <div className={s.appWrapper}>
            <h1>Fifteen Puzzle</h1>
            <Content/>
            <p className={s.clue}>P.S. Double click on SCORE - test WINGAME :)</p>
        </div>
    );
}

export default App;
