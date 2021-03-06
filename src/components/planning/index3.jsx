import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactRough, { Rectangle } from 'react-rough';

import {ReactComponent as FigmaLogo} from './images/figma_logo.svg';
import {ReactComponent as AdobexdLogo} from './images/adobexd_logo.svg';
import {ReactComponent as InvisionLogo} from './images/invision_logo.svg';
import {ReactComponent as SketchLogo} from './images/sketch_logo.svg';

import wireframeWatercolor from "./images/wireframe_watercolor.jpg";
import wireframeWoman from "./images/wireframe_woman.jpg";
import wireframeBlank from "./images/wireframe_blank.jpg";
import wireframeUndrawPlayer from "./images/undraw_media_player.png";
import wireframeWireframe from "./images/undraw_mobile_wireframe.png";
import wireframeUserFlow from "./images/undraw_user_flow.png";
import wireframeSearch from "./images/undraw_people_search.png";

import './planning.css';

const Wireframe1 = () => {
    return (
        <div style={{ position: "absolute", top: "0px", left: "45vw" }}>
        <div style={{ position: "relative" }}>
            <h1 
                style={{ 
                    color: "#312F2E",
                    zIndex: "999", 
                    position: "absolute", 
                    top: "10px", 
                    left: "270px", 
                    fontFamily: "'Liu Jian Mao Cao', cursive" 
                }}>
                    Heading
            </h1>
            <h1 
                style={{ 
                    zIndex: "999", 
                    position: "absolute", 
                    top: "120px", 
                    left: "280px", 
                    fontFamily: "'Liu Jian Mao Cao', cursive" 
                }}>
                    Question
            </h1>
            <h1 
                style={{ 
                    zIndex: "999", 
                    position: "absolute", 
                    top: "250px", 
                    left: "50px", 
                    fontFamily: "'Liu Jian Mao Cao', cursive" 
                }}>
                    Answer 1
            </h1>
            <h1 
                style={{ 
                    zIndex: "999", 
                    position: "absolute", 
                    top: "255px", 
                    left: "400px", 
                    fontFamily: "'Liu Jian Mao Cao', cursive" 
                }}>
                    Answer 2
            </h1>
            <h1 
                style={{ 
                    zIndex: "999", 
                    position: "absolute", 
                    top: "315px", 
                    left: "70px", 
                    fontFamily: "'Liu Jian Mao Cao', cursive" 
                }}>
                    Answer 3
            </h1>
            <h1 
                style={{ 
                    zIndex: "999", 
                    position: "absolute", 
                    top: "315px", 
                    left: "410px", 
                    fontFamily: "'Liu Jian Mao Cao', cursive" 
                }}>
                    Answer 4
            </h1>
            <ReactRough width={630} height={430} >
                <Rectangle x={15} y={15} width={600} height={400} fill="red" />

                <Rectangle x={25} y={25} width={580} height={60} fill="yellow" />

                <Rectangle x={25} y={95} width={580} height={150} fill="blue" />

                <Rectangle x={25} y={260} width={275} height={60} fill="gray" />
                <Rectangle x={330} y={260} width={275} height={60} fill="gray" />
                <Rectangle x={25} y={330} width={270} height={60} fill="gray" />
                <Rectangle x={330} y={330} width={270} height={60} fill="gray" />
            </ReactRough>
        </div>
        </div>
    )
};

