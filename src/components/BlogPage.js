import React from 'react'
import { Button, Card, CardColumns } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const BlogCard = ({ title, excerpt, id, date }) => {
    const titleURL = title.toLowerCase().split(' ').slice(0, 4).join('-')
    console.log(titleURL)
    return (
    <Card>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
            <Card.Text>{excerpt}</Card.Text>
            <NavLink to={`/blog/post/${id}/${titleURL}`}><Button>Read More</Button></NavLink>
        </Card.Body>
    </Card>
    )
}

const Loading = ({ loading }) => {
    if (loading) {
        return <h1>Loading...</h1>
    } 
    return null
}

const BlogPage = ({ pageNum, posts }) => {
    const endingPostNum = pageNum * 9
    const startingPostNum = endingPostNum - 9

    const formatDate = (date) => {
        const tempDate = new Date(date)
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                            
        const year = tempDate.getFullYear()
        const month = tempDate.getMonth()
        const day = tempDate.getDate()                 
        const shownDate = months[month] + ' ' + day + ', ' + year;    
                    
        return shownDate;
    }

    const postsToDisplay = posts.slice(startingPostNum, endingPostNum)

    if (parseInt(pageNum) === 1) {
        return (
            <div className="blog-content">
                <h1 style={{textAlign: 'center', padding: 20}}>Jada's Blog</h1>
                <CardColumns>
                    {postsToDisplay.map((post, i) => <BlogCard key={i} title={post.title} excerpt={post.excerpt} id={post.id} date={formatDate(post.date)} />
                    )}
                </CardColumns>
                {/* <NavLink to={`/blog/page/${parseInt(pageNum) + 1}`}><Button style={{margin: 10}}>-&gt;</Button></NavLink> */}
            </div>
        )
    } else if (endingPostNum > posts.length){
        return (
            <div className="blog-content">
                <h1 style={{textAlign: 'center', padding: 20}}>Jada's Blog</h1>
                <CardColumns>
                    {postsToDisplay.map((post, i) => <BlogCard key={i} title={post.title} excerpt={post.excerpt} id={post.id} />
                    )}
                </CardColumns>
                <NavLink to={`/blog/page/${parseInt(pageNum) - 1}`}><Button style={{margin: 10}}>&lt;-</Button></NavLink>
            </div>
        )
    } else {
        return (
            <div className="blog-content">
                <h1 style={{textAlign: 'center'}}>Jada's Blog</h1>
                <CardColumns>
                    {postsToDisplay.map((post, i) => <BlogCard key={i} title={post.title} excerpt={post.excerpt} id={post.id} />
                    )}
                </CardColumns>
                <NavLink to={`/blog/page/${parseInt(pageNum) - 1}`}><Button style={{margin: 10}}>&lt;-</Button></NavLink>
                <NavLink to={`/blog/page/${parseInt(pageNum) + 1}`}><Button style={{margin: 10}}>-&gt;</Button></NavLink>
            </div>
        )
    }
}

export default BlogPage