import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { selectPost, postAdded } from '../features/counter/post/postSlice'
// import { postAdded } from '../features/counter/post/postSlice'

import './postList.css'

const PostList = () => {

     const posts = useSelector(selectPost)

      const renderPosts = posts.map(post => (
        <article className='articleee' key={post.id}>
            <h3> {post.title} </h3>
            <p> {post.content.substring(0,100)} </p>
        </article>
      ))
  return (
    <div>
        <h2>posts</h2>
        {renderPosts}
    </div>
  )
}

export default PostList