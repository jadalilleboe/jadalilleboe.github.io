import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import postService from '../services/posts'

const BlogCard = ({ title, excerpt, id }) => {
    return(
    <Card>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{excerpt}</Card.Text>
            <NavLink to={`/blog/post/${id}`}><Button>Read More</Button></NavLink>
        </Card.Body>
    </Card>
    )
}

const Blog = () => {
    const [ posts, setPosts ] = useState([])
    useEffect(() => {
        postService.getAll()
        .then(posts => {
            setPosts(posts)
            console.log(posts)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="blog-content">
            <h1 style={{textAlign: 'center'}}>Jada's Blog</h1>
            {posts.map((post, i) => <BlogCard key={i} title={post.title} excerpt={post.excerpt} id={post.id} />
            )}
        </div>
    )
}

export default Blog