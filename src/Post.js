import { ChatBubbleOutline, Favorite, FavoriteBorder, Publish, Repeat } from '@mui/icons-material';
import VerifiedIcon from '@mui/icons-material/VerifiedUser';
import { Avatar } from '@mui/material'
import React, { forwardRef, useState } from 'react'
import './Post.css'

const Post = forwardRef(({ displayName, username, Verified, text, image, avatar, onComment }, ref) => {
  const [liked, setLiked] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  
  const [like,setLike]=useState(0);
  const addLike = ()=>{
      let temp = like+1;
      setLike(temp);
  }

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const handleCommentSubmit = () => {
    setComments([...comments, comment]);
    setComment("");
  };

  const handleCommentClick = () => {
    setShowCommentBox(!showCommentBox);
  };

  return (
    <div className='post' ref={ref}>
      <div className="post_avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              {displayName} {" "}<span className='post_headerSpecial'>{Verified && <VerifiedIcon className="post_badge" />}{username}</span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="" className='img' />
        <div className="post_footer">
          <div className='likeMain' onClick={handleLikeClick}>
            {liked ? (
              <Favorite className='like' fontSize="small" style={{ color: 'red' }} />
            ) : (
              <FavoriteBorder className='like' fontSize="small" />
            )}
          </div>
          <ChatBubbleOutline fontSize="small" onClick={handleCommentClick} />
          <Repeat fontSize="small" />
          <Publish fontSize="small" />
        </div>
        <div className="post_comments">
          {showCommentBox && (
            <>
              <input
                type="text"
                placeholder="Add a comment..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
              <button onClick={handleCommentSubmit}>Comment</button>
            </>
          )}
          {comments.map((comment, index) => (
            <p key={index}>{comment}</p>
          ))}
        </div>
      </div>
    </div>
  )
})

export default Post