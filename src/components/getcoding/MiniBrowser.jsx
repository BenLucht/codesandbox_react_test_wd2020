import React from "react";
import LazyLoad from 'react-lazyload';


import Editor from "./Editor";


import './bla.css';

const MiniBrowser = ({ exampleCode }) => {

    return (
        <LazyLoad height={400} offset={100}>
            <div>
                <div style={{
                    width: "42vw",
                    height: "400px",
                    border: "3px solid #f1f1f1",
                    borderTopLeftRadius: "7px",
                    borderTopRightRadius: "7px",
                    overflowY: "hidden",
                    overflowX: "hidden", 
                    position: "relative",
                }}>
                    <div style={{
                        padding: "10px 0px",
                        background: "#f1f1f1",
                        borderTopLeftRadius: "4px",
                        borderTopRightRadius: "4px",
                        height: "1.5rem",
                        display: "grid",
                        gridTemplateColumns: "15% 85%",
                        // position: "absolute",
                        width: "42vw",
                        zIndex: "10",
                    }}>
                        <div style={{ width: "95%", display: "grid", gridTemplateColumns: "15px 15px 15px", zIndex: "10", marginLeft: "20px" }}>
                            <span  
                                style={{
                                    background: "#ED594A",
                                    marginTop: "4px",
                                    height: "12px",
                                    width: "12px",
                                    borderRadius: "50%",
                                    display: "inline-block",
                                }}></span>
                            <span  
                                style={{
                                    background: "#FDD800",
                                    marginTop: "4px",
                                    marignRight: "8px",
                                    height: "12px",
                                    width: "12px",
                                    borderRadius: "50%",
                                    display: "inline-block",
                                }}></span>
                            <span  
                                style={{
                                    background: "#5AC05A",
                                    marginTop: "4px",
                                    height: "12px",
                                    width: "12px",
                                    borderRadius: "50%",
                                    display: "inline-block",
                                }}></span>
                        </div>
                        <input 
                            type="text" 
                            value="https://www.tech-academy.io/quiz" 
                            style={{
                            width: "95%",
                            borderRadius: "3px",
                            border: "none",
                            backgroundColor: "white",
                            marginTop: "-5px",
                            height: "20px",
                            color: "#666",
                            padding: "5px",
                        }} />
                    </div>
                    <div style={{ 
                        borderRadius: "1rem",
                        // display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                    }}>
                        <Editor code={exampleCode} />
                    </div>
                </div>
            </div>
        </LazyLoad>
    )
}

export default MiniBrowser;