import React from "react";
import "./Showvideo.css";
import { Link } from "react-router-dom";
import moment from "moment";
import "../../../App.css";

const Showvideo = ({ vid }) => {
    // console.log(vid)
  return (
    <>
      <Link to={`/videopage/${vid._id}`}>
        <video src={`http://localhost:5000/${vid.filepath}`} className="video_showVideo" controls />
      </Link>
      <div className="video_description">
        <div className="Chanel_logo_App">
          <div className="fstChar_logo_App">
            {vid.uploader.charAt(0).toUpperCase()}
          </div>
        </div>
        <div className="video_details">
        <p className="title_vid_ShowVideo">{vid?.videotitle}</p>
          <div className="vid_info">
            <span>{vid.uploader}</span>
            <div className="dot"></div>
            <span>{vid.views ? vid.views : "0"} views</span>
            <div className="dot"></div>
            <span>{moment(vid.createdat || new Date()).fromNow()}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Showvideo;
