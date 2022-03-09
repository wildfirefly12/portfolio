import React from "react";

import "./AppButton.css";

const AppButton = (props) => {
    return (
        <>
            <button className="appButton">{props.buttonTitle}</button>
        </>
    )
}

export default AppButton;