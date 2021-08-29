import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import HistoryIcon from '@material-ui/icons/History';
import HomeIcon from '@material-ui/icons/Home';
import OnDemandVideoIcon from '@material-ui/icons/OndemandVideo';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import React from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarItem';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarItem selected Icon={HomeIcon} title="Home" />
            <SidebarItem Icon={WhatshotIcon} title="Trending" />
            <SidebarItem Icon={SubscriptionsIcon} title="Subscription" />
            <hr />
            <SidebarItem Icon={VideoLibraryIcon} title="Library" />
            <SidebarItem Icon={HistoryIcon} title="History" />
            <SidebarItem Icon={OnDemandVideoIcon} title="Your videos" />
            <SidebarItem Icon={WatchLaterIcon} title="Watch Later" />
            <SidebarItem Icon={ThumbUpAltOutlinedIcon} title="Liked videos" />
            <SidebarItem Icon={ExpandMoreOutlinedIcon} title="Show more" />
        </div>
    )
}

export default Sidebar
