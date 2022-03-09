import './App.css';
import AppSection from "./AppSection";
import React from "react";
import Header from "./Header";

function App() {
    const javaApps = [
        {
            title: "Inventory Manager",
            language: "Java",
            description: "Assignment for C482 Software I for WGU to create and implement an Inventory Management System. Created using Java and JavaFX."
        },
        {
            title: "Scheduling App",
            language: "Java",
            description: "Assignment for C195 Software II for WGU to create and implement a contact management and scheduling application. Created using Java, JavaFX, and MySQL"
        }
    ]

    const wordpressApps = [
        {
            title: "Christine Bakke Photo",
            language: "Wordpress",
            description: "A portfolio website for Christine Bakke Photography built with WordPress and Divi."
        },
        {
            title: "Firehouse Fitness Center",
            language: "Wordpress",
            description: "A website for a fitness center utilizing WordPress and Divi."
        }
    ]

    return (
        <div className="App">
            <Header/>
            <AppSection sectionTitle={"Java"} apps={javaApps}/>
            <AppSection sectionTitle={"Wordpress"} apps={wordpressApps}/>
        </div>
    );
}

export default App;
