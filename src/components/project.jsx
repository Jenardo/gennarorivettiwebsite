import React, { Component } from 'react'

var axios = require('axios')
var config = {
    method: 'get',
    url: 'https://api.jsonbin.io/b/5f61cf017243cd7e823d3739/2',
    headers: { 
      'secret-key': '$2b$10$eU4QbSzpcKbqVYjplTP8hu5v4C08lptLDBvS3CasM6C/gca7M9K4y'
    }
  };

class Projects extends Component {
    constructor(props){
        // Deprecated but still used in official documentation, so, wtf
        super(props)

        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        axios(config)
            .then(response => {
                console.log(response.data)
                this.setState({projects: response.data})
            })
            .catch(error => {
                console.log(error)
            })
    }
    

    render() {
        const { projects } = this.state
        return(
            <div className="project">
                <h1> Projects developed</h1>
                {
                    projects.length ?
                    projects.map(project => 
                    <div key={project.name} className="container">
                        <br></br>
                        <br></br>
                        <img className="--image" src={project.image} alt="WRONG PATH"></img>
                        <div className="--detail">
                        <h2 className="--name">{project.name}</h2>
                        <article className="--description">{project.description}</article>
                        <ul className="--techs">
                            <li>{project.tech[0]}</li>
                            <li>{project.tech[1]}</li>
                            <li>{project.tech[2]}</li>
                            <li style={{display: project.tech[3] ? "" : "none"}}>{project.tech[3]}</li>
                            <li style={{display: project.tech[4] ? "" : "none"}}>{project.tech[4]}</li>
                        </ul>
                        </div>
                        <br></br>
                    </div>
                        ) :
                    null
                }
            </div>
        )
    }
}

export default Projects;