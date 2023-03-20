import { AuthContext } from "./../../context/AuthContext";
import "./menuLink.scss";
import React, { useContext } from "react";
const MenuLink = ({ Icon, text }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="menuLink">
      {Icon}
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName">{text === "Logout" &&  currentUser.displayName }</span>
    </div>
  );
};

export default MenuLink;