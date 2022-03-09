import React from "react";

import "./MainButton.css";

const MainButton = (props) => {
    return (
        <>
            <button className={"button"}>{props.text}</button>
        </>
    )
}

export default MainButton;