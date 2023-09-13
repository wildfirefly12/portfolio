import "./Portfolio.css";

import legacy from "../../img/legacy_welcome.png";
import todo from "../../img/todo.png";
import finance from "../../img/finance.png";

import React, {useState} from "react";

const Portfolio = () => {

    const [showName, setShowName] = useState(false);
    const [name, setName] = useState("");

    const handleShowName = (name) => {
        setName(name);
        setShowName(true);
    }

    return (
        <div className={"portfolio-container"}>
            <img src={legacy} className={"feature-img all-img"} alt={"Legacy Horse Game"} onMouseEnter={handleShowName.bind(this, "Legacy: Horse Game")} onMouseLeave={setShowName.bind(this, false)}/>
            <div className={"other-images"}>
                <img src={todo} className={"other-img all-img"} alt={"To-Do"} onMouseEnter={handleShowName.bind(this, "To-Do Manager")} onMouseLeave={setShowName.bind(this, false)}/>
                <img src={finance} className={"other-img all-img"} alt={"Finance Manager"} onMouseEnter={handleShowName.bind(this, "Finances Manager")} onMouseLeave={setShowName.bind(this, false)}/>
            </div>
            {showName && <h2>{name}</h2>}
        </div>
    )
}

export default Portfolio