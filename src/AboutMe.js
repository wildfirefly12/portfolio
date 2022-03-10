import React from "react";

import "./AboutMe.css";
import headshot from "./img/headshot.jpg";
import Skill from "./skills/Skill";

const AboutMe = () => {
    return (
        <div className={"background"}>
            <h2 className={"header"}>Skills</h2>
            <div className={"skills"}>
                <Skill title={"Java"} experience={"3 years"} />
                <Skill title={"JavaScript"} experience={"2 years"} />
                <Skill title={"C#"} experience={"1 year"} />
                <Skill title={"SQL"} experience={"3 years"} />
            </div>
            <div className={"skills"}>
                <Skill title={"HTML"} experience={"5 years"} />
                <Skill title={"CSS"} experience={"5 years"} />
                <Skill title={"React"} experience={"1 year"} />
            </div>
            <div className={"skills"}>
                <Skill title={".Net"} experience={"1 year"} />
                <Skill title={"Wordpress"} experience={"5 years"}/>
                <Skill title={"Divi Builder"} experience={"5 years"} />
                <Skill  />
            </div>

        </div>
    )
}

export default AboutMe