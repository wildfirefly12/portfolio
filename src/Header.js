import React from "react";
import "./Header.css";
import MainButton from "./MainButton";

const Header = () => {
    return (
        <div className="headerSection">
            <h1 className="firstName">Whitney</h1>
            <h1 className="lastName">DeCock</h1>
            <MainButton text={"Resume"} url={"https://drive.google.com/file/d/1zzqMWKc_D4CgHRkdBnuMGoo1ReAJKSCt/view?usp=sharing"}/>
        </div>
    )
}

export default Header;