import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';


const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
          <span className='logo'>Admin Panel</span>
        </div>
        <hr />
        <div className='center'>
          <ul>
            <li>
              <DashboardIcon />
              <span>Dashboard</span>
            </li>
            <li>
              <span>Users</span>
            </li>
            <li>
              <span>Products</span>
            </li>
            <li>
              <span>Orders</span>
            </li>
            <li>
              <span>Status</span>
            </li>
            <li>
              <span>Notifications</span>
            </li>
            <li>
              <span>System Health</span>
            </li>
            <li>
              <span>Logs</span>
            </li>
            <li>
              <span>Settings</span>
            </li>
            <li>
              <span>Profile</span>
            </li>
            <li>
              <span>Logout</span>
            </li>
          </ul>
        </div>
        <div className='bottom'>Color Options</div>
    </div>
  )
}

export default Sidebar