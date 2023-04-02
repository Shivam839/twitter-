import React from 'react'
import "./Sidebar.css"
// import TwitterIcon  from '@mui/icons-material/Twitter'
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from './SidebarOption';
import HomeIcon from "@mui/icons-material/Home";
// import SearchIcon from "@mui/icons-material/Search"
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Tag from "@mui/icons-material/Tag"
import { Button } from '@mui/material';

// import TwitterIcon from " "

function Sidebar(props) {
  const {setLog}=props;
  return (

    <div className='sidebar'>
      
        <TwitterIcon className='sidebar_twitterIcon'/>
        <SidebarOption active Icon = {HomeIcon}  text="Home"/>
        <SidebarOption Icon = {Tag} text = "Explore"/>
        <SidebarOption Icon = {NotificationsNoneIcon} text = "Notifictions"/>
        <SidebarOption Icon = {MailOutlineIcon}  text="Messages"/>
        <SidebarOption Icon = {BookmarkBorderIcon} text = "Bookmarks"/>
        <SidebarOption Icon = {ListAltIcon} text = "Lists"/>
        <SidebarOption Icon = {PermIdentityIcon}  text=       "Profile"/>
        <SidebarOption Icon = {MoreHorizIcon} text = "Explore"/>
        <Button variant = "outlined" className='sidebar__tweet' onClick={()=>setLog(false)} fullWidth>Log Out </Button>
        {/* <SidebarOption/> */}
        {/* <CameraIcon/> */}
    </div>
  )
}

export default Sidebar;