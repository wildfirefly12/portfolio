import React from "react";

import "./Skill.css";

const Skill = (props) => {



    return (
        <div className={"skill"}>
            <img className={"skillImg"} src={props.img} alt={props.title}/>
            <p className={"skillTitle"}>{props.title}</p>
            <p className={"skillYears"}>{props.years}</p>
        </div>
    )
}

export default Skill;