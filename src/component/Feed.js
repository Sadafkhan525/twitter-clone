import React from 'react'
import {  useEffect, useState} from "react";
import  "./Feed.css";
import db from './firebase';
import TweetBox from './TweetBox';
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot =>{
      setPosts(snapshot.docs.map(doc => doc.data()))
  })
  }, [])

  return (
    <div className="feed">
    <div className = "feed__header">
        <h3>Home</h3>
    </div>
    {/* {Home} */}
    <TweetBox />
    {/* {Post} */}
    {posts.map(post => (
      <Post  
        key = {post.key}
        displayName  = {post.displayName}
        userName = {post.userName}
        verified = {post.verified}
        text = {post.text}
        image = {post.avatar}
      
      />
    ))}
      
      
      
    </div>
  )
}

export default Feed;