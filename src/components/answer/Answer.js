import React from 'react';
import './Answer.css';

let variant = ["A:", "B:", "C:", "D:"];
const Answer = (props) => {
    let answers = Object.keys(props.answer).map((qAnswer, i) => (
        <svg className="variant" viewBox="0 0 300 55">
            <polygon points="0 25,15 25, 40 3, 260 3,285 25, 300 25,
                        285 25,260 50, 40 50,15 25" fill="white" stroke="#D0D0D8" strokeWidth="2"
                className=
                {
                    props.correctAnswer === qAnswer ? 'correct' : props.clickedAnswer === qAnswer ? 'incorrect' : ''
                }
                onClick={() => props.checkAnswer(qAnswer)}
                key={qAnswer}></polygon>
            <text x="20%" y="50%" alignmentBaseline="middle" textAnchor="middle" className="text_1">
                {variant[qAnswer - 1]}
            </text>
            <text x="25%" y="50%" alignmentBaseline="middle" className="text_1 text_2">
                {props.answer[qAnswer]}
            </text>
        </svg>

    ));

    return (
        <>
            <div disabled={props.clickedAnswer ? true : false} className="options">
                {answers}
            </div>
        </>
    );
}

export default Answer;
