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

const BlogPage = ({ pageNum }) => {
    const [ posts, setPosts ] = useState([])

    const endingPostNum = pageNum * 9
    const startingPostNum = endingPostNum - 8

    useEffect(() => {
        postService.getAll()
        .then(posts => {
            setPosts(posts)
        })
        .catch(err => console.log(err))
    }, [])

    const postsToDisplay = posts.filter(post => (post.id >= startingPostNum && post.id <= endingPostNum))

    if (parseInt(pageNum) === 1) {
        return (
            <div className="blog-content">
                <h1 style={{textAlign: 'center'}}>Jada's Blog</h1>
                {postsToDisplay.map((post, i) => <BlogCard key={i} title={post.title} excerpt={post.excerpt} id={post.id} />
                )}
                <Button href={`/blog/page/${parseInt(pageNum) + 1}`}>-&gt;</Button>
            </div>
        )
    } else if (endingPostNum > posts.length){
        return (
            <div className="blog-content">
                <h1 style={{textAlign: 'center'}}>Jada's Blog</h1>
                {postsToDisplay.map((post, i) => <BlogCard key={i} title={post.title} excerpt={post.excerpt} id={post.id} />
                )}
                <Button href={`/blog/page/${parseInt(pageNum) - 1}`}>&lt;-</Button>
            </div>
        )
    } else {
        return (
            <div className="blog-content">
                <h1 style={{textAlign: 'center'}}>Jada's Blog</h1>
                {postsToDisplay.map((post, i) => <BlogCard key={i} title={post.title} excerpt={post.excerpt} id={post.id} />
                )}
                <Button href={`/blog/page/${parseInt(pageNum) - 1}`}>&lt;-</Button>
                <Button href={`/blog/page/${parseInt(pageNum) + 1}`}>-&gt;</Button>
            </div>
        )
    }
}

export default BlogPage