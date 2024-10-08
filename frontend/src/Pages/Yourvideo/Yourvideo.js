import React from "react";
import "./Yourvideo.css";
import vid from "../../Component/Navbar/Video/vid.mp4";
import Showideolist from "../../Component/Showideolist/Showideolist.js";
import Leftsidebar from "../../Component/Navbar/Leftsidebar/Leftsidebar.js";
import { useSelector } from "react-redux";
import Showvideogrid from "../../Component/Navbar/Showvideogrid/Showvideogrid.js";

const Yourvideo = () => {
  const currentuser=useSelector(state => state.currentuserreducer);
  const yourvideolist=useSelector(s=>s.videoreducer)?.data?.filter(q=>q.videochanel===currentuser?.result._id).reverse()
  
  return (
    <div className="container_Pages_App">
      <Leftsidebar />
      <div className="container2_Pages_App">
        <div className="container_yourvideo">
          <h1>Your Video</h1>
          {currentuser ? (
            <>
              <Showvideogrid vid={yourvideolist} />
            </>
          ) : (
            <>
              <h3>Please Login to see your upload video list</h3>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Yourvideo;
