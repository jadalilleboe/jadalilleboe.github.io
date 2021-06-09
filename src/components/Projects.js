import React from 'react'
import { Button, Card } from 'react-bootstrap'
import emailPic from '../img/email.png'
import apiPic from '../img/survivorapi.png'

const ProjectCard = ({ img, title, text, ghLink, otherLink, otherLinkText }) => {
    return (
        <Card style={{maxWidth: '30rem', minWidth: 100, color: 'white', backgroundColor: '#126948', margin: "20px"}}>
            <Card.Img src={img}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <a href={ghLink} target="_blank" rel="noreferrer"><Button className="project-button" style={{backgroundColor: '#d2b48c', color: 'black', marginBottom: 10}}>GitHub Repository</Button></a>
                <br />
                <a href={otherLink} target="_blank" rel="noreferrer"><Button className="project-button" style={{backgroundColor: '#d2b48c', color: 'black'}}>{otherLinkText}</Button></a>
            </Card.Body>
        </Card>
    )
}

const Projects = () => {
    return (
        <div className="projects-content">
            <h1 style={{padding: 20}}>Projects</h1>
            <div className="projects-cards">
                <ProjectCard className="project-1" img={emailPic} title="Subreddit Email Summaries" text="This is a full-stack web application that allows users to sign-up for a daily, weekly, or monthly subreddit summary sent via e-mail." ghLink="https://github.com/jadalilleboe/subreddit_summaries" otherLink="http://subredditemailsummary.com" otherLinkText="Subreddit Email Summary Signup Website"/>
                <ProjectCard className="project-2" img={apiPic} title="Survivor Database & API" text="For this project, I used web scraping tools to make a database about CBS's show Survivor. I then built an API that could query the data." ghLink="https://github.com/jadalilleboe/survivor-db-api" otherLink="https://www.postman.com/jlillebo/workspace/survivor-api/overview" otherLinkText="Postman Collection"/>
                <ProjectCard className="project-3" img="https://via.placeholder.com/150x75" title="Wellness Wendell" text="Work in progress. The idea is to make a web app where users can customize wellness messages sent to to them via text." otherLinkText=""/>
            </div>
        </div>
    )
}

export default Projects