import React from 'react';
import parser from '../parser';

import MiniBrowser from './MiniBrowser';

import '../sprints/style.css';

import imageConsole1 from "./images/overviewjs1.png";
import imageConsole2 from "./images/console_example.png";
// import image2 from "./images/undraw_faq_rjoy.png";

const example1HTML = `<input type="text" id="a" />
<input type="text" id="b" />
<button>Add</button>
<div></div>`;

const example1JS = "";

const example2JS = `function add(a, b) {
  return a + b;
};`;

const example3JS = `const a = document.querySelector('#a');
const b = document.querySelector('#b');
const btn = document.querySelector('button');
const prnt = document.querySelector('div');`;

const example4JS = `const a = document.querySelector('#a');
const b = document.querySelector('#b');
const btn = document.querySelector('button');
const prnt = document.querySelector('div')`;

const example5JS = `const a = document.querySelector('#a');
const b = document.querySelector('#b');
const btn = document.querySelector('button');
const prnt = document.querySelector('div');

function add(a, b) {
	return a + b;
};

btn.addEventListener('click', () => console.log(add(a.value, b.value)));`;

const example6JS = `const a = document.querySelector('#a');
const b = document.querySelector('#b');
const btn = document.querySelector('button');
const prnt = document.querySelector('div');

function add(a, b) {
	return a + b;
};

btn.addEventListener('click', () => prnt.innerText = add(a.value, b.value));`;

const example7JS = `const a = document.querySelector('#a');
const b = document.querySelector('#b');
const btn = document.querySelector('button');
const prnt = document.querySelector('div');

function add(a, b) {
	return a + b;
};

btn.addEventListener('click', () => prnt.innerText = add(+a.value, +b.value));`;

