import React from "react";

import './style.css';

import WordDefinitions from "../word-definitions/WordDefinitions";
import Examples from "../examples/Examples";

const Word = () => {
    return (
        <div className="wordoftheday">
            <p className="word">
                World 
                <span className="pronunciation" >/wɜː(ɹ)d/</span>
            </p>
            <div className='word-info'>
                <WordDefinitions/>
                <Examples/>
            </div>
        </div>
    );
}

export default Word;