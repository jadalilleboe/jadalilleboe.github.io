import React from 'react'
import { Button, Card } from 'react-bootstrap'
import emailPic from '../img/email.png'

const ProjectCard = ({ img, title, text, ghLink, otherLink, otherLinkText }) => {
    return (
        <Card style={{width: '30rem', color: 'white', backgroundColor: '#126948'}}>
            <Card.Img src={img}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
                <a href={ghLink} target="_blank" rel="noreferrer"><Button style={{backgroundColor: '#d2b48c ', color: 'black', marginBottom: 10}}>GitHub Repository</Button></a>
                <a href={otherLink} target="_blank" rel="noreferrer"><Button style={{backgroundColor: '#d2b48c ', color: 'black'}}>{otherLinkText}</Button></a>
            </Card.Body>
        </Card>
    )
}

const Projects = () => {
    return (
        <div className="projects-content">
            <h1>Projects</h1>
            <ProjectCard img={emailPic} title="Subreddit Email Summaries" text="Lorem Ipsum Dolor" ghLink="https://github.com/jadalilleboe/subreddit_summaries" otherLink="http://subredditemailsummary.com" otherLinkText="Subreddit Email Summary Signup Website"/>
        </div>
    )
}

export default Projects