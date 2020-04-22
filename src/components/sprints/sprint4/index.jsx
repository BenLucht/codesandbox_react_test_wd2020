import React from 'react';
import Iframe from 'react-iframe';
import ReactJson from 'react-json-view';

import MiniBrowser from './MiniBrowser';
import parser from '../../parser';

import '../style.css';

const content = [
    [
        {
            type: "h1",
            content: `We're having a quiz!`,
        },
    ],
    [
        {
            type: "h3",
            content: `Setting up the next steps`,
        },
        {
            type: "p",
            content: `In the previous “Sprint” we created dynamic content for one question. Today, we add more questions, making it a real quiz. You can find an array of objects representing a complete quiz below. Copy and paste it into your JavaScript. Assign a variable to it named “questions”. We can now utilize the array and its functions to loop over the contained objects, rendering a card for each object and therefore an entire quiz! Most of the functionality already has been done, so all that is left to do is wrap things in a nice for loop.`,
        },
        {
            type: "other",
            content: "json",
        },
        {
            type: "h3",
            content: `Bringing it all together`,
        },
        {
            type: "p",
            content: `After completing all the previous steps, you most likely already have a good idea on how to proceed. You already know how to loop over arrays and you have practiced using that to add elements to your HTML file. Therefore this step does not faze you at all:`,
        },
        {
            type: "p",
            content: [
                {
                    type: "tagged",
                    content: `Easy thing`,
                }
            ]
        },
        {
            type: "p",
            content: `However, by implementing the quiz similar to what we descriped in the last "Sprints", the probability is high that you will run into some issues. One possible breaking point is when you click on one of the answers. This task might fail in a spectacular way, because the way the questions are implemented, all the variables have the same names and the browswer will not know which one to look for and how to handle the conflicting information.`,
        },
        {
            type: "p",
            content: `You have to construct a method to store the information about the events on a higher level than each single question card. There is no need to worry, as you already know tools that will help you achieve this. A good way of representing a list of information are arrays, but constructing an object with elements corresponding to the questions is a perfectly valid approach aswell. Give this - admittedly rather challenging - task a try. Read the error messages carefully. They often contain valueble information about where things break. Going ahead here isn't perfectly straight forward, but you will come to understand how things are coming together much better if you try and fail a few times before asking your mentor for the solution. Of course when things happen that you can't understand, never hesitate to ask your mentor for help!`,
        },
        {
            type: "h3",
            content: `Give me more!`,
        },
        {
            type: "p",
            content: `How great is this?! You have built an antire quiz, dynamically generated, with everything needed to play the game. But there is one thing that detracts from the fun. We only have 10 questions. That IS fun, but it could be better. And we are in luck, where these questions came from there are more! And this is a convenient time to learn about APIs.`,
        },
        {
            type: "p",
            content: `API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the weather on your phone, you’re using an API. Modern APIs adhere to standards (typically HTTP and REST), that are developer-friendly, easily accessible and understood broadly.`,
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `We are using the `,
                },
                {
                    type: "link",
                    content_text: `Open Trivia Database`,
                    content_link: `https://opentdb.com/api_config.php`,
                },
                {
                    type: "api-iframe",
                    content: `https://opentdb.com/api_config.php`,
                },
                {
                    type: "text",
                    content: `. You can click the link or use the frema to the right to familiarize yourself with the website. It is mostly self explanatory:`,
                },
            ],
        },
        {
            type: "ul",
            content: [
                {
                    type: "li",
                    content: `Number of questions - Select any number of questions you like`,
                },
                {
                    type: "li",
                    content: `Category - There are 24 categories to choose from`,
                },
                {
                    type: "li",
                    content: `Difficulty - Three levels of difficulty`,
                },
                {
                    type: "li",
                    content: `Type - We have built a multiple choice quiz, true/false would also be an option`,
                },
                {
                    type: "li",
                    content: `Encoding - Just leave it on default`,
                },
            ]
        },
        {
            type: "p",
            content: `Once you click "Generate API URL" you'll be redirected to a page displaying - you guessed it - a URL. Copy the URL and paste it in a new tab. After pressing enter, if everything goes well, you will see a JSON object. It should look something like this:`,
        },
        {
            type: "json",
            content: {"response_code":0,"results":[{"category":"Geography","type":"boolean","difficulty":"easy","question":"San Marino is the only country completely surrounded by another country.","correct_answer":"False","incorrect_answers":["True"]},{"category":"Science: Computers","type":"multiple","difficulty":"hard","question":"What port does HTTP run on?","correct_answer":"80","incorrect_answers":["53","443","23"]},{"category":"Entertainment: Film","type":"multiple","difficulty":"easy","question":"For the film &quot;Raiders of The Lost Ark&quot;, what was Harrison Ford sick with during the filming of the Cairo chase?","correct_answer":"Dysentery","incorrect_answers":["Anemia","Constipation","Acid Reflux "]}]},
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `As you can see, it looks very similar to the example object that we ave provided above. The only difference is that the array of objects is not itself nested inside an object. It can be selected the same way as every other value inside an object by calling `,
                },
                {
                    type: "tagged",
                    content: `object[results]`,
                },
                {
                    type: "text",
                    content: ` or `,
                },
                {
                    type: "tagged",
                    content: `object.results`,
                },
            ],
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `The only step left is getting the data. Of course it does not make sense to manually call the URL and pasting its values every time we want to play a new game. JavaScript provides a method to get data from an API called `
                },
                {
                    type: "tagged",
                    content: `fetch()`,
                },
                {
                    type: "text",
                    content: `. There is extensive documentation online, for example `,
                },
                {
                    type: "link",
                    content_text: `here`,
                    content_link: `https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch`,
                },
                {
                    type: "text",
                    content: `. All that is left to do is fetching the data either on page load or when a "load new data" button is pressed and the endless fun can begin!`,
                },
            ]
        },
        {
            type: "link-btn",
            content: {
                text: "Back",
                destination: "/sprint3"
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
                destination: "/"
            },
        },
    ],
    [],
];

// const loadJSON = () => {
    
// };

const Sprint4 = () => {
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
                <MiniBrowser exampleCode={{ html: "sdkjfh", css: "skjdgh" }} />
            </div>
        </div>
    );
};

export default Sprint4;