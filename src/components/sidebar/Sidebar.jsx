import React, { useContext } from 'react';
import './sidebar.scss';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import SettingsApplicationsOutlinedIcon from '@mui/icons-material/SettingsApplicationsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import { AuthContext } from '../../context/AuthContext';


const Sdebar = () => {

    const { user, dispatch } = useContext(AuthContext);

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }


    return (
        <div className='sidebar'>

            <div className='sidebarFixed'>

                {/* TOP */}
                <div className='top'>
                    <Link to="/" style={{ textDecoration: 'none', color: '#282828' }}>
                        <span className='logo'>shebossAdmin</span>
                    </Link>
                </div>
                <hr />

                {/* CENTER */}
                <div className='center'>
                    <ul>
                        <p className='title'>HOME</p>

                        <Link to="/" style={{ textDecoration: 'none', color: '#282828' }}>
                            <li>
                                <DashboardIcon className='icon' />
                                <span>Dashboard</span>
                            </li>
                        </Link>

                        <p className='title'>LISTS / ACTIVE LINKS</p>

                        <Link to="/users" style={{ textDecoration: 'none', color: '#282828' }}>
                            <li>
                                <PeopleAltOutlinedIcon className='icon' />
                                <span>Users</span>
                            </li>
                        </Link>



                        <Link to="/products" style={{ textDecoration: 'none', color: '#282828' }}>
                            <li>
                                <Inventory2OutlinedIcon className='icon' />
                                <span>Products</span>
                            </li>
                        </Link>

                        <Link to="/orders" style={{ textDecoration: 'none', color: '#282828' }}>
                            <li>
                                <DescriptionOutlinedIcon className='icon' />
                                <span>Orders</span>
                            </li>
                        </Link>


                        <p className='title'>USEFUL LINKS</p>

                        <li>
                            <InsertChartOutlinedIcon className='icon' />
                            <span>Stats</span>
                        </li>
                        <li>
                            <NotificationsOutlinedIcon className='icon' />
                            <span>Notifications</span>
                        </li>

                        <p className='title'>USER</p>

                        <li>
                            <SettingsApplicationsOutlinedIcon className='icon' />
                            <span>Settings</span>
                        </li>
                        <li>
                            <AccountCircleOutlinedIcon className='icon' />
                            <span>Profile</span>
                        </li>
                        <li onClick={handleLogout} style={{ marginTop: 40 }}>
                            <ExitToAppOutlinedIcon className='icon' style={{ color: 'red' }} />
                            <span style={{ color: 'red' }}>{user && "LOGOUT"}</span>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Sdebar