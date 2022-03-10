import React from "react";

import "./AboutMe.css";
import headshot from "./img/headshot.jpg";

const AboutMe = () => {
    return (
        <div className={"background"}>
            <h2 className={"header"}>About Me</h2>
            {/*<img className={"headshot"} src={headshot}/>*/}
            <p className={"about"}></p>
        </div>
    )
}

export default AboutMe