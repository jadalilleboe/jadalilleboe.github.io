import React from 'react'
import { Button, Card } from 'react-bootstrap'
import emailPic from '../img/email.png'
import apiPic from '../img/survivorapi.png'
import hackPic from '../img/PMHackSS.png'

const ProjectCard = ({ img, title, text, firstLink, firstLinkText, otherLink, otherLinkText }) => {
    const cardStyle = {
        maxWidth: '30rem',
        height: 'fit-content',
        overflow: 'hidden',
        display: 'inline-block',
        color:'white',
        backgroundColor: '#126948',
        margin: '20px',
        flexGrow: 0,
    }
    return (
        <Card style={cardStyle}>
            <Card.Img src={img}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text style={{textAlign: 'left'}}>{text}</Card.Text>
                <a href={firstLink} target="_blank" rel="noreferrer"><Button className="project-button" style={{backgroundColor: '#d2b48c', color: 'black', marginBottom: 10}}>{firstLinkText}</Button></a>
                <br />
                <a href={otherLink} target="_blank" rel="noreferrer"><Button className="project-button" style={{backgroundColor: '#d2b48c', color: 'black', maxHeight: '5em'}}>{otherLinkText}</Button></a>
            </Card.Body>
        </Card>
    )
}

const Projects = () => {
    return (
        <div className="projects-content">
            <h1 style={{padding: 20}}>Projects</h1>
            <div className="projects-cards">
                <ProjectCard className="project-1" img={emailPic} title="Subreddit Email Summaries" text="This is a full-stack web application that allows users to sign-up for a daily, weekly, or monthly subreddit summary sent via e-mail." firstLink="https://github.com/jadalilleboe/subreddit_summaries" firstLinkText="Github Repository" otherLink="http://subredditemailsummary.com" otherLinkText="Subreddit Email Summary Signup Website"/>
                <ProjectCard className="project-2" img={apiPic} title="Survivor Database & API" text="For this project, I used web scraping tools to make a database about CBS's show Survivor. I then built an API that could query the data." firstLink="https://github.com/jadalilleboe/survivor-db-api" firstLinkText="Github Repository" otherLink="https://www.postman.com/jlillebo/workspace/survivor-api/overview" otherLinkText="Postman Collection"/>
                <ProjectCard className="project-3" img={hackPic} title="News Data Visualization" text="Built for the Postman Visualize for the Prize Hackathon. I visualized data from the top trending news stories with Bootstrap, Javascript, and AnyChart.js." firstLink="https://www.postman.com/lunar-module-cosmonaut-36829428/workspace/postman-visualization-hackathon/overview" firstLinkText="Postman Collection" otherLink="https://youtu.be/eN0ocW3htmc" otherLinkText="Demo Video"/>
            </div>
        </div>
    )
}

export default Projects