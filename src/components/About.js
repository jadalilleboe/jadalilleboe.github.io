import React from 'react'
import placeholder from '../img/brownhairgirl.jpg'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div className="about-content">
            <div className="left-grid-item jada-picture-2">
                <img className="img-fluid" src={placeholder} alt="placecholder"/>
            </div>
            <div className="right-grid-item about-info">
                <h1>About Me</h1>
                <p>Hi! My name is Jada Lilleboe, and I am currently a sophomore student at the University of Minnesota Twin-Cities. I am pursuing a B.A. in Computer Science and a minor in Technical Writing and Communication. I became interested in computer science after taking an introductory progamming course at the U (and enjoying it very much). I'm an officer of the UMN student group ACM-W, and a staunch advocate for the retention of women in computing and technology.</p>
                <p>I was born in Minneapolis, MN and grew up in Cottage Grove, MN. I graduated from Park High School in 2020 with summa cum laude distinction. While in high school, I participated in theater, choir, and marching band.</p>
                <p>Lately, coding and making interactive web applications have been my main hobbies. I enjoy web development because there's so much to learn, and so many different areas to try out like front-end, back-end, etc.</p>
                <p>Some of my other hobbies are reading, yoga, and spending time with friends and family.</p>
                <p>Feel free to reach out to me about anything! I'm always happy to chat, and all of my contact information can be found on the <NavLink to='/contact' className="paragraph-link">contact page</NavLink>.</p>
            </div>
        </div>
    )
}

export default About