import React from 'react'
import "./Widjet.css"
import "./FeedLogOut.css"
import Search from "@mui/icons-material/Search";
// import {TwitterTimelineEmbed, TwitterShareButton,TwitterTweetEmbed} from "react-twitter-embed";

function FeedLogOut() {
  return (
    <div className='feedLogOut'>
      {/* <h2>widjet</h2> */}
      <div className="widjets__input">
        <Search className="widjets_searchIcon"/>
        <input type="text" placeholder='Search twitter' />
      </div>
      <div className="widgets__widgetContainer">
        <nav>
            <ul>
                <li>For You</li>
                <li>Trending</li>
                <li>News</li>
                <li>Sports</li>
                <li>Entertainment</li>
            </ul>
        </nav>
      </div>
      </div>
  )
}

export default FeedLogOut