import {Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import db from './Firebase';
import "./tweetBox.css"
import logo from "./image/logo.jpeg"

function TweetBox() {
  const  [tweetMessage,setTweetMessage] = useState("");
  const  [tweetImageUrl,setTweetImageUrl] = useState("");
  const sendTweet = e =>{
    e.preventDefault();
    db.collection('posts').add({
      displayName:'Shivam Pandey',
      username:'@shivam839',
      verified:true,
      text:tweetMessage,
      Avatar:logo,
      Image:tweetImageUrl
    })
    setTweetMessage("");
    setTweetImageUrl("");
  }
  return (  
    <div className='tweetBox'>
        {/* <h2>TweetBox</h2> */}
        <form >
            <div className="tweetBox_input">
            <Avatar src={logo} /> 
            <input
            onChange={(e)=>(setTweetMessage(e.target.value))}
             value = {tweetMessage} 
             placeholder="What's happening?"
             type="text"/>
            </div>
            <input className='tweetBox__imageInput'
            onChange={(e)=>(setTweetImageUrl(e.target.value))}
            value = {tweetImageUrl} 
             placeholder="Optional: Enter Image URL"
             type="text"/>
            <Button 
            onClick={sendTweet}
            type='submit'
            className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox