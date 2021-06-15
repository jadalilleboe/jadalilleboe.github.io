import React, { useState, useEffect } from 'react'
import { useHistory, NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap'
import postService from '../services/posts'

const BlogPost = ({ id }) => {
    let history = useHistory()
    const [ post, setPost ] = useState({})
    useEffect(() => {
        postService.getOnePost(id)
        .then(requestedPost => {
            setPost(requestedPost)
        })
        .catch(() => console.log("there was an error"))
    }, [id])

    const formatDate = (date) => {
        const tempDate = new Date(date)
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                            
        const year = tempDate.getFullYear()
        const month = tempDate.getMonth()
        const day = tempDate.getDate()                 
        const shownDate = months[month] + ' ' + day + ', ' + year;    
                    
        return shownDate;
    }
    return (
        <div className="blog-post">
            <div className="blog-post-content">
                <p className="blog-post-info" style={{padding: "10px 15px 0px"}}>{formatDate(post.date)}</p>
                <p className="blog-post-info" style={{padding: "0px 15px 0px"}}>By <NavLink to="/about">Jada Lilleboe</NavLink></p>
                <h1>{post.title}</h1>
                <div className="blog-post-text">{post.content}</div>
            </div>
            <Button style={{margin: 10}} onClick={() => history.goBack()}>&lt;-</Button>
        </div>
    )
}

export default BlogPost