import React,{useState} from 'react'
import './Sidebar.css'
import Home from '../Home/Home'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import SidebarList from './SidebarList';

const Sidebar = ({ theme, changeTheme }) => {
  const [expandSidebar, setExpandSidebar] = useState(true);

  const handleExpandClick = () => {
    setExpandSidebar(!expandSidebar);
  };

  return (
    <div className="container-fluid sidebar-section">
      <div className={expandSidebar ? "sidebar-expand sidebar" : "sidebar"}>
        <div className="icon-for-sidebar-expand-and-collapse">
          <p onClick={handleExpandClick}>
            {expandSidebar ? <BsChevronLeft /> : <BsChevronRight />}
          </p>
        </div>
        <SidebarList expandSidebar={expandSidebar} />
      </div>
      <div className="container">
        <Home theme={theme} changeTheme={changeTheme} />
      </div>
    </div>
  );
};

export default Sidebar