import React from 'react'
import "./Sidebar.css"
import Twitter from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SidebarOptions from './SidebarOptions';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import {Button } from '@material-ui/core';



function Sidebar ()  {
  return (
    <div className="sidebar">
       
            <Twitter className="sidebar__twitterIcon" />
            <SidebarOptions active Icon={HomeIcon} text ="Home"/>
            <SidebarOptions Icon={SearchIcon} text ="Explore"/>
            <SidebarOptions Icon={NotificationsNoneIcon} text ="Notification"/>
            <SidebarOptions Icon={MailOutlineIcon} text ="Message"/>
            <SidebarOptions Icon={BookmarkBorderIcon} text ="Bookmarks"/>
            <SidebarOptions Icon={ListAltIcon} text ="Lists"/>
            <SidebarOptions Icon={PermIdentityIcon} text ="Profile"/>
            <SidebarOptions Icon={MoreHorizIcon} text ="More"/>

            <Button className="sidebar__tweet" variant="outlined">Tweet</Button>
    </div>
  )
}

export default Sidebar;