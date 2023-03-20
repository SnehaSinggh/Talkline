import React from "react";
import Online from "../online/Online";
import { Usersonline } from "../../data";
import "./rightbarhome.scss";

const Rightbarhome = () => {
  return (
    <div className="rightbarhome">
      <div className="birthdayContainer">
        <img
          src="/assets/birthdaygifts/gift.jpg"
          alt=""
          className="birthdayImg"
        />
        <span className="birthdayText">
          <b>Stuti Roy</b> and <b>other friends</b> have a birthday today
        </span>
      </div>
      

      <span className="rightbarTitle">Online Friends</span>

      <ul className="rightbarFriendList">
        {Usersonline.map((u) => (
          <Online key={u.id} onlineuser={u} />
        ))}
      </ul>
    </div>
  );
};

export default Rightbarhome;