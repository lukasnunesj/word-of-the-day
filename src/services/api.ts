import axios from 'axios';

const api_words = axios.create({
    baseURL: 'https://api.wordnik.com/v4/words.json/'
});

const api_word = axios.create({
    baseURL: 'https://api.wordnik.com/v4/word.json/'
});

export {api_words, api_word};