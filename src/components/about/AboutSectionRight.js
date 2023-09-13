import "./AboutSections.css";

import React from "react";

const AboutSectionRight = (props) => {


    return (
        <div className={"about-section-container"}>
            <p className={"about-content about-right-content"}>{props.content}</p>
            <h3 className={"about-title about-right-title"}>{props.title}</h3>
        </div>
    )
}

export default AboutSectionRight