// <button onClick={() => dispatch(addQuestionsAsync())}>load ..</button>
import React, { useLayoutEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addQuestionsAsync, selectQuestions } from '../quiz/quizSlice';
import AnswerButton from './AnswerButton';

const QuestionCard = ({ number, questionData }) => {
    //const dispatch = useDispatch();
    const [disabled, setDisabled] = useState(false);
    const [shuffledAnswers, setShuffledAnswers] = useState(null);
    const [hovered, setHovered] = useState(false);

    const { category, question, correct_answer, incorrect_answers } = questionData;

    useLayoutEffect(() => {
        setShuffledAnswers(shuffleAnswers(correct_answer, incorrect_answers));
        // shuffleAnswers(correct_answer, incorrect_answers);
        // console.log(answers)
    }, [correct_answer, incorrect_answers]);

    const shuffleAnswers = (correct_answer, incorrect_answers) => {
        let answers = incorrect_answers.slice()
        answers.push(correct_answer)
        answers.sort(function (a, b) {return Math.random() - 0.5});

        return answers
    };

    const unescapeHtml = (safe) => {
        return safe.replace(/&amp;/g, '&')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&quot;/g, '"')
            .replace(/&#039;/g, "'")
            .replace(/&rsquo;/g, "'")
            .replace(/&lsquo;/g, "'")
            .replace(/&ldquo;/g, "'")
            .replace(/&rdquo;/g, "'")
            .replace(/&hellip;/g, "...")
            .replace(/&lrm;/g, "")
            .replace(/&rlm;/g, "")
            .replace(/&shy;/g, "-");
    }
    
    return (
        <div 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
            width: "40vw !",
            // border: "1px solid black",
            borderRadius: "0.3rem",
            padding: "1rem",
            marginBottom: "1rem",
            boxShadow: `10px 10px 30px -20px ${hovered ? "rgba(60, 78, 224, 0.7)" : "rgba(0,0,0,0.15)"}`,
            transition: "box-shadow 350ms ease-in-out",
            backgroundColor: "white"
        }}>
            <div style={{ 
                width: "100%", 
                margin: "0px",
                textAlign: "center",
                fontSize: "1.5rem",
            }}>
                Question {number} - {category}
            <   div style={{ height: "1px", width: "30vw", backgroundColor: "black", margin: "0.5rem auto" }}></div>
            </div>
            <p style={{
                margin: "0px",
                textAlign: "center",
                overflow: "hidden",
                fontSize: "1rem",
                padding: "1rem"
            }}>
                {unescapeHtml(question)}
            </p>
            <div style={{ 
                        width: "100%", 
                        display: "grid", 
                        gridTemplateColumns: "17vw 17vw", 
                        gridTemplateRows: "50px 50px",
                        gridGap: "1rem",
                        justifyContent: "center",
                        }}>
                {
                    shuffledAnswers 
                        ? shuffledAnswers
                            .map((answer) => {
                                return(
                                    <AnswerButton 
                                        key={answer} 
                                        answer={answer} 
                                        disabled={disabled} 
                                        setDisabled={setDisabled} 
                                        correctAnswer={answer === correct_answer}
                                    />
                                    )
                                })
                        : <p>loading...</p>
                }
            </div>
        </div>
    )
};

export default QuestionCard;