import React from "react";
import "./AppCard.css";
import AppButton from "./AppButton";

const AppCard = (props) => {



    return (
        <div className="container">
            <h3 className="title">{props.title}</h3>
            <h4 className="language">{props.language}</h4>
            <p className="description">{props.description}</p>
            <div className={"appButtons"}>
                {(props.urls || []).map(u =>
                    <AppButton key={u.id} buttonTitle={u.buttonTitle} url={u.url}/>
                )}
            </div>
        </div>
    )
}

export default AppCard;