import React from 'react'

interface Props {
    word: string,
    pronounce: string
}

const Word = (props: Props) => {
    return (
        <div>
            <p className="word">
                {props.word}
                <span className="pronunciation" >{props.pronounce}</span>
            </p>
        </div>
    )
}

export default Word
