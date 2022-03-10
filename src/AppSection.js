import React from "react";
import AppCard from "./AppCard";
import "./AppSection.css"


const AppSection = (props) => {

    return (
        <div>
            <h2 className="sectionTitle">{props.sectionTitle}</h2>
            {props.apps.map(app =>
                <AppCard key={app.id} title={app.title} language={app.language} description={app.description} urls={app.urls}/>
            )}
        </div>
    )
}

export default AppSection;