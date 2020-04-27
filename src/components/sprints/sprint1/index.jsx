import React from 'react';
import LazyLoad from 'react-lazyload';
import parser from '../../parser';

import image1 from "./images/undraw_feeling_proud_qne1.png";
import image2 from "./images/undraw_code_typing_7jnv.png";
import image3 from "./images/undraw_innovative_b409.png";

import '../style.css';

const content = [
    [
        {
            type: "h1",
            content: `The quiz is on the cards`,
        },
    ],
    [
        {
            type: "h3",
            content: `The foundations`,
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `The results of the previous sprint gave us an idea, how our website will be structured and what it will look like later. Now, we will start writing code. At the end of this “Sprint” you will have the layout of your website in HTML and CSS with one question displayed. While it sounds like a lot in the beginning, you will be surprised how quickly you will have your basic layout in HTML. Let’s get started by creating an HTML document. Every HTML document has the same basic structure, from which you will start filling in your own content and data:`,
                },
                {
                    type: "custom",
                    content: <LazyLoad height={400} offset={100}><img src={image1} alt="img" style={{ position: "absolute", left: "0", top: "-100px", width: "100%", transform: "translateX(47vw)" }} /></LazyLoad>,
                }
            ]
        },
        {
            type: "p",
            content: [
                {
                    type: "tagged",
                    content: `<!DOCTYPE html>
    <html lang="de" dir="ltr">
        <head>
        <meta charset="utf-8">
        <title>Quiz</title>
        </head>
        <body>
        </body>
    </html>
    `,
                }
            ],
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `In the `,
                },
                {
                    type: "tagged",
                    content: `<head>`,
                },
                {
                    type: "text",
                    content: ` section of the HTML comes stuff, that is mainly important for the browser to correctly display your site. The `,
                },
                {
                    type: "tagged",
                    content: `<body>`,
                },
                {
                    type: "text",
                    content: ` handles everything the user sees. We added a `,
                },
                {
                    type: "tagged",
                    content: `<title>`,
                },
                {
                    type: "text",
                    content: ` element to give our website a name. Save the file and open it in a browser. You will see a blank page, but when you look at the name of your tab, it will say “Quiz”.`,
                }
            ]
        },
        {
            type: "p",
            content: [
                {
                        type: "tagged",
                        content: `<body>
                        <div class=”content”></div>
                    </body>
                    `,
                    },
            ],
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `Everything we add from now on will go into that div. As you have noticed, we added a class called “content” to our `,
                },
                {
                    type: "tagged",
                    content: `<div>`,
                },
                {
                    type: "text",
                    content: `. While for now it only describes the function of this div, it will come in handy later, when we style it with CSS.`,
                }
            ]
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `Now it’s time to create the header element. This element contains a Title, the score, as well as a button “New Game”. Just like before, when we want to group stuff together, we will use a `,
                },
                {
                    type: "tagged",
                    content: `<div>`,
                },
                {
                    type: "text",
                    content: `. Inside this `,
                },
                {
                    type: "tagged",
                    content: `<div>`,
                },
                {
                    type: "text",
                    content: `, we place the Title (`,
                },
                {
                    type: "tagged",
                    content: `<h2>`,
                },
                {
                    type: "text",
                    content: ` element), the score (`,
                },
                {
                    type: "tagged",
                    content: `<p>`,
                },
                {
                    type: "text",
                    content: ` element), and a “New Game” button (`,
                },
                {
                    type: "tagged",
                    content: `<a>`,
                },
                {
                    type: "text",
                    content: ` element):`,
                }
            ],
        },
        {
            type: "p",
            content: [
                {
                    type: "tagged",
                    content: `<body>
                    <div class=”content”>
                        <div id=”header”>
                            <h2>MyQuiz Title</h2>
                            <p>Score: 0</p>
                            <a href="" class=”newGame”> New Game </a>
                        </div>
                </div>
                </body>
                `,
                }
            ]
        },
        {
            type: "p",
            content: `So far so good. We created our first element - the header. Next: The question(s). While we will have multiple questions in our quiz later, we create the layout for one question now. That layout will be the same for all the questions, which makes it redundant to programm it all. To make it easier, here’s an example question, you can use for now:`,
        },
        {
            type: "p",
            content: [
                {
                    type: "tagged",
                    content: `{
                        category: "Science & Nature",
                        type: "multiple",
                        difficulty: "easy",
                        question: "71% of the Earth’s surface is made up of",
                        correct_answer: "Water",
                        incorrect_answers: ["Deserts", "Continents", "Forests"]
                        }
                        `,
                }
            ],
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `You might say “That looks weird”. What we provided here is a data structure called JSON. But don’t worry! You won’t need to understand it or work with it now. We will get back to that in “Sprint 3”. For now, we only need “category”, “question”, “correct_answer” and “incorrect_answers”. As you might have guessed, the latter two will comprise our options. Before we jump into our main part of this “Sprint”, we would like to show you how important `,
                },
                {
                    type: "tagged",
                    content: `<div>`,
                },
                {
                    type: "text",
                    content: ` elements are in Web Development. We already used it for the header, to group other elements together. This is a very common theme in Web Development, and you will be very familiar with `,
                },
                {
                    type: "tagged",
                    content: `<div>`,
                },
                {
                    type: "text",
                    content: `s in a short amount of time. This method allows you to style elements differently and you can target different layers of one element. As an example for the use of `,
                },
                {
                    type: "tagged",
                    content: `<div>`,
                },
                {
                    type: "text",
                    content: `s in websites, we visited reddit.com and added a 1px solid red border to every single `,
                },
                {
                    type: "tagged",
                    content: `<div>`,
                },
                {
                    type: "text",
                    content: `. Here is the result:`,
                },
                {
                    type: "custom",
                    content: <LazyLoad height={400} offset={100}><img src={image2} alt="img" style={{ position: "absolute", left: "0", top: "-100px", width: "100%", transform: "translateX(47vw)" }} /></LazyLoad>,
                }
            ]
        },
        {
            type: "img",
            content: `image`,
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `That’s a lot of `,
                },
                {
                    type: "tagged",
                    content: `<div>`,
                },
                {
                    type: "text",
                    content: `s isn’t it? There is even a `,
                },
                {
                    type: "tagged",
                    content: `<div>`,
                },
                {
                    type: "text",
                    content: ` inside a `,
                },
                {
                    type: "tagged",
                    content: `<div>`,
                },
                {
                    type: "text",
                    content: ` inside a `,
                },
                {
                    type: "tagged",
                    content: `<div>`,
                },
                {
                    type: "text",
                    content: ` inside - you get the point. `,
                },
                {
                    type: "tagged",
                    content: `<div>`,
                },
                {
                    type: "text",
                    content: `-ception.`,
                }
            ],
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `You will get some `,
                },
                {
                    type: "tagged",
                    content: `<div>`,
                },
                {
                    type: "text",
                    content: ` practice right now, because we will use more `,
                },
                {
                    type: "tagged",
                    content: `<div>`,
                },
                {
                    type: "text",
                    content: `s for our question container. First, we will group all questions so, when we want to style it collectively, we can do just that. Also it gives our code more structure:`,
                },
            ],
        },
        {
            type: "p",
            content: [
                {
                    type: "tagged",
                    content: `<body>
                    <div class=”content”>
                        <div id=”header”>
                            <h2>MyQuiz Title</h2>
                            <p>Score: 0</p>
                            <a href="" class=”newGame”> New Game </a>
                        </div>
                
                        <div id=”questions”>
                            <div class=”question-container”>
                            </div>
                        </div>
                </div>
                </body>                
                        `,
                }
            ],
        },
        {
            type: "p",
            content: `Now we have our “question-container”, but we still only see our header on our website. To change that, we have to start adding the final elements. To break down what a single question consists of, we need to take a look at our sketch and make a list:`,
        },
        {
            type: "ul",
            content: [
                {
                    type: "li",
                    content: `One element displaying “Question 1 - Category”`,
                },
                {
                    type: "li",
                    content: `One element displaying the question text`,
                },
                {
                    type: "li",
                    content: `The answer options`,
                }
            ]
        },
        {
            type: "p",
            content: `Now it's your turn! You can take the basis we have developed together and run with it, or start over fresh with your own unique ideas. However, we believe you can build your project on this foundation. If things don't always work out the way you imagine or problems arise, do not hesitate to contact your mentor for help (after Google, YouTube, Stackoverflow, and your teammates)!`,
        }
    ],
    [
        {
            type: "h3",
            content: `CSS`,
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `To add style to our HTML, we will create a new file in the same directory as our HTML document and call it “style.css”. To connect the stylesheet with the website, we need to add the following code to our HTML document’s `,
                },
                {
                    type: "tagged",
                    content: `<head>`,
                },
                {
                    type: "text",
                    content: `:`,
                },
            ],
        },
        {
            type: "p",
            content: [
                {
                    type: "tagged",
                    content: `<link rel="stylesheet" href="style.css">`,
                },
            ],
        },
        {
            type: "p",
            content: `For the styling, you can be as creative as you want. We will follow our sketch from before, but leave out some borders to make it look better. Here is where our “class” names for each div come in handy. We can reference them easily and apply individual stylings. Here’s the CSS Code we will add:`,
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `We won’t go into everything here, because going into detail for each and everything would be too much for this guide. But a few things we want to point out:`,
                },
                {
                    type: "custom",
                    content: <LazyLoad height={400} offset={100}><img src={image3} alt="img" style={{ position: "absolute", left: "0", top: "-100px", width: "100%", transform: "translateX(47vw)" }} /></LazyLoad>,
                }
            ]
        },
        {
            type: "ul",
            content: [
                {
                    type: "li",
                    content: `We used the font ‘Open Sans’ as a default. If your or a user’s browser doesn’t support this font-family, it will default to “sans-serif” because it is the next font we specified in our list.`,
                },
                {
                    type: "li",
                    content: `Some elements like the <h2> are block level elements, meaning it will take up all the space in a row and ban all other content below. To change that, we used “display: inline-block”.`,
                },
                {
                    type: "li",
                    content: `To center our content, we used “margin: 0 auto”. This will automatically center your content, independent of the browser size.`,
                },
                {
                    type: "li",
                    content: `A lot of positioning is done by using “margin” or “padding”. It is helpful to know the difference between the two. “padding” affects the spacing inside an element, “margin” outside.`,
                },
                {
                    type: "li",
                    content: `“box-shadow” is used to give our page more depth. You can play around with different colours and shadow sizes!`,
                },
                {
                    type: "li",
                    content: `“cursor: pointer” tells the browser that it should change the user’s cursor to a pointer.`,
                },
                {
                    type: "li",
                    content: `We use the pseudo selector “:hover” occasionally” to add some functionality. There are more of those and worth looking at!`,
                },
            ]
        },
        {
            type: "p",
            content: `If things aren’t clear, please don’t hesitate and contact your mentor. They are more than happy to help you!`,
        },
        {
            type: "p",
            content: `Time to grab a beer or a glass of wine and celebrate your achievements thus far. You managed to write a website in HTML, made it look good and took a huge step towards finishing the project! In our next “Sprint” we will introduce interactions to our website.`,
        },
        {
            type: "milestone",
            content: `You translated your sketch into HTML and CSS with one question displayed.`,
        },
        {
            type: "link-btn",
            content: {
                text: "Back",
                destination: "/sprint0"
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
                destination: "/sprint2"
            },
        },
    ],
    [],
];

const Sprint1 = () => {
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
                <img src={image2} alt="wireframe" style={{ width: "40vw", top: "65vh", position: "relative" }} />
                <img src={image3} alt="wireframe" style={{ width: "40vw", top: "125vh", position: "relative" }} /> */}
            </div>
        </div>
    );
};

export default Sprint1;