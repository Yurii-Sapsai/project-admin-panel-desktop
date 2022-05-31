import React from 'react'
import './Navbar.sass'

import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="wrapper">
          <div className="search">
                <input type="text" placeholder='Search ...' />
                <SearchIcon/>
          </div>
          <div className="items">
            <div className="item">
              <LanguageIcon className='icon'/>
              English
            </div>
            <div className="item">
              <DarkModeIcon className='icon'/>
            </div>
            <div className="item">
              <FullscreenExitIcon className='icon'/>
            </div>
            <div className="item">
              <NotificationsNoneIcon className='icon'/>
              <div className="counter">5</div>
            </div>
            <div className="item">
              <ChatBubbleOutlineIcon className='icon'/>
              <div className="counter">3</div>
            </div>
            <div className="item">
              <ListAltOutlinedIcon className='icon'/>
            </div>
            <div className="item">
              <img src="https://img.freepik.com/free-photo/headshot-portrait-happy-ginger-woman-with-freckles-smiling-white_176420-7984.jpg?w=2000" alt="avatar" className='avatar'/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar