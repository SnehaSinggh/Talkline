import React, { useContext } from "react";

import ChatIcon from "@mui/icons-material/Chat";

import GroupsIcon from "@mui/icons-material/Groups";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import "./sidebar.scss";
import MenuLink from "../menuLink/MenuLink";
import Friends from "../friends/Friends";
import { Users } from "../../data";
import { DarkModeContext } from "./../../context/darkModeContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        
        <MenuLink Icon={<ChatIcon />} text="Chats" />
        
        <MenuLink Icon={<GroupsIcon />} text="Friends" />
        
        <span onClick={() => dispatch({ type: "TOGGLE" })}>
          <MenuLink Icon={<Brightness4Icon />} text="Theme" />
        </span>
        <span onClick={() => signOut(auth)}>
          <MenuLink Icon={<ExitToAppOutlinedIcon />} text="Logout" />
        </span>

        
        <hr className="sidebarHr" />

        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <Friends key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;