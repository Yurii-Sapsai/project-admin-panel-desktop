import React from 'react'
import "./Sidebar.sass"

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='top'>
          <span className='logo'>Admin Panel</span>
        </div>
        <div className='center'>
          <ul>
            <p className="title">MAIN</p>
            <li>
              <DashboardIcon className='icon'/>
              <span>Dashboard</span>
            </li>
            <p className="title">LISTS</p>
            <li>
              <PersonOutlineOutlinedIcon className='icon'/>
              <span>Users</span>
            </li>
            <li>
              <Inventory2OutlinedIcon className='icon'/>
              <span>Products</span>
            </li>
            <li>
              <CreditCardIcon className='icon'/>
              <span>Orders</span>
            </li>
            <li>
              <LocalShippingIcon className='icon'/>
              <span>Delivery</span>
            </li>
            <p className="title">USEFUL</p>
            <li>
              <InsertChartIcon className='icon'/>
              <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneOutlinedIcon className='icon'/>
              <span>Notifications</span>
            </li>
            <p className="title">SERVICE</p>
            <li>
              <HealthAndSafetyOutlinedIcon className='icon'/>
              <span>System Health</span>
            </li>
            <li>
              <ViewInArIcon className='icon'/>
              <span>Logs</span>
            </li>
            <li>
              <SettingsApplicationsIcon className='icon'/>
              <span>Setting</span>
            </li>
            <p className="title">USER</p>
            <li>
              <AccountCircleOutlinedIcon className='icon'/>
              <span>Profile</span>
            </li>
            <li>
              <LogoutOutlinedIcon className='icon'/>
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className='bottom'>
            <div className='colorOption'></div>
            <div className='colorOption'></div>
        </div>
    </div>
  )
}

export default Sidebar