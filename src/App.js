import './App.css';
import AppSection from "./App/AppSection";
import React from "react";
import Header from "./Header";
import AboutMe from "./AboutMe";

function App() {
    const javaApps = [
        {
            id: "1",
            title: "Inventory Manager",
            language: "Java, JavaFX",
            description: "Assignment for C482 Software I for WGU to create and implement an Inventory Management System. Created using Java and JavaFX.",
            urls: [
                {id: "1", buttonTitle: "Code", url: "https://github.com/wildfirefly12/WGU-C482-Final"},
                {id: "2", buttonTitle: "App", url: "https://www.youtube.com/watch?v=8_HPkVqtNTk"}
                ]
        },
        {
            id: "2",
            title: "Scheduling App",
            language: "Java, JavaFX, SQL",
            description: "Assignment for C195 Software II for WGU to create and implement a contact management and scheduling application. Created using Java, JavaFX, and MySQL.",
            urls: [
                {id: "1", buttonTitle: "Code", url: "https://github.com/wildfirefly12/WGU-C195-Final"},
                {id: "2", buttonTitle: "App", url: "https://www.youtube.com/watch?v=mCmp9_pinaM"}
                ]
        },
        {
            id: "3",
            title: "Android Course Manager",
            language: "Java",
            description: "Assignment for C196 for WGU to create and implement an Andriod application. Created using Java.",
            urls: [
                {id: "1", buttonTitle: "Code", url: "https://github.com/wildfirefly12/wguC196"},
                {id: "2", buttonTitle: "App", url: "https://www.youtube.com/watch?v=8_HPkVqtNTk"}
                ]
        }
    ]

    const wordpressApps = [
        {
            title: "Christine Bakke Photo",
            language: "Wordpress",
            description: "A portfolio website for Christine Bakke Photography built with WordPress and Divi.",
            urls: [
                {id: "1", buttonTitle: "Site", url: "www.cbakkephotography.com"}
            ]
        },
        {
            title: "Firehouse Fitness Center",
            language: "Wordpress",
            description: "A website for a fitness center utilizing WordPress and Divi.",
            urls: [
                {id: "1", buttonTitle: "Site", url: "www.thefirehousefitnesscenter.com"}
            ]
        }
    ]

    return (
        <div className="App">
            <Header/>
            <div className={"section"}>
                <h2 className={"projectsTitle"}>Projects</h2>
                <AppSection sectionTitle={"Java"} apps={javaApps}/>
                <AppSection sectionTitle={"Wordpress"} apps={wordpressApps}/>
            </div>
            <AboutMe/>
        </div>
    );
}

export default App;
