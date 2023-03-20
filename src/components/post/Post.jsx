import React from "react";
import "./post.scss";
import { Users } from "./../../data";
import { IconButton } from "@mui/material";
import {
  
  MoreVert,
  
} from "@mui/icons-material";


const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
                src={
                  Users.filter((u) => u.id === post.userId)[0].profilePicture
                }
                alt=""
                className="postProfileImg"
              />
            
            <span className="postUsername">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span> 
          </div>
          <div className="postTopRight">
            <IconButton>
              <MoreVert className="postVertButton" />
            </IconButton>
          </div>
        </div>
        <div className="postCenter">
       
          <span className="postText">{post.body}</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        
      </div>
    </div>
  );
};

export default Post;