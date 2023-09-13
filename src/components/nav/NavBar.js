import React from "react";

import "./NavBar.css";
import headshot from "../../img/headshot.jpg"

import {Link} from "react-router-dom";

const NavBar = () => {

    const links = [
        {
            path: "/about",
            name: "about"
        },
        {
            path: "/portfolio",
            name: "portfolio"
        }
    ]

    const openResume = () => {
        window.open( "https://drive.google.com/file/d/111OpuLBFduh5Ih9NZ6XaIev4QPQdBPYz/view?usp=sharing", '_blank')
    }

    return (
        <div className={"nav-bar"}>
            <div>
                <img className={"headshot"} src={headshot} alt={"Headshot"}/>
                {links.map((l, i) => (
                    <Link key={i} className={"nav-item"} to={l.path} >
                        <p className={"nav-item-text"}>{l.name}</p>
                    </Link>
                ))}
                <p className={"nav-item"} style={{marginTop: "10px"}} onClick={openResume}>resume</p>
            </div>
            <p className={"tagline"}>designer turned developer</p>
        </div>
    )
}

export default NavBar