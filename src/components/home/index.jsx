import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addQuestionsAsync } from '../quiz/quizSlice';
import Quiz from '../quiz';

import '../../style.css';

const tasks = [
    {
        sprint: "",
        link: "/guide",
        title: "General Information",
        content: []
    },
    {
        sprint: "",
        link: "/planning",
        title: "How to Plan a Web Development Project",
        content: []
    },
    {
        sprint: "",
        link: "/getcoding",
        title: "A Guide to HTML and CSS",
        content: []
    },
    {
        sprint: "",
        link: "/jsgeneral",
        title: "Becoming a Javascript Developer",
        content: []
    },
    {
        sprint: "Sprint 0",
        link: "/sprint0",
        title: "Make Plans for the Project",
        content: [
            "Familiarize yourself with the project idea. Play the exemplary implementation of the quiz to the left to get a feeling for how it works. Think about what you would do differently or how it could be improved.",
            "Make a wireframe sketch to plan your further development. A rough drawing is enough for the moment, but it should already include all the elements and functionality. Make your own sketch first, before pooling ideas with your team and agreeing on a concept."
        ]
    },
    {
        sprint: "Sprint 1",
        link: "/sprint1",
        title: "The Quiz is on the Cards",
        content: [
            "Use your plan from Sprint 0 and the provided example data to build a \"container\". This \"container\" represents a single question component, housing all elements needed to display a question with its answers (or any additional information you deem interesting or necessary).",
            "Style the elements of your \"question-container\" with CSS to match (or even improve on) your design from Sprint 0.",
        ]
    },
    {
        sprint: "Sprint 2",
        link: "/sprint2",
        title: "Interaction is Key",
        content: [
            "Display an alert upon clicking an answer-button and let it show which button was clicked",
            "Deactivate the buttons once one of them was clicked",
            "Develop a system to represent which answers are correct or false and highlight the buttons accordingly after clicking one",
            "Save the answer status (correct or false) in a variable instead of showing an alert",
        ],
    },
    {
        sprint: "Sprint 3",
        link: "/sprint3",
        title: "Dynamic Content Makes Content",
        content: [
            "Place all pieces of content in separate variables",
            "Replace the corresponding positions with references to these variables",
            "Display the answers in random order",
            "We have constructed an example object containing all data needed to be displayed on a question card. Use this object in place of your variables!",
        ]
    },
    {
        sprint: "Sprint 4",
        link: "/sprint4",
        title: "We’re Having a Quiz!",
        content: [
            "The example object contains additional information. Use it to drive the functionality from Sprint 2",
            "Furthermore, you can find an array of objects representing a complete quiz. Utilize the array and its functions to loop over the contained objects, rendering a card for each and therefore an entire quiz!",
            "Dynamically load new questions from the api (as shown in the documentation)",
        ]
    },
    {
        sprint: "Sprint 5",
        link: "/sprint5",
        title: "Make It Your Own",
        content: [
            "Create a new component that catches the state of each question-card (correct/false) and displays the aggregated result at the bottom of the page",
            "Implement a lifeline („Joker“) that allows gifts the user the correct answer for one of the questions",
            "Devise more complex lifelines to choose from (like allowing second guesses or removing two false options, etc.)",
        ]
    }
]

const Sprint = ({ task: {sprint, link, title, content} }) => {
    return (
        <div style={{   position: "relative", 
                        marginTop: "2rem", 
                        // width: "100vw",
                        minWidth: "700px", 
                        marginBottom: "2rem" }}>
                    <div style={{ width: "90%" }}>
                        {/* <div 
                            style={{ 
                                fontSize: "2rem", 
                                color: "white", 
                                backgroundColor: "rgba(60, 78, 224, 1)", 
                                fontWeight: "700" ,
                                transform: "translateX(3vw)",
                                display: "inline-block",
                                border: "0.6rem solid rgb(60, 78, 224)",
                            }}> */}
                            <Link 
                                style={{ 
                                    fontSize: "2rem", 
                                    color: "white", 
                                    backgroundColor: "rgba(60, 78, 224, 1)", 
                                    fontWeight: "700" ,
                                    transform: "translateX(3vw)",
                                    display: "inline-block",
                                    border: "0.6rem solid rgb(60, 78, 224)",
                                    textDecoration: "none",
                                 }} 
                                    to={link}>
                                {title}
                            </Link>
                        {/* </div> */}
                        <div style={{ marginLeft: "0rem", marginTop: "2rem" }}>
                            <ul>
                                {
                                    content.map((text) => (
                                        <li style={{ width: "100%", margin: "0 0 1rem 5vw", lineHeight: "1.4rem" }}>{text}</li>
                                    ))
                                }
                            </ul>
                            {/* {
                                content.map((text) => (
                                    <p 
                                        style={{
                                            lineHeight: "1.4rem",
                                            width: "100%",
                                        }}
                                    >{text}</p>
                                    ))
                            } */}
                        </div>
                    <div 
                        style={{
                            fontSize: "8rem",
                            color: "rgba(60, 78, 224, 0.1)",
                            fontWeight: "700",
                            marginTop: "-9rem",
                            marginRight: "-3rem",
                            float: "right"
                    }}>
                        {sprint}
                    </div>
                    </div>
                </div>
    );
};

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addQuestionsAsync());
    }, []);
    
    return (
        <div style={{ 
            display: "grid",
            gridTemplateColumns: "max(50vw, 700px) 1fr",
            justifyItems: "center", }}>
            <div 
                style={{ 
                    overflowY: "scroll",
                    width: "100%",
                }}>
                    <p style={{ marginTop: "3em" }}>Welcome, and great to see that you decided to learn how websites are being created and how you can design and program a page yourself. We know from experience how difficult it is to learn a new or even your first programming language! While the internet offers a load of websites, all promising to teach you how to code in a short amount of time, the amount of data you have to go through to evaluate where to start can be challenging. Most people ask themselves “What is the best programming language to learn?” or “Where do I start learning it?”. All valid questions, yet once you have learnt one programming language it becomes exponentially easier to learn a new one and most programming languages can do similar, if not the same things. HTML, CSS and JavaScript not only allow you to make visually appealing websites, but JavaScript is a very powerful programming language itself.</p>
                    <p>As you might already know your project for this semester is the design and creation of an online quiz. We don’t want to overwhelm you with too many tasks at once, which is why we created “Sprints”. These “Sprints” all give you tasks to complete and ends with a milestone. Each “Sprint” lays the foundation for future “Sprints” and will guide you through the development of a website. This structure also resembles a development project you would find in a professional environment. From personal experience, we know that it can get frustrating when you learn something new, get stuck on something and then cannot proceed. That is the reason why we created this guide for you, outlining how to go about each Sprint. You can follow this guide, but we strongly advise to use it as a reference for when you are stuck. Also, there are many possible solutions to one and the same problem - as the famous proverb already states “all roads lead to Rome”. Don’t feel discouraged if your solution looks differently. On the contrary, you should feel great when you find a different way to code it since it shows you’ve developed an understanding of programming!</p>
                {
                    tasks.map((task) => <Sprint task={task} />)
                }
            </div>
            <div style={{ position: "relative", gridColumn: "2 / 3", }}>
                <Quiz />
            </div>
        </div>
    )
};

export default Home;