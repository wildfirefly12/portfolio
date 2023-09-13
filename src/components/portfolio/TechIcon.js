import "./TechIcon.css";

import React from "react";

const TechIcon = (props) => {


    return (
        <div className={"tech-icon-container"}>
            <p className={"tech-icon-text"}>{props.title}</p>
        </div>
    )
}

export default TechIcon;