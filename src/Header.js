import React from "react";
import "./Header.css";
import MainButton from "./MainButton";

const Header = () => {
    return (
        <div className="headerSection">
            <h1 className="firstName">Whitney</h1>
            <h1 className="lastName">DeCock</h1>
            <MainButton text={"Portfolio"}/>
            <MainButton text={"Resume"}/>
        </div>
    )
}

export default Header;