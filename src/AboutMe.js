import React from "react";

import "./AboutMe.css";
import headshot from "./img/headshot.jpg";
import Skill from "./Skill";

const AboutMe = () => {
    return (
        <div className={"background"}>
            <h2 className={"header"}>About Me</h2>
            {/*<img className={"headshot"} src={headshot}/>*/}
            <Skill title={"Java"} experience={"3 years"} />
            <Skill title={"JavaScript"} experience={"2 years"} />
            <Skill title={"C#"} experience={"1 years"} />
        </div>
    )
}

export default AboutMe