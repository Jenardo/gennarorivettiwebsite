import ReactDOM from "react-dom"
import React from "react"

// Import aboutme section
import AboutMe from "./components/aboutme"
import Competences from "./components/competences"
import Projects from "./components/project"


function App() {
    return (
        <div>
        <AboutMe />
        <Competences />
        <Projects />
        </div>
    );

}

ReactDOM.render(<App />, document.getElementById("App"));