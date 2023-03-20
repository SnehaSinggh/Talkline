
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React, { useContext } from "react";
import { AuthContext } from "./../../context/AuthContext";
import { Link } from "react-router-dom";
import "./navbar.scss";


const Navbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Talkline</span>
        </Link>
      </div>
      <div className="navbarCenter">
        <div className="searchBar">
          <SearchIcon className="searchIcon" />
          <input
            type="text"
            placeholder="Search for friends post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="navbarRight">
        
        <div className="navbarIcons">
          <div className="navbarIconItem">
            <PersonIcon />
            <span className="navbarIconBadge">2</span>
          </div>
          <div className="navbarIconItem">
            <ChatBubbleIcon />
            <span className="navbarIconBadge">11</span>
          </div>
          <div className="navbarIconItem">
            <NotificationsIcon />
            <span className="navbarIconBadge">4</span>
          </div>
        </div>
        <div>
          {currentUser.displayName}
        </div>
           <Link to="/profile">
            <img src={currentUser.photoURL} alt="" className="navbarImg" />
            </Link>
      </div>
    </div>
  );
};

export default Navbar;