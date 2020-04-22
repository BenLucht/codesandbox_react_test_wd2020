import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectQuestions } from '../quiz/quizSlice';
import QuestionCard from '../quiz/QuestionCard';

const Quiz = () => {
    const questions = useSelector(selectQuestions);

    return (
        <div style={{
            width: "40vw",
            top: "calc(100vh - 85px - 70vh)",
            height: "70vh",
            boxSizing: "border-box",
            border: "5px solid #f1f1f1",
            borderTopLeftRadius: "14px",
            borderTopRightRadius: "14px",
            overflowY: "hidden",
            overflowX: "hidden", 
            position: "sticky",
            background: "rgb(60, 78, 224)",
            background: "linear-gradient(170deg, rgba(60,78,224,1) 0%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)",
        }}>
            <div style={{
                padding: "10px 0px",
                background: "#f1f1f1",
                borderTopLeftRadius: "4px",
                borderTopRightRadius: "4px",
                height: "1.5rem",
                display: "grid",
                gridTemplateColumns: "max(15%, 80px) 80%",
                // position: "fixed",
                // width: "42vw",
                zIndex: "10",
            }}>
                <div style={{ overflowY: "scroll", width: "95%", display: "grid", gridTemplateColumns: "15px 15px 15px", zIndex: "10", marginLeft: "20px" }}>
                    <span  
                        style={{
                            background: "#ED594A",
                            marginTop: "4px",
                            height: "12px",
                            width: "12px",
                            borderRadius: "50%",
                            display: "inline-block",
                        }}></span>
                    <span  
                        style={{
                            background: "#FDD800",
                            marginTop: "4px",
                            marignRight: "8px",
                            height: "12px",
                            width: "12px",
                            borderRadius: "50%",
                            display: "inline-block",
                        }}></span>
                    <span  
                        style={{
                            background: "#5AC05A",
                            marginTop: "4px",
                            height: "12px",
                            width: "12px",
                            borderRadius: "50%",
                            display: "inline-block",
                        }}></span>
                </div>
                <input 
                    type="text" 
                    value="https://www.tech-academy.io/quiz" 
                    style={{
                    width: "95%",
                    borderRadius: "3px",
                    border: "none",
                    backgroundColor: "white",
                    marginTop: "-5px",
                    height: "20px",
                    color: "#666",
                    padding: "5px",
                }} />
            </div>
            <div style={{ 
                transform: "scale(0.9) translateY(-10px)",
                // borderRadius: "1rem",
                // top: "20px",
                height: "65vh",
                overflowY: "scroll",
            }}>
                {
                    questions ? questions.map((content, index) => {
                        return(<QuestionCard key={index} number={index+1} questionData={content} />)
                    }) : null
                }
            </div>
            </div>
        
    )
};

export default Quiz;