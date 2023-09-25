import "./Legacy.css";

import legacy from "../../../img/legacy_welcome.png";

import React from "react";
import AboutSectionLeft from "../../about/AboutSectionLeft";
import AboutSectionRight from "../../about/AboutSectionRight";
import TechIcon from "../TechIcon";



const Legacy = () => {

    const about = [
        {
            title: "Complex, realistic genetics",
            content: "Legacy boasts an intricate genetics system that mirrors the real-world complexities of horse " +
                "breeding. Users can explore the intricate world of equine genetics, discovering the myriad " +
                "possibilities of breeding, and witnessing the fascinating genetic outcomes in their virtual " +
                "equine companions."
        },
        {
            title: ".NET & React Integration",
            content: "The project leverages the power of .NET and React, two of the most influential and versatile " +
                "technologies in the software development landscape. This synergy results in a responsive and " +
                "user-friendly interface, ensuring a smooth and engaging user experience."
        },
        {
            title: "Data Management",
            content: "Entity Framework is the backbone of Legacy, facilitating efficient data management, storage, " +
                "and retrieval. This robust framework enhances performance and scalability, crucial for handling the " +
                "complex genetics calculations."
        },
        {
            title: "SAAS",
            content: "Being a SAAS web application, Legacy is accessible to horse enthusiasts and breeders worldwide. " +
                "Users can access the platform from any device with an internet connection, " +
                "eliminating geographical barriers."
        }
    ]

    const openLink = (url) => {
        window.open(url, '_blank');
    }

    return (
        <div className={"legacy-container"}>
            <h2 className={"legacy-title"}>Legacy: Horse Game</h2>
            <div className={"legacy-content-container"}>
                <div className={"legacy-images"}>
                    <img className={"legacy-img"} src={legacy} alt={"Legacy screenshot"} />
                    <div className={"tech-icons-container"}>
                        <TechIcon title={"C#"}/>
                        <TechIcon title={".NET"}/>
                        <TechIcon title={"JavaScript"}/>
                        <TechIcon title={"React"}/>
                        <TechIcon title={"MySQL"}/>
                        <TechIcon title={"Docker"}/>
                        <TechIcon title={"GitHub"}/>
                    </div>
                </div>
                <div className={"legacy-about-container"}>
                    <AboutSectionLeft title={about[0].title} content={about[0].content}/>
                    <AboutSectionRight title={about[1].title} content={about[1].content}/>
                    <AboutSectionLeft title={about[2].title} content={about[2].content}/>
                    <AboutSectionRight title={about[3].title} content={about[3].content}/>
                    <div className={"legacy-btn-container"}>
                        <button className={"legacy-btn"} onClick={openLink.bind(this, "https://legacyhorsegame.com")}>Live Site ></button>
                        <button className={"legacy-btn"} onClick={openLink.bind(this, "https://testing.legacyhorsegame.com")}>Test Site ></button>
                        <p>To login in to the test version of the site use this login:</p>
                        <p>Email: info@legacyhorsegame.com</p>
                        <p>Password: P@ssword!23</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Legacy