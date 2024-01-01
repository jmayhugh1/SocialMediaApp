import React from 'react'
const Post = ({user, title, body, picture, likes}) => {
  
  return (
    <div>
        <h1>{user}</h1>
        <h2>{title} likes: {likes} </h2>
        <img src={process.env.PUBLIC_URL + "/logo192.png"} alt='picture' />
        <h4>{body}</h4>
    </div>
  )
}

export default Post