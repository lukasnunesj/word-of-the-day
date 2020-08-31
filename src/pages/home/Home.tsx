import React from "react";

import Header from "../../components/header/Header";
import WordContent from "../../components/word-content/WordContent";

import "./style.css";

const Home = () => {
    return (
        <div>
            <Header/>
            <main>
                <div className="content">
                    <WordContent/>
                </div>
            </main>
        </div>
    );
};

export default Home;