import React from "react";

import imageLoad from "./images/undraw_loading_frh4.jpg";

const LoadingScreen = () => {
    return (
        <div style={{ display: "grid", gridTemplateRows: "70% 30%", alignItems: "center", justifyContent: "center", padding: "5vw" }}>
            <img 
                src={imageLoad} 
                alt="loading drawing"
                style={{
                    width: "40vw"
                }} />
                <div style={{ justifyContent: "center" }}>
                    <h1 style={{ marginLeft: "50%", transform: "translateX(-50%)" }}>Loading...</h1>
                </div>
        </div>
    )
};

export default LoadingScreen;