import React, { useContext } from 'react';
import './navbar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/AuthContext';


const Navbar = () => {

      const { dispatch } = useContext(DarkModeContext);
      const { user } = useContext(AuthContext);


      return (
            <div className='navbar'>
                  <div className='wrapper'>
                        <div className='search'>
                              <input type="text" placeholder='Search...'/>
                              <SearchOutlinedIcon/>
                        </div>

                        <div className='items'>
                             
                              <div className='item'>
                                    <DarkModeOutlinedIcon className='icon' onClick={() => dispatch({type: "TOGGLE"})}/>
                              </div>
                              <div className='item'>
                                    <NotificationsNoneOutlinedIcon className='icon'/>
                                    <div className='counter'>1</div>
                              </div>
                              <div className='item'>
                                    <ChatBubbleOutlineOutlinedIcon className='icon'/>
                                    <div className='counter'>2</div>
                              </div>
                              <div className='item'>
                                    <img
                                          src={user.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
                                          alt=""
                                          className='avatar'
                                    />
                                    <span>Hi {user.firstname}</span>
                              </div>

                        </div>
                  </div>
            </div>
      )
}

export default Navbar