const Planning = () => {
    
    return (
        <>
            <div 
                style={{ 
                    fontSize: "2rem", 
                    color: "white", 
                    backgroundColor: "rgba(60, 78, 224, 1)", 
                    fontWeight: "700" ,
                    transform: "translateX(3vw)",
                    display: "inline-block",
                    border: "0.6rem solid rgb(60, 78, 224)",
                    textDecoration: "none",
                    margin: "2rem 2rem 2rem 0vw",
                }} 
            >
                {"Make plans for the project"}
            </div>
            <div
                className="sprint0__container" 
            >
                <p>
                    At the beginning of a new project there is literally a blank canvas in front of the developer. This is simultaneously a terrifying moment but also the best thing that could happen to anyone because it provides one with the freedom to explore every idea that comes to mind. Then again the blank space does make coming up with those great ideas a major problem in the first place. So we are back at the beginning. This is a common problem among all of those who dare to try doing something and therefore others have come up with a plethora of strategies for moving past this initial obstacle. One of the ideas that have proven to be a promising path forward is so called „wireframing“. It is intuitive, easy to employ, and provides a basis on which to move into the next stages of development.
                    <img className="wireframe_undraw_player" src={wireframeUndrawPlayer} />
                </p>
                <h3>
                    What is wireframing?
                </h3>
                <p>
                I like thinking about a wireframe like a skeleton of the page. This skeleton is a two-dimensional depiction of a page’s interface that shows the spacing of elements on the page, how content is prioritized, what functionalities are available, and how users will interact with the site. They also play a vital role in connecting information architecture to the visual aspects of the design by showing pathways between the various pages. Wireframes are intentionally void of color, graphics and stylized fonts.
If we don’t have a strong skeleton to start, then all the stuff we put on top of it, like the functionalities or style, really don’t stand a chance.
Think about the process of building a new house. If you focus all your energy on the interior design, like the colors of the walls and the fabric for the couches, rather than the blueprint of the structure of the house, do you think it will serve its purpose? Probably not. Starting with the interior design, rather than the foundational structure of the home, is counterintuitive.
                <img className="wireframe_watercolor" src={wireframeWatercolor} />
                </p>
                <h3>
                    Advantages of wireframing
                </h3>
                <p>
                    One of the great advantages of wireframing is that it provides an early visual that can be used to review with the client. Users can also check it as an early feedback mechanism for prototype usability tests. Not only are wireframes easier to amend than concept designs, once approved by the client and the users they provide confidence to the designer.
                </p>
                <p>
                    From a practical perspective, the wireframes ensure the page content and functionality are positioned correctly based on a users needs. And as the project moves forward they can be used as a good dialogue between members of the project team to agree on the project vision and scope.
                </p>
                <h3>
                    Let's do it!
                </h3>
                <p>
                    So now that you know what it is and why it is useful, how do you actually start? Creating a wireframe can become a time-consuming process, especially if things don’t go well during the testing stage. However, taking the time to iron out usability issues ahead of time will give your site a much better chance of success down the line. The five steps listed below will help you get started. 
                    <img className="wireframe_undraw_player" src={wireframeWireframe} />
                </p>
                <h4>
                    Step 1
                </h4>
                <p>
                    Right from the go you have the choice of two options: by hand or digitally. Going with the former option, you probably already have everything you need to start. Just grab a few pens and paper. It can make sense to use blank paper instead of squared paper, because your brain is really good at adjusting to the constraints, which is something to avoid at this stage. Anyway, do what you feel most comfortable with.
As for digital options, the options are virtually endless.
                </p>
                <p>
                    At this point it makes sense to jump in and make a distinction between a mockup and a prototype. The main difference, visually, is fidelity. While a mockup is a sketch, a prototype is supposed to mimic the finished website more or less closely. The bigger difference, though, is what they are supposed to accomplish. A mockup is supposed to be the playground that sets up all the concepts, workflows, and usability of the website. It exists for the project planner in order to find out and get a clear picture of what needs to be there, what doesn’t need to be there, who needs what and get a distilled idea of the website. I suggest you go to your favorite website and try to sketch the mockup of that website yourself. You’ll be surprised about your results if you can filter it down to the actual parts of functionality (and get an idea of how good or not the design really is). The prototype exists at a later stage of project development. The concepts are established and have to be filled with copy (the text) and media (images, videos, etc.) to get a visual representation of what the user will see. This is the point where things can be ironed out, maybe rearranged for visual consistency, and can be field tested to find out if it accomplishes what it was designed to do.
There is a wide variety in prototyping tools out there. The most popular ones are Sketch (very popular but only available for Mac), Adobe XD (which integrates well with the rest of Adobe products), and Figma (web based, rapidly gaining in popularity).
                <FigmaLogo className="app_logo figma_logo" />
                <AdobexdLogo className="app_logo adobe_logo" />
                <InvisionLogo className="app_logo invision_logo" />
                <SketchLogo className="app_logo sketch_logo" />
                </p>
                <p>
                    After this swift digression, back to the topic at hand: mockup tools. A lot of tools exist, which provide a lot of functionality in order to build prototypes for website projects. You can make mockups in all of them and it will simplify the process of going forward to turn the mock into a prototype, but learning to use these tools takes time and is not necessary for our small project. Therefor the entire landscape of options mostly build down to balsamiq and <a target="_blank" rel="noopener noreferrer" href="https://www.wireframe.cc">wireframe.cc</a> (which we suggest to use because there is a free tier). 
                </p>
                <h4>
                    Step 2
                </h4>
                <p>
                    Before you start drafting the wireframe, it’s helpful to do some research. For starters, you’ll want to know who your target audience is. This can help you determine which features need to be most prominent on your site so that visitors can find what they need. Looking at existing websites to get an idea of how others have approached the problem is always a good idea. For quite a few workflows there are established patterns that are widely adopted. It probably makes sense to adopt them due to the fact that often times they are so common that users simply expect them. An example for that is the placement of the logo near the top left corner of the screen. Whether these patterns represent something called best practice (a meaningful footer that provides information and navigation) or have simply become a standard due to familiarity (the hamburger menu being employed even on the desktop) is often debatable, but it makes sense to know them.
                    <img className="wireframe_undraw_player" src={wireframeSearch} />
                </p>
                <h4>
                    Step 3
                </h4>
                <p>
                    This step is not necessary for the project at hand, but it is an important part in the development of a bigger and more complex project. Therefore we consider it useful information and valuable training anyway.
                    <img className="wireframe_undraw_player" src={wireframeUserFlow} />
                </p>
                
                <p>
                    A ‘user flow’ refers to the path a visitor takes to complete a specific goal on your website. So for example, if you have an e-commerce site, one user flow might be from a product page to the end of the checkout process. Determining the key tasks users will need to complete on your site can help you create the most straightforward user flow for each potential goal. This will help maximize user experience by making your website easy and enjoyable to use. That said, it can be hard to get into the mind of a hypothetical user. Asking yourself these questions can help when you’re trying to work out your primary user flows:
                </p>
                <ul>
                    <li>
                        What problems do you intend to solve for users? What goals might they be hoping to achieve by coming to your site?
                    </li>
                    <li>
                        How can you organize your content (such as buttons, links, and menus) to support those goals?
                    </li>
                    <li>
                        What should users see first when they arrive on your site, which can help orient them and let them know they’re in the right place?
                    </li>
                    <li>
                        What are the user expectations for a site like yours?
                    </li>
                    <li>
                        What Call to Action (CTA) buttons will you provide, and where can you place them so users will notice?
                    </li>
                    <li>
                        Each of these answers will suggest something vital about the way you’ll need to design your pages.
                    </li>
                </ul>
                <h4>
                    Step 4
                </h4>
                <p>
                    You have your tools, you have the relevant information: you can start drafting away! Keep in mind that the purpose of this task is not to create a complete design for your website. You’re focusing solely on functionality and the user experience, and how you can create a page that is easy to navigate and understand. To that end, your wireframe should include features and formats that are important to how your users will interact with and make use of your website. Keep it simple and focus on the main areas of the project:
                    <img className="wireframe_blank" src={wireframeBlank} />
                </p>
                <ul>
                    <li>
                        An overarching heading
                    </li>
                    <li>
                        A short explanation of the game and its features for those playing for the first time or checking back to clear up ambiguities
                    </li>
                    <li>
                        The quiz
                    </li>
                    <li>
                        The questions of the quiz
                    </li>
                    <li>
                        The possible answers and states they can be in
                    </li>
                    <li>
                        The result of taking the quiz
                    </li>
                </ul>
                <h3>
                    Step 5
                </h3>
                <p>
                    Once you have come up with a wireframe to your liking, you will be tasked with carrying out some testing. Imagine you try and use your design for its intended purpose, and maybe even more illuminatingly in ways it should not be used. This will help you determine if everything works as intended, or if there are areas that can be improved or need to be reworked entirely (hint: usually things need some more work, but that is natural). You might also want to let someone else take your wireframe for a test, since it is easy to develop operational blindness. You have laid everything out in a fashion that makes sense to you so you will rarely get stuck or become overwhelmed with functionality in the way that a person foreign to your work might. Beyond that and far beyond the scope of this project, there are ways to test designs more objectively, utilizing industry solutions based on empirically generated or actual outside user testing. Similar to wore framing and prototyping tools, there is a large market for tools for this task out there, like UserZoom or UsabilityHub.
                <Wireframe1 />
                </p>
                <h3>
                    Further reading
                </h3>
                <ul>
                <li><a target="_blank" rel="noopener noreferrer" href="https://medium.com/@protoio/why-wireframes-are-important-in-the-design-process-de4e773e611">https://medium.com/@protoio/why-wireframes-are-important-in-the-design-process-de4e773e611</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.experienceux.co.uk/faqs/what-is-wireframing/">https://www.experienceux.co.uk/faqs/what-is-wireframing/</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.dreamhost.com/blog/how-to-wireframe-website/">https://www.dreamhost.com/blog/how-to-wireframe-website/</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.orbitmedia.com/blog/web-design-standards/">https://www.orbitmedia.com/blog/web-design-standards/</a></li>
                </ul>
            </div>
            <a class="link-btn" href="/">Back</a>
        </>
    )
};

export default Planning;

