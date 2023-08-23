import React from "react";

import "./Skills.css"

import java from "../../img/icons/java.png";
import css from "../../img/icons/css.png";
import divi from "../../img/icons/divi.png";
import cSharp from "../../img/icons/cSharp.png";
import dotnet from "../../img/icons/dotnet.png";
import html from "../../img/icons/html.png";
import javaScript from "../../img/icons/javaScript.png";
import react from "../../img/icons/react.png";
import sql from "../../img/icons/sql.png";
import wordpress from "../../img/icons/wordpress.png";
import angular from "../../img/icons/angular.png";
import Skill from "./Skill";

const Skills = () => {

    const skills = [
        {
            id: 1,
            img: java,
            title: "Java",
            years: "3 years"
        },
        {
            id: 2,
            img: javaScript,
            title: "JavaScript",
            years: "5 years"
        },
        {
            id: 3,
            img: cSharp,
            title: "C#",
            years: "4 years"
        },
        {
            id: 4,
            img: sql,
            title: "SQL",
            years: "5 years"
        },
        {
            id: 5,
            img: html,
            title: "HTML",
            years: "8 years"
        },
        {
            id: 6,
            img: css,
            title: "CSS",
            years: "8 years"
        },
        {
            id: 7,
            img: react,
            title: "React",
            years: "4 years"
        },
        {
            id: 8,
            img: dotnet,
            title: ".Net",
            years: "4 years"
        },
        {
            id: 9,
            img: wordpress,
            title: "Wordpress",
            years: "6 years"
        },
        {
            id: 10,
            img: divi,
            title: "Divi Builder",
            years: "6 years"
        },
        {
            id: 11,
            img: angular,
            title: "Angular",
            years: "1 year"
        }
    ]


    return (
        <div className={"skillsContainer"}>
            {skills.map(skill =>
                <Skill key={skill.id} img={skill.img} title={skill.title} years={skill.years}/>
            )}
        </div>
    )
}

export default Skills;