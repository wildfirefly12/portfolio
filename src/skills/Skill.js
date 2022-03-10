import React from "react";

import "./Skill.css";

const Skill = (props) => {


    return (
        <div className={"skill"}>
            <div className={"skillContent"}>
                <div className={"skillTitle"}>{props.title}</div>
                <div className={"skillYears"}>{props.experience}</div>
            </div>
        </div>
    )
}

export default Skill;