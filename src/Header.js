import { Avatar } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to='/'>
                    <img
                        className="header__logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/GoogleLogoSept12015.png/640px-GoogleLogoSept12015.png"
                        alt=""
                    />
                </Link>
            </div>

            <div className="header__input">
                <input value={inputSearch} onChange={e => setInputSearch(e.target.value)}
                    placeholder="Search" type="text" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputSearchIcon" />
                </Link>

            </div>

            <div className="header__right">
                <VideoCallIcon className="header__rightIcon" />
                <AppsIcon className="header__rightIcon" />
                <NotificationsNoneIcon className="header__rightIcon" />
                <Avatar
                    alt="Jay K"
                    src="https://t4.ftcdn.net/jpg/01/57/11/07/360_F_157110702_EKlFgF7zUdhSCYsOQ3XhtAH3re9lmK7q.jpg"
                />
            </div>
        </div>
    )
}

export default Header
