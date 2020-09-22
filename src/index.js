import ReactDOM from "react-dom"
import React from "react"

// Import aboutme section
import Navbar from "./components/navbar/Navbar"
import AboutMe from "./components/AboutMe"
import Competences from "./components/Competences"
import Projects from "./components/Project"
import Contacts from "./components/Contacts"


function App() {
    return (
        <div>
        <Navbar />
        <AboutMe />
        <Competences />
        <Projects />
        <Contacts />
        </div>
    );

}

ReactDOM.render(<App />, document.getElementById("App"));