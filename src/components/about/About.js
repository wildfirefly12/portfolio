import "./About.css";

import design from "../../img/design.jpg";
import coding from "../../img/coding.jpg";

import React from "react";
import AboutSectionLeft from "./AboutSectionLeft";
import AboutSectionRight from "./AboutSectionRight";

const bio = [
    {
        title: "Bridging Creativity and Technology",
        content: "As a software developer, I am driven by a profound love for both the artistry of design and the" +
            " intricate world of programming. My journey into the realm of technology began with a degree in graphic" +
            " design and filmmaking, a foundation that instilled in me a deep appreciation for aesthetics and visual " +
            "storytelling."
    },
    {
        title: "From Pixels to Code",
        content: "Early in my career, I found myself crafting clean, user-friendly websites for clients, harnessing " +
            "the power of tools like Divi Builder and WordPress. Little did I know that these experiences would serve " +
            "as the catalyst for my transformation from designer to developer. It was here that I first glimpsed the " +
            "thrilling world of development, and I was irrevocably hooked."
    },
    {
        title: "Pursuing Software Development",
        content: "Fuelled by an insatiable curiosity and a burning desire to master the craft of software development, " +
            "I embarked on a new academic journey. I returned to school to pursue a degree in software development, " +
            "the perfect complement to my creative foundation."
    },
    {
        title: "Crafting Digital Worlds",
        content: "But my journey didn't stop there. I am a passionate game development enthusiast, constantly exploring " +
            "the boundaries of interactive storytelling and immersive experiences. My forays into this realm are not merely " +
            "a hobby but a testament to my unyielding thirst for learning and innovation."
    },
    {
        title: "",
        content: "What sets me apart as a software developer is my unwavering commitment to both technical and creative " +
            "growth. I am not content with resting on my laurels; I am always eager to learn new skills, whether they be " +
            "of a technical nature or a creative pursuit. This insatiable curiosity fuels my drive to push the boundaries " +
            "of what is possible."
    }
]

const About = () => {
    return (
        <div className={"about-container"}>
            <div className={"about-sections-container"}>
                <div className={"about-section"}>
                    <AboutSectionLeft title={bio[0].title} content={bio[0].content}/>
                    <AboutSectionRight title={bio[1].title} content={bio[1].content}/>
                    <AboutSectionLeft title={bio[2].title} content={bio[2].content}/>
                </div>
                <img className={"about-img"} src={design} alt={"desk"}/>
            </div>
            <div className={"about-sections-container"}>
                <img className={"about-img"} src={coding} alt={"coding"}/>
                <div className={"about-section"}>
                    <AboutSectionRight title={bio[3].title} content={bio[3].content}/>
                    <AboutSectionLeft title={bio[4].title} content={bio[4].content}/>
                </div>
            </div>
        </div>
    )
}

export default About