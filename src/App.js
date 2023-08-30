import './App.css';
import React from "react";
import Header from "./components/Header";
import NavBar from "./components/nav/NavBar";
import AppCard from "./components/apps/AppCard";
import Skills from "./components/skills/Skills";
import {BrowserRouter} from "react-router-dom";
function App() {


    const apps = [
        {
            id: "7",
            title: "Finance Management Demo App",
            language: "C#, .Net, Javascript, React",
            description: "A simple finance management demo application. Created using .Net, Entity Framework and React.",
            urls: [
                {id: "1", buttonTitle: "Code", url: "https://github.com/wildfirefly12/FinanceManagementDemoApp"},
                {id: "2", buttonTitle: "App", url: "https://finance.whitneydecock.com/"}
            ]
        },
        {
            id: "6",
            title: "To-Do App",
            language: "Javascript, React",
            description: "A simple to-do/note management application. Created using React and Javascript",
            urls: [
                {id: "1", buttonTitle: "Code", url: "https://github.com/wildfirefly12/todo"},
                {id: "2", buttonTitle: "App", url: "https://todo.whitneydecock.com"}
            ]
        },
        {
            id: "5",
            title: "Inventory Manager",
            language: "Java, JavaFX",
            description: "Assignment for C482 Software I for WGU to create and implement an Inventory Management System. Created using Java and JavaFX.",
            urls: [
                {id: "1", buttonTitle: "Code", url: "https://github.com/wildfirefly12/WGU-C482-Final"},
                {id: "2", buttonTitle: "Demo", url: "https://www.youtube.com/watch?v=8_HPkVqtNTk"}
                ]
        },
        {
            id: "4",
            title: "Scheduling apps",
            language: "Java, JavaFX, SQL",
            description: "Assignment for C195 Software II for WGU to create and implement a contact management and scheduling application. Created using Java, JavaFX, and MySQL.",
            urls: [
                {id: "1", buttonTitle: "Code", url: "https://github.com/wildfirefly12/WGU-C195-Final"},
                {id: "2", buttonTitle: "Demo", url: "https://www.youtube.com/watch?v=mCmp9_pinaM"}
                ]
        },
        {
            id: "3",
            title: "Android Course Manager",
            language: "Java",
            description: "Assignment for C196 for WGU to create and implement an Andriod application. Created using Java.",
            urls: [
                {id: "1", buttonTitle: "Code", url: "https://github.com/wildfirefly12/wguC196"}
                ]
        },
        {
            id: "2",
            title: "Christine Bakke Photo",
            language: "Wordpress",
            description: "A portfolio website for Christine Bakke Photography built with WordPress and Divi.",
            urls: [
                {id: "1", buttonTitle: "Site", url: "https://www.cbakkephotography.com"}
            ]
        },
        {
            id: "1",
            title: "Firehouse Fitness Center",
            language: "Wordpress",
            description: "A website for a fitness center utilizing WordPress and Divi.",
            urls: [
                {id: "1", buttonTitle: "Site", url: "https://www.thefirehousefitnesscenter.com"}
            ]
        }
    ]

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar/>
            </BrowserRouter>
            <Header/>
            <div id={"portfolio"} />
            <div>
                <h2 className={"sectionTitle"}>Projects</h2>
                <div className={"section"}>
                    {apps.map(app =>
                        <AppCard key={app.id} title={app.title} language={app.language} description={app.description} urls={app.urls}/>
                    )}
                </div>
            </div>
            <div id={"skills"}/>
            <div className={"skillsSection"}>
                <h2 className={"sectionTitle"}>Skills</h2>
                <Skills/>
            </div>
        </div>
    );
}

export default App;