const content = [
    [
        {
            type: "h1",
            content: `Becoming a JavaScript Developer`,
        },
        {
            type: "h3",
            content: `What is JavaScript`,
        },
        {
            type: "p",
            content: `While JavaScript is a quirky and not highly performant by itself, nor fully featured programming language, it is the standard programming language of the web. It is in fact the only programming language supported by all widely available browsers - besides WebAssembly, but that is a topic for after your computer science degree. So why is JavaScript the industry standard even though it is far from perfect? The answer is simple and difficult all at once, but here is a brief run down of how things happened: When the internet was still rather young, there were a lot of competitors in the market of how to deliver content to the user. Microsoft was already a powerhouse in the early 1990s, but they did not jump onto the new trend quickly enough. The industry leader in browser technology at the time was a company called Netscape with their product Netscape Navigator. At the time, the internet mostly featured static content, but the rise of graphical user interfaces introduced new possibilities to users and developers alike. Competitors tried to establish existing programming languages as options in the market, but the limitations of the web at the time and the potential for harm by using an unrestricted gateway into users computers curbed their efforts. Brendan Eich, a Netscape employee in 1995, then developed Mocha, a limited capability language that was easy to use and implement in the Netscape browser. Microsoft, having caught up to the times, tried to gain control over the emerging technology and introduced Internet Explorer, complete with their implementation of VisualBasic (the same language still haunting Excel programmers to this day). In order to withstand the force that was Microsoft, Netscape had to partner up with a comparably established company and found it in Sun Microsystems. Sun had developed and established Java, at the time one of the most advanced programming languages and software development systems (Oracle, which bought Sun in 2010, claims that Java runs on more than 3 billion devices today, Googles Android operating system is based on Java, as are many popular applications). They saw this as a double opportunity to stand up to Microsoft as well as establishing themselves in the internet business, so a cooperation arrangement was formed, resulting in Mocha being renamed JavaScript and pushed by the two companies as the web standard. It is interesting to note that JavaScript has little in common with Java, the naming was more of a marketing tool than actual substance.`,
        },
        {
            type: "p",
            content: `JavaScript however was quickly assembled and proved to be very limiting for developers. Inevitably Microsoft crushed its competition with a market share of up to 95%, stifling JavaScript development, thus prompting developers to look for more capable alternatives. The most prominent options was Adobes Flash Player (originally developed by Macromedia - you probably see a pattern in naming at the time by now, Microsoft, Microsystems, Macromedia, etc.) which allowed the use of so-called ActionScript, based on C++, to be run in the browser. This technology enabled developers to implement modern features, though, at the expense of performance and being subject to the demands and developments of Adobe. Many attempted to find better alternatives and finally rediscovered JavaScript as an option. Through decades of development, a completely reworked version of JavaScript was published in 2009. In 2010 Steve Jobs published „Thoughts on Flash“, an open letter detailing why Apple would drop support for Flash on iOS devices. This was followed by industry wide controversy which culminated in the renaissance of JavaScript development that has only accelerated to this day.`,
        },
        {
            type: "h3",
            content: `Now the actual JavaScript`,
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `Congratulations on surviving this little history lesson! Now let us look at how to program. But where do we run this program? Simply in the browser. As described in the last part on CSS, you can open the developer tools of your browser. There you’ll find one more part that we have not discussed yet: the console. `,
                },
                {
                    type: "custom",
                    content: <img style={{ width: "100%", top: "-100px", left: "0", position: "absolute", transform: "translateX(47vw)" }} src={imageConsole1} alt="console" />
                }
            ]
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `You can type any JavaScript commands you like into this console, run them, and the browser will interpret the code for you. Let’s try a simple example:`,
                },
                {
                    type: "custom",
                    content: <img style={{ width: "90%", margin: "2rem 2.5% 0 2.5%" }} src={imageConsole2} alt="console" />
                }
            ]
        },
        {
            type: "p",
            content: `You successfully wrote and ran your first JavaScript! While this part will continue with some more interesting information on how to write and use code in your project, we highly recommend jumping over to learnjavascript.online for a fantastic training ground for JavaScript and a perfect supplement for the lessons in our Udemy course. There you can learn modern JavaScript from scratch, and practice in an intuitive environment. The challenges are inspired from modern real world projects to make sure that you're learning the best practices, one step at a time. You can practice the basic concepts there for free (with a GitHub account to sign in, the same that you can use to work in CodeSandbox). This is a great way to jumpstart your journey to becoming a web developer! This is in no way required and all of the important parts are covered in the course we provide, but programming is best learned through practice, so trying out the free part of this platform can be beneficial.`,
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `But let us get back to our own little tutorial. Obviously it doesn’t make sense to keep going in the browser as none of the code will persist. Similar to the CSS part, it makes sense to create a separate JS file and link to it from the HTML file by placing `,
                },
                {
                    type: "tagged",
                    content: `<script src="./path/to/myscripts.js"></script>`,
                },
                {
                    type: "text",
                    content: ` at the bottom of the body element. You can check if it worked by entering a simple console log, saving the files and opening the website in a browser. Checking the console in developer tools should reveal the logged message specified in your .js-file.`,
                }
            ]
        },
        {
            type: "p",
            content: `You are now at the point where developing your own dynamic website is a real possibility. In order to take that step, we need learn a pattern that will stay with you throughout your whole journey: IPO, input, processing, output. There has to be a way for a user of your website to use an input, your code will in turn process that input and finally the user will see the output of that action. All you have to do is connect the parts studied in the previous parts.`,
        },
        {
            type: "p",
            content: `Let us consider a simple task: adding two numbers. In order to add two numbers we need two fields to input them, a button to tell our program to start adding them, and a field to display the result. We will take it step by step. First the HTML, then our JavaScript.`,
        },
        {
            type: "p",
            content: [
                {
                    type: "custom",
                    content: <div style={{ position: "absolute", top: "-350px", transform: "translateX(47vw)" }}><MiniBrowser exampleCode={{ html: example1HTML, css: null, js: example1JS }} /></div>
                },
            ],
        },
        {
            type: "p",
            content: `The input fields have received IDs in order to tell them apart. We will focus on our addition next. Similar to the way you would go about it in math, we need a function that returns the result of the calculation. The way we can write that is very simple:`,
        },
        {
            type: "p",
            content: [
                {
                    type: "custom",
                    content: <div style={{ position: "", top: "50px", transform: "translateX()" }}><MiniBrowser exampleCode={{ html: example1HTML, css: null, js: example2JS }} /></div>
                },
            ],
        },
        {
            type: "p",
            content: `But if we open this website in the browser, nothing will happen yet. That is because our JavaScript file knows nothing about the fields in the HTML file yet. We have to grab the relevant elements from the site and turn them into variables that we can use inside the function we just created. There are different methods of doing it, but the following is rather simple:`,
        },
        {
            type: "p",
            content: [
                {
                    type: "custom",
                    content: <div style={{ position: "absolute", top: "-250px", transform: "translateX(47vw)" }}><MiniBrowser exampleCode={{ html: example1HTML, css: null, js: example3JS }} /></div>
                },
            ],
        },
        {
            type: "p",
            content: `Now we have grabbed all these elements and stored them in variables. Still, nothing will happen. We have to make one more connection: the browser needs to know that when the button is clicked, the function has to be run using the values inside out input fields. This is done by attaching an event listener to the button like so:`,
        },
        {
            type: "p",
            content: [
                {
                    type: "custom",
                    content: <div style={{ position: "", top: "50px", transform: "translateX()" }}><MiniBrowser exampleCode={{ html: example1HTML, css: null, js: example5JS }} /></div>
                },
            ],
        },
        {
            type: "p",
            content: `This might look overwhelming for the moment, but it is very simple. Specifying an element in HTML actually does more than just add plain text to a file that then gets rendered in the browser window. When the website is loaded, the browser creates the element and provides it with features. JavaScript can then use these features and extend them. When we grab an element, we can make use of a set of functions that every element possesses, such as the ability to listen to things a user does. These things are called events. The one we are targeting here is the event that a user clicks the button we have added the event listener to. There is a great number of events we can use such as „change“ or „mousemove“, „select“, „scroll“ and many more. At this point we have told the browser to listen to the event of clicking the button. As a second argument to this event listener, we have to tell it what to actually do. This argument has to be another function. For testing, the function specified above simply logs „clicked“ to the console when the button is clicked. We are only missing one last step to having a very limited calculator website!`,
        },
        {
            type: "p",
            content: `Our last step is to connect what we already have. Instead of logging something to the console, we call the addition function and change the text in our output field to the result of the addition.`,
        },
        {
            type: "p",
            content: [
                {
                    type: "custom",
                    content: <div style={{ position: "", top: "-250px", transform: "translateX()" }}><MiniBrowser exampleCode={{ html: example1HTML, css: null, js: example6JS }} /></div>
                },
            ],
        },
        {
            type: "p",
            content: `It actually works! But the result seems odd. Ten plus five is not 105. Here we have arrived at one of the quirky bits of JavaScript: it cannot reliably infer types of variables. Everything that an input field returns will always be considered a String and the „+“-sign for Strings simply concatenates the two, making „10“ + „5“ = „105“. We can amend this by converting the values to numbers before using them in our addition function. (Of course one should never forget that users don’t know how our functions work in the background and therefore they can type whatever they want in our input fields. Typing characters instead of numbers will result in failure. Such behavior must be accounted for in advance, adding a great bit of complexity to every real world project).`,
        },
        {
            type: "p",
            content: [
                {
                    type: "custom",
                    content: <div style={{ position: "absolute", top: "-350px", transform: "translateX(47vw)" }}><MiniBrowser exampleCode={{ html: example1HTML, css: null, js: example7JS }} /></div>
                },
            ],
        },
        {
            type: "p",
            content: `And here we are, working calculator in a website and all, ready to conquer the world with our website ideas! Or at least for the next step in our quiz project.`,
        }
    ],
    [],
    [],
];

const JSGeneral = () => {
    return (
        <div className="container">
            <div className="textarea">
                {content.map((item) => (
                    item.map((thing) => (
                        parser(thing)
                    ))
                ))}
                <a class="link-btn" href="/">Back</a>
            </div>
            <div className="visuals">
                {/* <img src={image1} alt="wireframe" style={{ width: "40vw", top: "15vh", position: "relative" }} />
                <img src={image2} alt="wireframe" style={{ width: "40vw", top: "75vh", position: "relative" }} /> */}
            </div>
        </div>
    );
};

export default JSGeneral;