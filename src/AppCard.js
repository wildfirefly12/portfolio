import React from "react";
import "./AppCard.css";
import AppButton from "./AppButton";

const AppCard = (props) => {
    return (
        <div className="container">
            <h3 className="title">{props.title}</h3>
            <h4 className="language">{props.language}</h4>
            <p className="description">{props.description}</p>
            <AppButton buttonTitle={"Code"}/>
            <AppButton buttonTitle={"App"}/>
        </div>
    )
}

export default AppCard;