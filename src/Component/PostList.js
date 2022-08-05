import React from 'react'
import { useSelector } from 'react-redux/es/exports'
import { selectPost } from '../features/counter/post/postSlice'


const PostList = () => {

     const posts = useSelector(selectPost)

  return (
    <div>
        heelo
    </div>
  )
}

export default PostList