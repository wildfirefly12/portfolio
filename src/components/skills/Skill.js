import React from "react";

import "./Skill.css";

const Skill = (props) => {


    return (
        <div style={props.style} className={"skill"}>
            <style>{props.keyFrames}</style>
            <img className={"skill-img"} src={props.img} alt={props.title}/>
            <p className={"skill-title"}>{props.title}</p>
            <p className={"skill-years"}>{props.years}</p>
        </div>
    )
}

export default Skill;