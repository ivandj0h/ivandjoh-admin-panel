import './sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'><span className='logo'>Admin Panel</span></div>
        <div className='center'>Lists</div>
        <div className='bottom'>Color Options</div>
    </div>
  )
}

export default Sidebar