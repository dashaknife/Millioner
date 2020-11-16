import React from 'react';
import './../answer/Answer.css';

const Money = (props) => {
    let moneys = Object.keys(props.money).map((qMoney) => (
        <svg className="current_score" viewBox="0 0 300 36">
            <polygon points="0 20,55 20, 70 8, 230 8,245 20, 300 20,
                245 20,230 35, 70 35,55 20" fill="white" stroke="#D0D0D8" strokeWidth="2"
                className=
                {
                    props.money[qMoney] === props.money[Object.keys(props.money).length - props.step + 1] ? 'current'
                        : qMoney > Object.keys(props.money).length - props.step + 1 ? 'waisted' : ''
                }
            ></polygon>
            <text x="50%" y="60%" alignmentBaseline="middle" textAnchor="middle" className={
                qMoney > Object.keys(props.money).length - props.step + 1 ? 'waisted' : ''}>
                {props.money[qMoney]}
            </text>
        </svg>
    ));

    return (
        <>
            <div>
                {moneys}
            </div>
        </>
    );
}

export default Money;
