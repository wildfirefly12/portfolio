import React from "react";

import "./NavItem.css";
import { NavHashLink} from "react-router-hash-link";
const NavItem = (props) => {

    const showLink = () => {
        if(props.link.includes('#')){
            return <NavHashLink className={"nav-item"} smooth to={props.link} >{props.navItem}</NavHashLink>
        } else {
            return <a className={"nav-item"} href={props.link} rel={"noreferrer"} target={"_blank"}>{props.navItem}</a>
        }
    }

    return (
        <>
            {showLink()}
        </>
    )
}

export default NavItem;