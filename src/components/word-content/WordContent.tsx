import React, { useState, useEffect } from "react";

import './style.css';

import WordDefinitions from "./word-definitions/WordDefinitions";
import WordExamples from "./word-examples/WordExamples";
import {api_words, api_word} from "../../services/api";
import Loading from "../loading/Loading";
import Word from "./word/Word";


const WordContent = () => {
    const [word, setWord] = useState('');
    const [pronounce, setPronounce] = useState('//');

    const [loading, setLoading] = useState(true);

    const key = process.env.REACT_APP_WORDNIK_API_KEY;

    useEffect(() => {
        api_words.get(`randomWord?hasDictionaryDef=true&minCorpusCount=5&maxCorpusCount=-1&minDictionaryCount=5&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=${key}`).then(response => {
            setWord(response.data.word);
        });
    }, []);

    useEffect(()=>{
        if(word =='') return;        
        api_word.get(`${word}/pronunciations?useCanonical=true&typeFormat=IPA&limit=1&api_key=${key}`).then(response => {
            const pronunciation = response.data.find((item: any) => item.rawType == 'IPA');

            if(pronunciation) setPronounce(pronunciation.raw);
            return;
        });
    }, [word]);

    useEffect(()=>{
        setLoading((word != "" ? false : true));
    }, [word]);

    
    return ( 
        <div className="wordoftheday">
            {loading ? <Loading/> : <Word word={word} pronounce={pronounce}/>}
            <div className='word-info'>
                <WordDefinitions/>
                <WordExamples/>
            </div>
        </div>
    );
}

export default WordContent;