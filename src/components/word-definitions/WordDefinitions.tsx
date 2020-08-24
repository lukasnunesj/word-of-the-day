import { Fragment } from "react";
import React from "react";

import "./style.css";

const WordDefinitions = () => {
    return (
        <div className="definitions">
            <div className="definition-item">
                <span className="source">from The Century Dictionary and Cyclopedia</span>
                <hr/>
                <p className="definition">
                    <span className='classification'>(noun)</span>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
            </div>
            <div className="definition-item">
                <span className="source">from The Century Dictionary and Cyclopedia</span>
                <hr/>
                <p className="definition">
                    <span className='classification'>(subjective)</span>
                    Numquam laborum qui
                </p>
            </div>
            <div className="definition-item">
                <span className="source">from The Century Dictionary and Cyclopedia</span>
                <hr/>
                <p className="definition">
                    <span className='classification'>(subjective)</span>
                    Beatae alias culpa quaerat pariatur dicta eligendi ad repellat aut nobis ea quis voluptatibus itaque officiis suscipit.
                </p>
            </div>
        </div>
    );
}

export default WordDefinitions;