import React from 'react';
import parser from '../../parser';

import '../style.css';

import image1 from "./images/undraw_build_wireframe_u9m2.png";
import image2 from "./images/undraw_faq_rjoy.png";

const content = [
    [
        {
            type: "h1",
            content: `Make plans for the project`,
        },
        {
            type: "p",
            content: [
                {
                    type: "text",
                    content: `In this Sprint we want you to familiarize yourself with the project idea. We provided an exemplary quiz, but there are many ways to implement the same idea. The positioning of the button, the design of the boxes, font-family, website behaviour, feature elements, … All of this is totally up to you. Once you create a sketch, future development will get so much easier. And just because you decide to go with a specific design in the beginning doesn’t mean you can’t change it later. Take your time to iterate over some ideas.`,
                },
                {
                    type: "custom",
                    content: <img src={image1} alt="img" style={{ position: "absolute", left: "0", top: "-100px", width: "100%", transform: "translateX(47vw)" }} />,
                }
            ]
        },
        // {
        //     type: "design-img",
        //     content: {
        //         image: image1,
        //         link: "design_img wireframe_image",
        //     },
        // },
        {
            type: "p",
            content: `The goal of this Sprint is to get the idea out of your head and onto a piece of paper (or display). While there are free online wireframe tools, we will take the classical approach with pen and paper. Most displays nowadays have resolutions of roughly 16:9. That is about the size of a sheet of paper flipped to landscape (rotated by 90°). Now that we have our “display”, let’s start thinking about the different elements we want on our website. There should be a`,
        },
        {
            type: "ul",
            content: [
                {
                    type: "li",
                    content: `Header`,
                },
                {
                    type: "li",
                    content: `Question with four answers`,
                },
                {
                    type: "li",
                    content: `Other elements like jokers, score, ..`,
                }
            ]
        },
        {
            type: "p",
            content: `Cool, we have an idea what elements should be on our quiz, now let’s get into figuring out the general positioning of our content on the website. Should it be full width? Should it be left, right, or center aligned? Where do we put the question text? And how do we order the question answers?`,
        },
        {
            type: "p",
            content: `Okay, so our header and our content shouldn’t span over the entire display width, but rather half of it. We will center it in the middle of our display. The score will be inside our header. Our question should be above the answers, which will be grouped together to fit two answers in a row. The next question is positioned underneath the previous. Our drawing looks like this now:`,
        },
        {
            type: "img",
            content: `image`,
        },
        {
            type: "p",
            content: `First sketch: done. In the next step, we will add annotations for website behaviour. What do we want the website to do, when we click on an answer? What should happen, when we try to click a different answer for the same question? Anything else, that should happen?`,
        },
        {
            type: "p",
            content: `Well, upon clicking an answer, we want our selection to change its background colour to gray and after a few seconds it should light up in green, if it’s the correct answer, and red if not. In any case, the correct answer should be displayed as well by highlighting the correct answer in green. Once answered, a question cannot be answered again. Further, we want the score to reflect how many questions were answered correctly. Here’s our final sketch:`,
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
                    content: `Before ending this “Sprint”, a quick note: We didn’t go much into detail about how specific elements should look like except for colour changes when clicking answers. You can also add design notes to your sketch, like background colour, box-shadow (we will see what this is later!), or more. We went for a minimalistic approach though.`,
                },
                {
                    type: "custom",
                    content: <img src={image2} alt="img" style={{ position: "absolute", left: "0", top: "-100px", width: "100%", transform: "translateX(47vw)" }} />,
                }
            ]
        },
        {
            type: "p",
            content: `And just like that, we finished “Sprint 0”. Well done! In our next “Sprint” we will get into HTML and CSS, so stay tuned!`,
        },
        {
            type: "milestone",
            content: `Have a sketch, what your future quiz should look like with annotations how some elements behave once you interact with them.`,
        },
        {
            type: "link-btn",
            content: {
                text: "Back",
                destination: "/"
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
                destination: "/sprint1"
            },
        },
        // {
        //     type: "p",
        //     content: [
        //         {
        //             type: "text",
        //             content: `sdfjdkf sdfg df dfh dfh dfh `,
        //         },
        //         {
        //             type: "tagged",
        //             content: `<dskjgh>sfkj</dskjgh>`,
        //         },
        //         {
        //             type: "text",
        //             content: `sdf drgrh rtjtzuk ejt drh.`,
        //         },
        //         {
        //             type: "link",
        //             content_text: `test`,
        //             content_link: `https://www.google.com`,
        //         }
        //     ]
        // }
    ],
    [],
    [],
];

const Sprint0 = () => {
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
                {/* <img src={image1} alt="wireframe" style={{ width: "40vw", top: "15vh", position: "relative" }} /> */}
                {/* <img src={image2} alt="wireframe" style={{ width: "40vw", top: "75vh", position: "relative" }} /> */}
            </div>
        </div>
    );
};

export default Sprint0;