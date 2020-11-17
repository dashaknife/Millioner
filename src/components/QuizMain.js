import React, { Component } from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import Money from './money/Money';
import './QuizMain.css';
import menu from './img/menu.svg';
import cross from './img/cross.svg';
import picture from './img/picture.svg';
import { Link } from 'react-router-dom';


export default class Quiz extends Component {
    state = require('./QuizMain.json');

    // the method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score, moneys } = this.state;
        if (answer === correctAnswers[step]) {
            this.setState({
                score: score + 1,
                money: moneys[Object.keys(moneys).length - step + 1],
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
            setTimeout(() =>
                this.setState({
                    step: step + 1,
                    correctAnswer: 0,
                    clickedAnswer: 0
                }), 1000);

        } else {
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
            setTimeout(() =>
                this.setState({
                    step: step + 12,
                    correctAnswer: 0,
                    clickedAnswer: 0
                }), 1000);
        }
    }

    render() {
        let { quiestions, answers, correctAnswer, clickedAnswer, step, money, moneys } = this.state;
        return (
            <div>
                { step <= Object.keys(quiestions).length ?
                    (<>
                        <div className="second_content">
                            <label className="link" htmlFor="cb" id="menu">
                                <img src={menu} alt="" className="menu"></img>
                                <img src={cross} alt="" className="cross"></img>
                            </label>
                            <input type="checkbox" id="cb"></input>
                            <div className="second_content_1">
                                <div className="second_content_3">
                                    <h3><Question question={quiestions[step]} /></h3>
                                </div>
                                <div className="second_content_3">
                                    <Answer
                                        answer={answers[step]}
                                        step={step}
                                        checkAnswer={this.checkAnswer}
                                        correctAnswer={correctAnswer}
                                        clickedAnswer={clickedAnswer}
                                    />
                                </div>
                            </div>
                            <div id="second_content_2">
                                <Money
                                    money={moneys}
                                    step={step}
                                />
                            </div>
                        </div>
                    </>) : (
                        <div className="first_content">
                            <img className="hand" src={picture} alt=""></img>
                            <div className="first_content_1">
                                <h2>Total score:</h2>
                                <h1>{money} earned</h1>
                                <Link to='/First' className="start_button">Try again</Link>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}
