import React from "react";

import Header from "../../components/header/Header";
import Word from "../../components/word/Word";

import "./style.css";

const Home = () => {
    return (
        <div>
            <Header/>
            <main>
                <div className="content">
                    <Word/>
                </div>
            </main>
        </div>
    );
};

export default Home;