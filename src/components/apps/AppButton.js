import React from "react";

import "./AppButton.css";

const AppButton = (props) => {

    const handleClick = (url) => {
        window.open(url, '_blank');
    }

    return (
        <button className="app-btn" onClick={handleClick.bind(this, props.url)}>{props.buttonTitle}</button>
    )
}

export default AppButton;