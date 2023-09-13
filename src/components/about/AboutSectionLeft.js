import "./AboutSections.css"

import React from "react";

const AboutSectionLeft = (props) => {


    return (
        <div className={"about-section-container"}>
            <h4 className={"about-title about-left-title"}>{props.title}</h4>
            <p className={"about-content about-left-content"}>{props.content}</p>
        </div>
    )
}

export default AboutSectionLeft