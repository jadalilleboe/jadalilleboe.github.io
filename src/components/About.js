import React from 'react'
import placeholder from '../img/brownhairgirl.jpg'

const About = () => {
    return (
        <div className="about-content">
            <div className="left-grid-item jada-picture-2">
                <img className="img-fluid" src={placeholder} alt="placecholder"/>
            </div>
            <div className="right-grid-item about-info">
                <h1>About Me</h1>
                <p>Hi! My name is Jada Lilleboe, and I am currently a sophomore student at the University of Minnesota Twin-Cities. I am pursuing a B.A. in Computer Science and a minor in Technical Writing and Communication.</p>
            </div>
        </div>
    )
}

export default About