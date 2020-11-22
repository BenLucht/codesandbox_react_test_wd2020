import React from 'react';
import LazyLoad from 'react-lazyload';
import parser from '../parser';

import '../../style.css';

import image1 from "./images/undraw_build_wireframe_u9m2.png";

const content = [
    [
        {
            type: "h1",
            content: `General Information`,
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `More than anyhting else, this is just a quick summary of what you already know. Below you will find a short description of what CodeSandbox is and how to use it for the project aswell as the curriculum for the semester depending on the level you think you should take.`,
                },
                {
                    type: "custom",
                    content: <LazyLoad height={400} offset={100}><img src={image1} alt="img" style={{ position: "absolute", left: "0", top: "-100px", width: "100%", transform: "translateX(47vw)" }} /></LazyLoad>,
                }
            ]
        },
        {
            type: "h3",
            content: `CodeSandbox`,
        },
        {
            type: "p",
            content: `CodeSandbox is a free, online (integrated) development environment, which helps you develop websites. You will program your Web Development-Project in CodeSandbox - you will learn exactly how that is done in the first Coding Meetup which is going to take place on May 20, 2020.`,
        },
        {
            type: "p",
            content: `The user interface has been designed in a way that allows you to see your file directory, editor, and your executed program all at once. This IDE is based on the same platform as the popular editor Visual Studio Code, but offers some additional functionalities. You can create teams that can not only access the same files but you can also have a live coding session together in the same file.`,
        },
        {
            type: "p",
            content: `Besides HTML, CSS, and JavaScript, CodeSandbox also supports Frameworks like Vue, React, and Angular. To sign up to CodeSandbox you need a free Github-Account, which you can create in a matter of seconds.`,
        },
        {
            type: "h3",
            content: `Curriculum`,
        },
        {
            type: "p",
            content: `In the table below you can find the Udemy courses for the Web Development learning track. As a beginner, please follow the courses listed in the “Beginner” program. We strongly suggest following the provided order of the courses as their contents build on eachother. For the advanced course it works exactly the same. We have supplemented the course contents with our own summaries of the relevant topics. You can find them behind the links below on the projecct home page.`,
        },
        {
            type: "p",
            content: `To earn a certificate both beginners and advanced participants must complete their corresponding learning track up to at least the 17th section. That means for beginners, you must complete the course “Todo List Project”. Advanced participants must complete “ES2016 and ES2017”. These courses are important because they prepare you for the semester project. Also, all homework mentioned in the guide is relevant.`,
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `Anfänger: `,
                },
                {
                    type: "link",
                    content_link: `https://www.udemy.com/course/the-web-developer-bootcamp/`,
                    content_text: `Web Development Course`,
                }
            ]
        },
        {
            type: "p",
            content: [
                {
                    type: "custom",
                    content: <table >
                    <tbody>
                        <tr className="course-table-head">
                            <th>Section</th>
                            <th>Duration (h)</th>
                        </tr>
                        <tr className="course-table-row-bright">
                            <td>Introduction to this Course</td>
                            <td>0.5</td>
                        </tr>
                        <tr className="course-table-row-dark">
                            <td>Introduction to Front End Development</td>
                            <td>0.5</td>
                        </tr>
                        <tr className="course-table-row-bright">
                            <td>Introduction to HTML</td>
                            <td>1</td>
                        </tr>
                        <tr className="course-table-row-dark">
                            <td>Intermediate HTML</td>
                            <td>1</td>
                        </tr>
                        <tr className="course-table-row-bright">
                            <td>Introduction to CSS</td>
                            <td>1.5</td>
                        </tr>
                        <tr className="course-table-row-dark">
                            <td>Intermediate CSS</td>
                            <td>1.5</td>
                        </tr>
                        <tr className="course-table-row-bright">
                            <td>Introduction to JavaScript</td>
                            <td>1</td>
                        </tr>
                        <tr className="course-table-row-dark">
                            <td>Javascript Basics: Control Flow</td>
                            <td>1</td>
                        </tr>
                        <tr className="course-table-row-bright">
                            <td>Javascript Basics: Functions</td>
                            <td>1</td>
                        </tr>
                        <tr className="course-table-row-dark">
                            <td>Javascript Basics: Arrays</td>
                            <td>1.5</td>
                        </tr>
                        <tr className="course-table-row-bright">
                            <td>Javascript Basics: Objects</td>
                            <td>1</td>
                        </tr>
                        <tr className="course-table-row-dark">
                            <td>DOM Manipulation</td>
                            <td>1</td>
                        </tr>
                        <tr className="course-table-row-bright">
                            <td>Advanced DOM Manipulation</td>
                            <td>1</td>
                        </tr>
                        <tr className="course-table-row-dark">
                            <td>Color Game Project</td>
                            <td>2</td>
                        </tr>
                        <tr className="course-table-row-bright">
                            <td>Intro to jQuery</td>
                            <td>1</td>
                        </tr>
                        <tr className="course-table-row-dark">
                            <td>Advanced jQuery</td>
                            <td>0.5</td>
                        </tr>
                        <tr className="course-table-row-bright">
                            <td>Todo List Project</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>,
                },
            ]
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `Fortgeschrittene: `,
                },
                {
                    type: "link",
                    content_link: `https://www.udemy.com/course/the-advanced-web-developer-bootcamp/`,
                    content_text: `Web Development (The Advanced Web Developer Bootcamp)`,
                }
            ]
        },
        {
            type: "p",
            content: [
                {
                    type: "custom",
                    content: <table >
                    <tbody>
                        <tr className="course-table-head">
                            <th>Section</th>
                            <th>Duration (h)</th>
                        </tr>
                        <tr className="course-table-row-bright">
                            <td>Introduction to this Course</td>
                            <td>0.15</td>
                        </tr>
                        <tr className="course-table-row-dark">
                            <td>CSS Animations: Transforms and Transitions</td>
                            <td>2</td>
                        </tr>
                        <tr className="course-table-row-bright">
                            <td>CSS Animations: Keyframes</td>
                            <td>1</td>
                        </tr>
                        <tr className="course-table-row-dark">
                            <td>Advanced CSS: Layout With Flexbox</td>
                            <td>2.15</td>
                        </tr>
                        <tr className="course-table-row-bright">
                            <td>Project: Building A Startup Site</td>
                            <td>0.5</td>
                        </tr>
                        <tr className="course-table-row-dark">
                            <td>Async Foundations</td>
                            <td>1</td>
                        </tr>
                        <tr className="course-table-row-bright">
                            <td>AJAX Part 1: XHR and Fetch</td>
                            <td>1.5</td>
                        </tr>
                        <tr className="course-table-row-dark">
                            <td>AJAX Part 2: jQuery and Axios</td>
                            <td>1</td>
                        </tr>
                        <tr className="course-table-row-bright">
                            <td>Testing With Jasmine</td>
                            <td>0.5</td>
                        </tr>
                        <tr className="course-table-row-dark">
                            <td>Advanced Array Methods</td>
                            <td>0.75</td>
                        </tr>
                        <tr className="course-table-row-bright">
                            <td>Closures and the Keyword 'this'</td>
                            <td>0.75</td>
                        </tr>
                        <tr className="course-table-row-dark">
                            <td>Object Oriented Programming with JavaScript</td>
                            <td>0.75</td>
                        </tr>
                        <tr className="course-table-row-bright">
                            <td>Creating JSON API's with Node and Mongo</td>
                            <td>1</td>
                        </tr>
                        <tr className="course-table-row-dark">
                            <td>Codealong: Single Page Todo List with Express, Mongo, and jQuery</td>
                            <td>1</td>
                        </tr>
                        <tr className="course-table-row-bright">
                            <td>ES2015 Part I</td>
                            <td>0.75</td>
                        </tr>
                        <tr className="course-table-row-dark">
                            <td>ES2015 Project - Guess the Password</td>
                            <td>0.25</td>
                        </tr>
                        <tr className="course-table-row-bright">
                            <td>ES2016 and ES2017</td>
                            <td>0.25</td>
                        </tr>
                    </tbody>
                </table>,
                },
            ]
        },
        {
            type: "link-btn",
            content: {
                text: "Home",
                destination: "/"
            },
        },
    ],
    [],
    [],
];

const General = () => {
    return (
        <div className="container">
                <div className="textarea">
                    {content.map((item) => (
                        item.map((thing) => (
                            parser(thing)
                        ))
                    ))}
                </div>
            <div className="visuals">
            </div>
        </div>
    );
};

export default General;