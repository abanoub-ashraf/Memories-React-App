import React from 'react'
import useStyles from './Styles'

import Post from './Post/Post'

const Posts = () => {
    const classes = useStyles()

    return(
        <>
            <h1>POSTS</h1>
            <Post />
            <Post />
        </>
    )
}

export default Posts