import React from 'react'
import '../../styles/Header.css'

import GDriveLogo from '../../media/google-drive-logo.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const index = ({ userPhoto }) => {
    console.log('User photo URL:', userPhoto); // Debug log
    
    return (
        <div className='header'>
            <div className="header__logo">
                <img src={GDriveLogo} alt="Google Drive" />
                <span>Drive</span>
            </div>
            <div className="header__searchContainer">
                <div className="header__searchBar">
                    <SearchIcon />
                    <input type="text" placeholder='Search in Drive' />
                    <ExpandMoreIcon />
                </div>
            </div>
            <div className="header__icons">
                <span>
                    <HelpOutlineIcon />
                    <SettingsIcon />
                </span>
                <AppsIcon />
                {userPhoto && userPhoto !== 'null' && userPhoto !== 'undefined' ? (
                    <img src={userPhoto} alt="User Photo" onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                    }}/>
                ) : null}
                <AccountCircleIcon 
                    className="user-avatar" 
                    style={{ 
                        fontSize: 32, 
                        color: '#5f6368',
                        display: userPhoto && userPhoto !== 'null' && userPhoto !== 'undefined' ? 'none' : 'block'
                    }} 
                />
            </div>
        </div>
    )
}

export default index