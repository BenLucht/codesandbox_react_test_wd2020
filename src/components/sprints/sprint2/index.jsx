import React from 'react';
import parser from '../../parser';

import image1 from "./images/undraw_hacker_mind_6y85.png";
import image2 from "./images/undraw_developer_activity_bv83.png";
import image3 from "./images/undraw_programmer_imem.png";
import image4 from "./images/undraw_code_review_l1q9.png";


import '../style.css';


const content = [
    [
        {
            type: "h1",
            content: `Interaction is key`,
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
                    content: `This is where the fun starts. In this “Sprint”, we are going to add interactions to our website we created in “Sprint 1”. We already know what we want, since we wrote our website’s desired behaviour on our sketch from “Sprint 0”. Whenever it comes to interactions, you will use JavaScript. As before, we will take small steps towards this Sprint’s goal: Creating a functionality that allows us to evaluate the clicked answer and saving it to a variable. There are four sub-tasks for this Sprint, which we will go through in detail. To start it off, let’s create a JavaScript file called “quiz.js” in the same directory as our HTML file. Then connect it to our HTML file by adding the following code after the closing `,
                },
                {
                    type: "tagged",
                    content: `<body>`,
                },
                {
                    type: "text",
                    content: ` tag:`,
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
                    type: "code",
                    content: `<script type="text/javascript" src="quiz.js"></script>`,
                }
            ]
        },
        {
            type: "p",
            content: `To test if the script actually works, type the following code in your JS file:`,
        },
        {
            type: "p",
            content: [
                {
                    type: "code",
                    content: `alert(“Hello”);`,
                }
            ]
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `Save the file and reload your page. Does your page display a popup alert? Then you’re good to go. If not, make sure that your `,
                },
                {
                    type: "tagged",
                    content: `<script>`,
                },
                {
                    type: "text",
                    content: ` tag is in the right place, the file path (src) is correct, and/or that there aren’t any typos in the `,
                },
                {
                    type: "tagged",
                    content: `<script>`,
                },
                {
                    type: "text",
                    content: ` tag. With our JS file in place, we can now start with the sub-tasks.`,
                },
            ]
        },
        {
            type: "h3",
            content: `Display an alert upon clicking an answer-button and let it show which button was clicked`,
        },
        {
            type: "p",
            content: `To finish this sub-task, we need to do two things: add click events to our options and find out what the content of the clicked option is. Adding an event in JS always follows the same theme: First you need to get the element(s) you want to add the behaviour to. Then you actually give it the behaviour - namely, you tell JS to listen for a specific interaction (“event”) for this specific element. We will apply this to our options.`,
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `Getting the elements is easy. As you’ve seen in your online course, there are different ways to identify an element on our website, e.g. `,
                },
                {
                    type: "tagged",
                    content: `querySelector()`,
                },
                {
                    type: "text",
                    content: `, `,
                },
                {
                    type: "tagged",
                    content: `getElementsByClassName()`,
                },
                {
                    type: "text",
                    content: `. Taking a look at our HTML, we see that we gave every option a class of “option”. Therefore, we can use the `,
                },
                {
                    type: "tagged",
                    content: `getElementsByClassName()`,
                },
                {
                    type: "text",
                    content: ` method to get them all. (You can delete the `,
                },
                {
                    type: "tagged",
                    content: `alert()`,
                },
                {
                    type: "text",
                    content: ` from before)`,
                }
            ]
        },
        {
            type: "p",
            content: [
                {
                    type: "code",
                    content: `var options = document.getElementsByClassName(“option”);
console.log(options);`,
                }
            ],
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `We saved our query result to the variable options, because it will allow us to work with it later. We also added console.log(), so we can see what the results are when accessing the developer console of your browser. As we can see there, options is a list (or “HTMLCollection”) consisting of four elements. All we have to do now is iterate over this list and add a “click” event each time. You probably know the for-loop by now. The most common for-loop looks something like this:`,
                },
                {
                    type: "custom",
                    content: <img src={image2} alt="img" style={{ position: "absolute", left: "0", top: "-100px", width: "100%", transform: "translateX(47vw)" }} />,
                }
            ]
        },
        {
            type: "p",
            content: [
                {
                    type: "code",
                    content: `for(var i = 0; i <= options.length; i++) {
    //some code 
};`,
                },
            ],
        },
        {
            type: "p",
            content: `We will introduce another for-loop that does exactly the same thing, but you don’t have to worry about the starting point, the length of the list, and counting up:`,
        },
        {
            type: "p",
            content: [
                {
                    type: "code",
                    content: `for(let option of options) { 
    //some code
};`,
                }
            ]
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `Don’t get confused because of the “`,
                },
                {
                    type: "tagged",
                    content: `let`,
                },
                {
                    type: "text",
                    content: `”. It is a different way to declare a variable. This for-loop goes over every single item in your list. You can access and work with each item inside your loop by referencing “option”. Let’s add our “click” event by using the JS method `,
                },
                {
                    type: "tagged",
                    content: `addEventListener()`,
                },
                {
                    type: "text",
                    content: `. This method takes two arguments: First, the kind of event we want to add (in our case “click”, but there are many more) and a function, which defines the behaviour that should trigger when the event is called. We will start off by logging the option to check if everything works as wished.`,
                },
            ]
        },
        {
            type: "p",
            content: [
                {
                    type: "code",
                    content: `for(let option of options) {
    option.addEventListener("click", function(e) {
            console.log(option);
        });
};`,
                }
            ]
        },
        {
            type: "p",
            content: `As you might have noticed, we gave our function inside of addEventListener an argument called “e”. We will get back to what it does shortly. For now, save your file, reload your page, and check in your console, if the clicked answer is being logged to your console.`,
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `We can see that it works, but it logs the entire  `,
                },
                {
                    type: "tagged",
                    content: `<div class=”option”>`,
                },
                {
                    type: "text",
                    content: ` with all of its content. We only want the text though - How can we do that? Here is where the “e” comes in. “e” is short for “event”, though you can name it whatever you want. This variable holds all the information about the event, in this case the “click” event, which was called. We won’t go much into detail, what you can access but if you’re interested feel free to take a look at it. All we need is the text of our event target, which we can access like this:`,
                },
            ]
        },
        {
            type: "p",
            content: [
                {
                    type: "code",
                    content: `for(let option of options) {
    option.addEventListener("click", function(e) {
            var givenAnswer = e.target.innerText;
            alert(givenAnswer);
        });
};`,
                }
            ]
        },
        {
            type: "p",
            content: `Just like that we finished our first subtask of displaying an alert showing our clicked answer.`,
        },
        {
            type: "h3",
            content: `Deactivate the buttons once one of them was clicked`,
        },
        {
            type: "p",
            content: `When closing our alert, we are still able to click different options. That is not the desired behaviour for our quiz. We only want one answer per question. We can achieve this goal differently. One option would be to remove the click event from each option again once an answer was given. Keep in mind to only remove the event from the options for one question and not all questions!`,
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `A different approach would be to track which questions have been answered and only if a question hasn’t been answered we will trigger our functionality. We will go with the latter. To track which questions have been answered, we want to introduce a data format called JSON. You’ve seen it before when we provided the example question. JSON is a very simple format, where the data is stored in so called key-value-pairs:`,
                },
                {
                    type: "custom",
                    content: <img src={image3} alt="img" style={{ position: "absolute", left: "0", top: "-100px", width: "100%", transform: "translateX(47vw)" }} />,
                }
            ]
        },
        {
            type: "p",
            content: [
                {
                    type: "code",
                    content: `var data = {key: “value”}`,
                }
            ]
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `You then access the data through dot-notation oder with squared brackets. `,
                },
                {
                    type: "tagged",
                    content: `data.key`,
                },
                {
                    type: "text",
                    content: ` (or `,
                },
                {
                    type: "tagged",
                    content: `data[key]`,
                },
                {
                    type: "text",
                    content: `) will output “value”. Let’s add a variable called “score” to our script.`,
                },
            ]
        },
        {
            type: "p",
            content: [
                {
                    type: "code",
                    content: `var options = document.getElementsByClassName(“option”);
var score = {};

for(let option of options) {
    option.addEventListener("click", function(e) {
            var givenAnswer = e.target.innerText;
            alert(givenAnswer);
        });
};`,
                }
            ]
        },
        {
            type: "p",
            content: `For now it is just an empty JSON object. When we click an answer, we want to check if there already is a reference to the question (like the ID, e.g. “1. Question” or “1”) in score. If not, we will alert our answer and add a reference to the question. If there already is, we will do nothing.`,
        },
        {
            type: "p",
            content: [
                {
                    type: "code",
                    content: `for(let option of options) {
    option.addEventListener("click", function(e) {
            var givenAnswer = e.target.innerText;

        if(score[1] == null) {
                alert(givenAnswer);
            score[1] = “answered”;
        }
        });
};`,
                }
            ]
        },
        {
            type: "p",
            content: `As you can see, we checked if there is a key “1” in our JSON object “score”. If that is not the case, i.e. the value of score[1] is equal to “null”, we alert a message and then set “score[1]” to “answered”. We can later use this, to keep track of which questions were answered correctly and which weren’t by setting the score reference to “0” or “1” respectively instead of “answered”. Save the file and see for yourself. Once an answer has been given, nothing will be alerted to your window when clicking another answer.`,
        },
        {
            type: "h3",
            content: `Develop a system to represent which answers are correct or false and highlight the buttons accordingly after clicking one`,
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `Next step: find out if the given answer is correct. How can we compare it? Well, we know that the correct answer is “Water”. Therefore we can create a variable that holds the correct answer and then compare it with the given answer, which we currently alert to the user. When the given answer is the same as the correct answer, we will highlight our button green, otherwise red.`,
                },
                {
                    type: "custom",
                    content: <img src={image4} alt="img" style={{ position: "absolute", left: "0", top: "-100px", width: "100%", transform: "translateX(47vw)" }} />,
                }
            ]
        },
        {
            type: "h3",
            content: `Save the answer status (correct or false) in a variable instead of showing an alert`,
        },
        {
            type: "p",
            content: `Just like that we have a basic system to evaluate answers. Removing the alert and saving the answer status to a variable is all that is left to do for this “Sprint”.`,
        },
        {
            type: "p",
            content: `There we go. You implemented a great deal of the basic functionality for your quiz. Thus far, we only focused on behaviour and the content was static. In our next “Sprint” we will get into dynamic content creation and randomization with JavaScript.`,
        },
        {
            type: "milestone",
            content: `Your quiz now reacts to clicked answers and highlights them accordingly.`,
        },
        {
            type: "link-btn",
            content: {
                text: "Back",
                destination: "/sprint1"
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
                destination: "/sprint3"
            },
        },
    ],
    [],
];

const Sprint2 = () => {
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
                {/* <img src={image1} alt="wireframe" style={{ width: "40vw", top: "15vh", position: "relative" }} />
                <img src={image2} alt="wireframe" style={{ width: "40vw", top: "85vh", position: "relative" }} />
                <img src={image3} alt="wireframe" style={{ width: "40vw", top: "145vh", position: "relative" }} />
                <img src={image4} alt="wireframe" style={{ width: "40vw", top: "200vh", position: "relative" }} />
                <img src={image5} alt="wireframe" style={{ width: "40vw", top: "255vh", position: "relative" }} /> */}
            </div>
        </div>
    );
};

export default Sprint2;