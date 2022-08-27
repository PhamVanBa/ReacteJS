import './Sidebar.css'

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            {props.title}
        </div>
    )
}

export default Sidebar;