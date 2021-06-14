import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
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
    }, [])

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
        <div>
            <p>{formatDate(post.date)}</p>
            <p>By Jada Lilleboe</p>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Button onClick={() => history.goBack()}>&lt;-</Button>
        </div>
    )
}

export default BlogPost