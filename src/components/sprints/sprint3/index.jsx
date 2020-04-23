import React from 'react';
import parser from '../../parser';

import '../style.css';

import image1 from "./images/undraw_pair_programming_njlp.png";
import image2 from "./images/undraw_code_review_l1q9.png";

const content = [
    [
        {
            type: "h1",
            content: `Dynamic content makes content`,
        },
    ],
    [
        {
            type: "h3",
            content: `The basics`,
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `Welcome to “Sprint 3”. Let us recap what we have done so far. We created a simple layout, added some style to it and some interactions. Up until this point, all of our content was placed in our HTML file. Static websites like this are good when you always want to display the same content, like info pages. But what if we want to display different questions when loading the page? It gets boring answering the same question over and over again. Now, we will take this hard coded content and use it in JavaScript as a blueprint to dynamically generate a question and display it in our HTML. You heard correctly, we will create HTML content with JavaScript!`,
                },
                {
                    type: "custom",
                    content: <img src={image1} alt="img" style={{ position: "absolute", left: "0", top: "-100px", width: "100%", transform: "translateX(47vw)" }} />,
                }
            ]
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `You can add HTML code to an HTML file thanks to functions such as `,
                },
                {
                    type: "tagged",
                    content: `element.insertAdjacentHTML()`,
                },
                {
                    type: "text",
                    content: `. All you need to provide is the element, into which you want to insert your code, where exactly it should be placed (append oder prepend it?), and the code you want to insert as a string. We want to insert a question card, which we already have in our HTML file: `,
                },
                {
                    type: "tagged",
                    content: `<div class=”question-container>`,
                },
                {
                    type: "text",
                    content: `. So let’s copy that and all of its nested `,
                },
                {
                    type: "tagged",
                    content: `<div>`,
                },
                {
                    type: "text",
                    content: `s and paste it into our JavaScript file. We save it to a variable called “questionHTML”, but we need to remove the line breaks and wrap it into quotes for it to be a string. Be aware that when using double quotes for a string, that all of the quotes in your string need to be replaced by single quotes (‘). As mentioned before, we need to identify a containing element, to which we can add our HTML. If we look at our HTML file, we see that our question-container is placed inside a `,
                },
                {
                    type: "tagged",
                    content: `<div id=”questions”>`,
                },
                {
                    type: "text",
                    content: `. We can select this `,
                },
                {
                    type: "tagged",
                    content: `<div>`,
                },
                {
                    type: "text",
                    content: ` with `,
                },
                {
                    type: "tagged",
                    content: `document.getElementById(“questions”)`,
                },
                {
                    type: "text",
                    content: `. Then we use the insert function to add the HTML code at the end of the `,
                },
                {
                    type: "tagged",
                    content: `<div>`,
                },
                {
                    type: "text",
                    content: `. Our JavaScript file looks like this now:`,
                },
            ]
        },
        {
            type: "p",
            content: [
                {
                    type: "code",
                    content: `sgkjdhsdkjghksjhdg
                        `,
                }
            ]
        },
        {
            type: "p",
            content: `The cool thing about JavaScript is, you can concatenate strings. For us, this means we can replace content like “Science & Nature” with variables. Remember our example data? It has the following structure:`,
        },
        {
            type: "p",
            content: [
                {
                    type: "code",
                    content: `{
    category: "Science & Nature",
    type: "multiple",
    difficulty: "easy",
    question: "71% of the Earth’s surface is made up of",
    correct_answer: "Water",
    incorrect_answers: ["Deserts", "Continents", "Forests"]
}`,
                }
            ]
        },
        {
            type: "p",
            content: `As you remember from last “Sprint” we can access the values through dot notation. When we save this data to a variable “question”, “question.category” will give us “Science & Nature”. When using this data structure in JavaScript, it allows us to create the same HTML markup but gives us more options to be creative, like randomizing answers, etc. Let's look at our example:`,
        },
        {
            type: "p",
            content: `example`,
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `The next part could prove to be a bit more tricky. The way our data is presented, the correct and incorrect answers are seperated from eachother, while the correct one is always displayed in the same spot. That makes for a rather boring quiz once a player has this system figured out. Therefore we need to randomize the order of answers. As always, there are plenty of ways to go about it. One way to do it is adding the correct answer to the list of incorrect answers, forming a new array. In the next step there are two options: shuffling the array, or drawing an element at a random location from the array and removing it in the process. Whatever option you go for, getting iup to speed with the use of `,
                },
                {
                    type: "link",
                    content_text: `randomizaiton`,
                    content_link: `https://www.geeksforgeeks.org/javascript-math-random-function/`,
                },
                {
                    type: "text",
                    content: ` is certainly a great idea. Try and develop some ideas on how to tackle this problem and play around in the console to quickly test them. If nothing works, ask your teammates or your mentor, there is always a way.`,
                },
            ]
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `Awesome. Take a look at what you have created so far! If you have questions or your code doesn’t work as you wish, don’t hesitate to contact your mentor or ask in our Slack group! The next “Sprint” will add more questions to your quiz. And if you really want to take your JavaScript skills to the next level, you will get a first glimpse at working with APIs.`,
                },
                {
                    type: "custom",
                    content: <img src={image2} alt="img" style={{ position: "absolute", left: "0", top: "-300px", width: "100%", transform: "translateX(47vw)" }} />,
                }
            ]
        },
        {
            type: "milestone",
            content: `The content now comes from your JavaScript file and the answers are being displayed in random order whenever you reload your quiz.`,
        },
        {
            type: "link-btn",
            content: {
                text: "Back",
                destination: "/sprint2"
            },
        },
        {
            type: "link-btn",
            content: {
                text: "Home",
                destination: "/"
            },
        },
        {
            type: "link-btn",
            content: {
                text: "Next",
                destination: "/sprint4"
            },
        },
    ],
    [],
];

const Sprint3 = () => {
    return (
        <div className="container">
            <div className="textarea">
                {content.map((item) => (
                    item.map((thing) => (
                        parser(thing)
                    ))
                ))}
            </div>
            <div className="visuals"></div>
        </div>
    );
};

export default Sprint3;