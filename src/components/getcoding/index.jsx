import React from 'react';
// import ReactRough, { Rectangle } from 'react-rough';

import './getcoding.css';

import MiniBrowser from "./MiniBrowser";
// import Editor from "./Editor";

// import htmlLaptop from "./images/html_laptop.jpg";
import undrawHtmlCss from "./images/undraw_html_css.png";
import undrawCoder from "./images/undraw_coder.png";
import undrawExpDesign from "./images/undraw_experience_design.png";
import undrawRedesign from "./images/undraw_redesign_feedback.png";
import undrawWIP from "./images/undraw_work_in_progress.png";
import chromeDevTools from "./images/elements.png";

const list1 = [
    {
        name: "<title>",
        text: "Title in the browser toolbar",
    },
    {
        name: "<a>",
        text: "Link tag, showing the text between the tags and linking to the path defined through the href data attribute",
    },
    {
        name: "<p>",
        text: "Paragraph, simple text belongs here",
    },
    {
        name: "<h1> … <h6>",
        text: "Headlines from large to smaller",
    },
    {
        name: "<ul>",
        text: "Unordered list containing list items <li>",
    },
];

const list2 = [
    {
        name: "<html>",
        text: "Must enclose the entire rest of the code",
    },
    {
        name: "<body>",
        text: "Contains the contents of a website",
    },
    {
        name: "<div>",
        text: "Sort of a placeholder to position other elements inside",
    },
    {
        name: "<link>",
        text: "Defines a link between a document and an external resource",
    },
    {
        name: "<img>",
        text: "An image in an HTML page",
    },
    {
        name: "<span>",
        text: "Is used to select inline content for purely stylistic purposes",
    },
    {
        name: "<input>",
        text: "Specifies an input field where the user can enter data",
    },
    {
        name: "<form>",
        text: "To create an HTML form for user input",
    },
    {
        name: "<table>",
        text: "Defines a table, containing rows <tr>",
    },
];

const list3 = [
    {
        name: "<header>",
        text: "Contains information related to the title and heading of the related content",
    },
    {
        name: "<button>",
        text: "Create a clickable button",
    },
    {
        name: "<nav>",
        text: "Defines a set of navigation links",
    },
    {
        name: "<footer>",
        text: "A structural element used to identify the footer of a page",
    },
];

const list4 = [
    {
        name: "width",
        text: "specifies the width of the element's content area",
    },
    {
        name: "height",
        text: "specifies the height of the element's content area",
    },
    {
        name: "position",
        text: "manipulates the location of an element",
    },
    {
        name: "padding",
        text: "generates space around an element's content, inside of any defined borders",
    },
    {
        name: "margin",
        text: "creates space around an element, outside of any defined borders",
    },
    {
        name: "border",
        text: "specifies what kind of border to display",
    },
    {
        name: "color",
        text: "defines the color of text, can be named, rgb or hex value",
    },
    {
        name: "background-color",
        text: "sets the background color to the total size of an element",
    },
    {
        name: "opacity",
        text: "adds transparency to the background of an element, all of its child elements become transparent as well",
    },
];

// const example1 = "";
// const example2 = {
//     html: `<h1>Test</h1>`,
//     css: false,
// }
// const example3 = {
//     html: `<h3>Headline</h3>
// <p>A paragraph about CSS</p>
// <div class="box"></div>`,
//     css: `h3 {
//     color: rgb(60, 78, 224);
// }
// .box {
//     height: 30px;
//     width: 40px;
//     background-color: green;
// }`,
// };
const exampleM = {
    html: `<h1>Headline One</h1>
<h1 style="color: red;">Headline Two</h1>
<h1>Headline Three</h1>`,
    css: null,
}
const exampleN = {
    html: `<h1>Headline One</h1>
<h1>Headline Two</h1>
<h1>Headline Three</h1>`,
    css:`h1 {
        color: rgb(60, 78, 224);
        font-size: 26px;
    }`,
}
const exampleO = {
    html: `<h1>One</h1>
<h1 class="bigger">Two</h1>
<h1 class="bigger">Three</h1>`,
    css:`h1 {
  color: rgb(60, 78, 224);
  font-size: 16px;
}
.bigger {
    font-size: 26px;
}`,
}
const exampleP = {
    html: `<h1>One</h1>
<h1 class="bigger">Two</h1>
<h1 class="bigger" id="red">Three</h1>`,
    css:`#red {
  color: red;
}
h1 {
  color: rgb(60, 78, 224);
  font-size: 16px;
}
.bigger {
  font-size: 26px;
}`,
}

