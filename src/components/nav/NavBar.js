import React from "react";

import "./NavBar.css";

import NavItem from "./NavItem";

const NavBar = () => {



    return (
        <div className={"nav-bar"}>
            <NavItem navItem={"portfolio"} link={"#portfolio"}/>
            <NavItem navItem={"skills"} link={"#skills"}/>
            <NavItem navItem={"resume"} link={"https://drive.google.com/file/d/1WQ4E6VZInlFk9v3WWfulx11VhxN9uGbz/view?usp=sharing"}/>
        </div>
    )
}

export default NavBar