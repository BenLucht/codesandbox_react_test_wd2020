import React from 'react';
import Iframe from 'react-iframe';
import ReactJson from 'react-json-view';
import { Link } from 'react-router-dom';

import MiniBrowser from './sprints/sprint4/MiniBrowser';
import { ReactComponent as Summit } from './summit.svg';

const parser = ({ type, content }) => {
    switch(type){
        case "h1":
            return <><h1>{content}</h1><br /></>;
        case "h3":
            return <h3>{content}</h3>;
        // case "p":
        //     return <p>{content}</p>;
        case "p":
            if (typeof content == "string") {
                return <p>{content}</p>;
            } else {
                return (
                    <p>
                        {
                            content.map(
                                (element) => (
                                    ((element) => {
                                        switch (element.type) {
                                        case 'text':
                                            return element.content;
                                        case 'tagged':
                                            return <span className="tag">{element.content}</span>;
                                        case 'link':
                                            return (
                                                <a 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    href={element.content_link} >
                                                        {element.content_text}
                                                    </a>
                                            );
                                        case "api-iframe":
                                                console.log('iframe');
                                                return (
                                                    <Iframe 
                                                        url={element.content}
                                                        width="37vw"
                                                        height="450px"
                                                        id="myId"
                                                        className="api-iframe"
                                                        display="block"
                                                        position="absolute" 
                                                    />
                                                );
                                        case "custom":
                                            return element.content;
                                        default:
                                            return null;
                                        }
                                    })(element)
                                )
                            )
                        }
                    </p>
                )
            }
        case "ul":
            return (<ul>
                {content.map((element) => (
                    <li>{element.content}</li>
                ))}
            </ul>);
        case "milestone":
            return (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div style={{ backgroundColor: "rgb(60, 78, 224)", padding: "0.5rem", margin: "0 0 0 5vw" }}>
                        <Summit />
                    </div>
                    <div style={{ margin: "2rem", fontSize: "1.2rem", fontWeight: "500" }}>Milestone: <br />
                        {content}
                    </div>
                </div>
            );
        case "api-iframe":
            return (
                <Iframe 
                    url={content}
                    width="450px"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative" 
                />
            );
        case "json":
            return (
                <ReactJson style={{ margin: "2em 7vw" }} src={content} />
            );
        case "design-img":
            return (
                <img src={content.image} alt="img" className={content.class} />
            );
        case "link-btn":
            return (
                <Link className="link-btn" to={content.destination}>
                    {content.text}
                </Link>
            );
        case "custom":
            return content;
        default:
            return null;
    };
};

export default parser;