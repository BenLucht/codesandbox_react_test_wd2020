import React, { useState } from 'react';
import './AnswerButton.css';

const AnswerButton = ({ answer, disabled, setDisabled, correctAnswer }) => {

    const [clicked, setClicked] = useState(false);
    const [hovered, setHovered] = useState(false);
    //const clickedClass = clicked ? 'buttonClicked' : '';
    const correctClass = clicked && correctAnswer;
    const falseClass = clicked && !correctAnswer;
    const otherCorrect = !clicked && disabled && correctAnswer;
    // const otherFalse = !clicked && disabled && !correctAnswer;

    const bgColor = disabled ? correctClass ? "green" : falseClass ? "red" : otherCorrect ? "green" : "gray" : hovered ? "rgb(60,78,224)" : ""
    const txColor = disabled ? correctClass ? "white" : falseClass ? "white" : otherCorrect ? "white" : "white" : hovered ? "white" : "black"

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
    // if (disabled) {
    //     if (correctClass) {
    //         return "green"
    //     }
    // }background: "linear-gradient(170deg, rgba(60,78,224,1) 0%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)",
    
    return (
        <div 
            //className={`${clickedClass} ${correctClass} ${falseClass} ${fjsjkdf} ${sfdresf}`}
            style={{ 
                fontSize: "1rem",
                // background: "linear-gradient(151deg, rgba(255,255,255,1) 0%, rgba(60,78,224,1) 90%, rgba(9,9,121,1) 100%)", 
                // backgroundSize: "200% 200%",
                // backgroundPosition: "0% 50%",
                backgroundColor: bgColor,
                color: txColor,
                padding: "1rem",
                borderRadius: "1.5rem",
                textAlign: "center",
                pointerEvents: disabled ? "none": "",
                boxShadow: "10px 10px 30px -20px rgba(0,0,0,0.15)",
                transition: "background-color 350ms ease-in-out, color 50ms ease-in-out",
                cursor: "pointer",
             }}
            disabled={disabled} 
            onClick={() => {
                setDisabled(true);
                setClicked(true);
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {unescapeHtml(answer)}
        </div>
    )
};

export default AnswerButton;