const exampleQ = {
    html: `<h1>Headline</h1>
<div class="big">
  <div class="small"></div>
</div>`,
    css:`.big {
  width: 250px;
  height: 150px;
  background-color: green;
}
.small {
  position: absolute;
  top: 50px;
  left: 100px;
  width: 50px;
  height: 50px;
  background-color: red;
}`,
}

const exampleR = {
    html: `<h1>Headline</h1>
<div class="big">
  <div class="small"></div>
</div>`,
    css:`.big {
  position: relative;
  width: 250px;
  height: 150px;
  background-color: green;
}
.small {
  position: absolute;
  top: 50px;
  left: 100px;
  width: 50px;
  height: 50px;
  background-color: red;
}`,
}

const GetCoding = () => {
    
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
                {"Interaction is key"}
            </div>
            <div
                className="sprint0__container" 
            >
                <p>
                    <img className="wireframe_undraw_player" src={undrawHtmlCss} alt="design drawing" />
                </p>
                <h3>
                    What is HTML
                </h3>
                <p>
                    HTML is an acronym comprised of <span className="ta-blue">H</span>yper<span className="ta-blue">t</span>ext <span className="ta-blue">M</span>arkup <span className="ta-blue">L</span>anguage. It allows you to create and structure a variety of elements like sections, paragraphs, headings, and many more with different properties as we will see later. However, as the name already suggests, HTML was not intended as, and is not a programming language. That means it does not have the ability to create dynamic functionality. 
                </p>
                <p>
                    It was in 1980 that Tim Berners-Lee, while working for the European Organization for Nuclear Research, began working on a prototype to HTML. Markup languages like TeX had already been developed before. While they provide a lot functionality, they are finicky in use and have a steep learning curve, prompting Berners-Lee to develop a more straight forward language for the new medium. By the end of the decade, Berners-Lee would create the now-ubiquitous language, as well as an internet browser and server software. Over the next two decades, the World Wide Web Consortium (<a target="_blank" rel="noopener noreferrer" href="https://www.w3.org/">W3C</a>) would continue development on an international standard for the code. In 1995, the second version of HTML was published, and several additional updates would follow over the next several years. HTML5 is the latest version released and was published as a “living standard,” which means it would exist as a continuously updated standard. Since 2004, the Web Hypertext Application Technology Working Group (<a target="_blank" rel="noopener noreferrer" href="https://whatwg.org/">WHATWG</a>) has participated in the ever-evolving state of HTML. WHATWG is a community with participants from technology giants like Apple, Google, Mozilla, and Microsoft, and the organization hasn’t always had the best relationship with W3C.
                </p>
                <h3>
                    Using HTML
                </h3>
                <p>
                    After this brief and exciting introduction, we can dive right into it. When working with HTML, we use simple code structures, tags and attributes, to mark up a website page. The first version of HTML contained 18 different tags, many of them still the foundation of every website to this day. Those are:
                    <img className="wireframe_undraw_player" src={undrawCoder} alt="design drawing" />
                </p>
                <ul>
                    {list1.map((element) => ( <li><span className="tag">{element.name}</span> - {element.text}</li> ))}
                </ul>
                <p>
                    The current iteration of HTML contains <a target="_blank" rel="noopener noreferrer" href="https://www.w3schools.com/TAGS/default.ASP">140 different tags</a>. 
                    {" While all of them serve an important and distinct function, the vast majority of website today does not exceed 26, with a large number using exactly nine. On the one hand this is testament to the needs-oriented development of the language over the decades, on the other hand this is often due to the misappropriation of tags. Many developers utilize empty containers, <p>-tags, for virtually everything, while others use tags designed for other purposes to overcome the limitation of those that were meant to be used. For the time being it makes sense to focus on fewer different tags but use those to their potential. First we will look at some of the aforementioned 26 most used tags, after that we will explore some common workarounds, and finally some interesting tidbits. Here we go:"}
                </p>
                <ul>
                    {list2.map((element) => ( <li><span className="tag">{element.name}</span> - {element.text}</li> ))}
                </ul>
                <p>
                    Other commonly used and useful tags, because they describe their contents semantically:
                    <img className="wireframe_undraw_player" src={undrawExpDesign} alt="design drawing" />
                </p>
                <ul>
                    {list3.map((element) => ( <li><span className="tag">{element.name}</span> - {element.text}</li> ))}
                </ul>
                <h3>
                    Components
                </h3>
                <p>
                    Using the right tags at the right time gives your website a natural structure. This is very desirable and has become a major point of consideration in the last few years. The rise of components came about with the rise of frameworks like Angular, React or Vue. Using these frameworks quickly becomes unwieldy and necessitates splitting the code in smaller chunks. The logical step then is breaking the website down into smaller and smaller logical parts: components. These days there exists an emerging trend called „web components“, which sees support from major corporations, but is beyond the scope of out project. 
                </p>
                <h3>
                    What are Components actually?
                </h3>
                <p>
                    Basically everything can be a component, as long as it can be looked at separately from other components. The navigation bar can be a component, the list of navigation links can be one, just like the logo can be a component. This simple example shows: a component can contain other components. This may seem very confusing at the moment, so let us look at a simple example:
                </p>
                <p>
                    Example here!
                    <div style={{ position: "absolute", left: "45vw", top: "-12rem" }}>
                        <MiniBrowser exampleCode={`
                            .pdsf {
                                background-color: rgba(60, 78, 224, 0.5);
                                height: 50em;
                            }
                        `} style={{ position: "absolute" }} />
                    </div>
                </p>
                <h3>
                    What is CSS
                </h3>
                <p>
                    Now we have a structure for the contents of a website, but to be frank: that looks horrible. This realization is not new and there has been considerable development to amend this problem in the form of CSS. Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable. CSS handles the look and feel part of a web page. Using CSS, you can control the color of the text, the style of fonts, the spacing between paragraphs, how columns are sized and laid out, what background images or colors are used, layout designs, variations in display for different devices and screen sizes as well as a variety of other effects.
                </p>
                <p>
                    CSS is created and maintained through a group of people within the W3C called the CSS Working Group. The CSS Working Group creates documents called specifications. When a specification has been discussed and officially ratified by the W3C members, it becomes a recommendation. These ratified specifications are called recommendations because the W3C has no control over the actual implementation of the language. Independent companies and organizations create that software. Due to this circumstance not all web browsers support the same styles or interpret stylings in slightly different ways. Infamously Microsofts attempt at a unified web experience called Internet Explorer caused tremendous problems that had to be solved by implementing a separate set of instructions specifically for it. Some developers simply checked which browser was used and prompted users of the Internet Explorer to please use a different web browser. The implementation status of styles can be checked easily at caniuse.com. 
                    <img className="wireframe_undraw_player" src={undrawRedesign} alt="design drawing" />
                </p>
                <p>
                    These styles can be defined inside the HTML tags in the form of „style“-data.
                </p>
                <p>
                    Example here!
                    <div style={{ position: "absolute", left: "45vw", top: "-50px" }}>
                        <MiniBrowser exampleCode={exampleM} style={{ position: "absolute" }} />
                    </div>
                </p>
                <p>
                    It makes a lot more sense to define the styles in a separate document from the HTML for a multitude of reasons:
                </p>
                <ul>
                    <li>
                        CSS saves time − You can write CSS once and then reuse same sheet in multiple HTML pages. You can define a style for each HTML element and apply it to as many Web pages as you want.
                    </li>
                    <li>
                        Pages load faster − If you are using CSS, you do not need to write HTML tag attributes every time. Just write one CSS rule of a tag and apply it to all the occurrences of that tag. So less code means faster download times.
                    </li>
                    <li>
                        Easy maintenance − To make a global change, simply change the style, and all elements in all the web pages will be updated automatically.
                    </li>
                    <li>
                        Superior styles to HTML − CSS has a much wider array of attributes than HTML, so you can give a far better look to your HTML page in comparison to HTML attributes.
                    </li>
                    <li>
                        Multiple Device Compatibility − Style sheets allow content to be optimized for more than one type of device. By using the same HTML document, different versions of a website can be presented for tablets and cell phones or for printing.
                    </li>
                </ul>
                <h3>
                    How to use it
                </h3>
                <p>
                    So all that is great and seems very useful, but how to actually apply all that in your project? It is surprisingly simple to start with. First off you include a link to the stylesheet in your HTML. 
                </p>
                <p className="tag" style={{ whiteSpace: "pre-wrap", margin: "1.5em 8em" }}>
                    {`<link 
    rel="stylesheet" 
    type="text/css"
    href="path/to/mystyle.css"
>`}
                </p>
                <p>
                    Then you reference the elements of your HTML in the stylesheet. That is all there is to it. The syntax is as follows:
                </p>
                <p className="tag" style={{ whiteSpace: "pre-wrap", width: "60%", padding: "1em", margin: "1.5em 8em" }}>
                    {
`reference-name {
    attribute-name: attribute-value;
    ...
}`
                    }
                </p>
                <p>
                    Always make sure to close off your element description with a brace and to finishe each attribute statement with a semicolon.
                </p>
                <p>
                    There are multiple ways to reference the elements of your HTML. If the goal is to style all elements of the same type in a certain way, simply reference the tag.
                </p>
                <p>
                    Example here!
                    <div style={{ position: "absolute", left: "45vw", top: "-400px" }}>
                        <MiniBrowser exampleCode={exampleN} style={{ position: "absolute" }} />
                    </div>
                </p>
                <p>
                    If your goal is to style only some elements of the same tag, the simplest solution is to give these elements a „class“. To reference that class, simply call it by placing a „.“ In front of the class name in your style sheet. Using classes also allows you to consolidate styles you want to apply to different elements of your html, like fonts or colors, instead of repeating them in your code. That way you can make it more concise and Readable, which will make it easier to implement changes later on. This technique can also help reduce errors and the effort required to fix them, by not having to scan through your code to change each occurrence.
                </p>
                <p>
                    Example here!
                    <div style={{ position: "absolute", left: "45vw", top: "-225px" }}>
                        <MiniBrowser exampleCode={exampleO} style={{ position: "absolute" }} />
                    </div>
                </p>
                <p>
                    In case you want to style a single element, you have the choice of defining a class name and apply it to only that singular element, or define an „id“ that can then again be referenced by putting a hashtag in front of the id.
                </p>
                <p>
                    Keep in mind that an id can only be referenced once in a document, hence the name id. Id’s do have one very important trick up their sleeve. This is the “hash value” in the URL. If you have a URL like http://yourdomain.com#comments, the browser will attempt to locate the element with an id of “comments” and will automatically scroll the page to show that element. This is an important reason right here why having ID’s be absolutely unique is important. So your browser knows where to scroll. Html elements can have both, classes and and id. Functionally in CSS there is no difference between the two.
                </p>
                <p>
                    Example here!
                    <div style={{ position: "absolute", left: "45vw", top: "-150px" }}>
                        <MiniBrowser exampleCode={exampleP} style={{ position: "absolute" }} />
                    </div>
                </p>
                <p>
                    That is all there is to it for the time being. There are more advanced features available when it comes to selecting specific elements in your html, but you shouldn't get bogged down by those intricacies at this point in time. A comprehensive guide can be found <a href="https://www.w3schools.com/cssref/css_selectors.asp">here</a>.
                </p>
                <h3>
                    What to use
                </h3>
                <p>
                    Now that you know how to use the styling, you likely wonder what you can do with it. It would be easy to say „everything“, but that is not far from the truth. As we did before, let us look at the most commonly styled properties on the web today, before looking into some intricacies that have to be considered. Among the most common are:
                </p>
                <ul>
                    {list4.map((element) => ( <li><span className="tag">{element.name}</span> - {element.text}</li> ))}
                </ul>
                <p>
                    CSS is based on the so-called box model: every element is a box. So it it boxes inside boxes and boxes all the way down. That is a rigid assumption, but it makes understanding how things are related to each other very simple. Of course it is easier to to understand when looking at it 
                    <img className="wireframe_undraw_player" src={undrawWIP} alt="design drawing" />
                </p>
                <p>
                    <img style={{ width: "42vw" }} src="https://cs.pwr.edu.pl/cichon/2017_18_b/WWW/box_model.png" alt="centering meme" />
                </p>
                <p>
                    This schematic can actually be found in real life on every website out there. Simply open your favorite website in a new window, right click and then select „inspect“. This will open the „developer tools“ in most modern browsers. Different browsers have different strengths, Firefox is very good when developing CSS, Chrome is more capable when it comes to JavaScript. But for our use case all browsers will work fine. The following example uses Google Chrome. Click on the small pointer icon in the top left corner of the developer tools and hover over elements of the website like so:
                </p>
                <p>
                    <img style={{ width: "42vw" }} src={chromeDevTools} alt="centering meme" />
                </p>
                <p>
                    When clicking on one of the elements you are presented with a representation of the box model in the developer tools. But as you can see that is only a small part of what these developer tools are capable of. You can navigate the element-tree and manipulate the styling of elements directly in the browser. This is very handy in order to quickly see what effect a change will have. Keep in mind, though, that changes inside the browser will not be saved to your files directly, you have to make and save them directly in your stylesheet.
                </p>
                <h3>
                    What to pay attention to
                </h3>
                <p>
                    Not all styles can be set on all elements. If something doesn’t do what it is supposed to, check the developer tools, check your spelling and check the internet. More often than not it is a simple fix. 
                </p>
                <p>
                    One of the more challenging parts of CSS is positioning elements in the spot you want them to go. In this example we have a box inside a box. The large box is 250x150 pixels in size, while the smaller one is 50x50px. To place the small box in the center, and because we know their dimensions, we can position it absolutely at „top: 50px“ and „left: 100px“. But the box is not where it should be. 
                </p>
                <p>
                    Example here!
                    <div style={{ position: "absolute", left: "45vw", top: "-450px" }}>
                        <MiniBrowser exampleCode={exampleQ} style={{ position: "absolute" }} />
                    </div>
                </p>
                <p>
                    That is because „position: absolute“ goes up the element-tree to find the next element it can be positioned in relation to. In this case, it can only find the window and therefore that is what it will take as its point of reference. We can fix this by adding „position: relative“ to the styling of the bigger box, making it the next reference point in the tree for the small box. Now it works as intended.
                </p>
                <p>
                    Example here!
                    <div style={{ position: "absolute", left: "45vw", top: "-200px" }}>
                        <MiniBrowser exampleCode={exampleR} style={{ position: "absolute" }} />
                    </div>
                </p>
                <p>
                    While we are at it, positioning elements in the center of others, especially vertically, can become one of the most challenging tasks in styling. This circumstance has led to the creation of a plethora of memes and continues to humor developers around the globe.
                </p>
                <p>
                    <img style={{ width: "42vw" }} src="https://img.devrant.com/devrant/rant/r_520887_82U2Y.jpg" alt="centering meme" />
                </p>
                <h3>
                    Wrap up
                </h3>
                <p>
                    You see there are a lot of things to consider when developing your website, but if you can keep the HTML down to the elements you actually need and the CSS as specific as you can, this can be a straight forward and fun task. A very good resource to review the contents of our short summary in a much more detailed fashion is https://html.com/css/
                </p>
                <h3>
                    Further reading
                </h3>
                <ul>
                <li><a target="_blank" rel="noopener noreferrer" href="https://www.hostinger.com/tutorials/what-is-html">https://www.hostinger.com/tutorials/what-is-html</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.computerhope.com/jargon/h/html.htm">https://www.computerhope.com/jargon/h/html.htm</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://css-tricks.com/average-web-page-data-analyzing-8-million-websites/">https://css-tricks.com/average-web-page-data-analyzing-8-million-websites/</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.tutorialspoint.com/css/what_is_css.htm">https://www.tutorialspoint.com/css/what_is_css.htm</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.chromestatus.com/metrics/css/popularity">https://www.chromestatus.com/metrics/css/popularity</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="https://www.w3schools.com/css/css_boxmodel.asp">https://www.w3schools.com/css/css_boxmodel.asp</a></li>
                </ul>
            </div>
            <a class="link-btn" href="/">Back</a>
        </>
    )
};

export default GetCoding;