import React from "react";

import "./MainButton.css";

const MainButton = (props) => {

    const handleClick = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <>
            <button className={"button"} onClick={handleClick.bind(this, props.url)}>{props.text}</button>
        </>
    )
}

export default MainButton;