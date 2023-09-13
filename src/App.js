import './App.css';
import React from "react";
import NavBar from "./components/nav/NavBar";
import Landing from "./components/landing/Landing";
import About from "./components/about/About";
import {Route, Routes} from "react-router";
import Legacy from "./components/portfolio/legacy/Legacy";
function App() {


    const routes = [
        {
            path: "/about",
            component: <About/>
        },
        {
            path: "/portfolio",
            component: <Legacy/>
        },
        {
            path: "/",
            component: <Landing/>
        }

    ]

    return (
        <div className="App">
                <NavBar/>
                <Routes>
                    {routes.map((r, i) => (
                        <Route
                            key={i}
                            path={r.path}
                            exact
                            element={r.component}
                        />
                    ))}
                </Routes>
        </div>
    );
}

export default App;
