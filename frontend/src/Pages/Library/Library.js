import React from "react";
import Leftsidebar from "../../Component/Navbar/Leftsidebar/Leftsidebar.js";
import { FaHistory } from "react-icons/fa/index.esm.js";
import { MdOutlineWatchLater } from "react-icons/md/index.esm.js";
import { AiOutlineLike } from "react-icons/ai/index.esm.js";
import vid from "../../Component/Navbar/Video/vid.mp4";
import { useSelector } from "react-redux";
import WHLvideolist from "../../Component/WHL/WHLvideolist.js";
import "./Library.css";

const Library = () => {
  const currentuser=useSelector(state => state.currentuserreducer);

  const likedvideolist=useSelector((state)=>state.likedvideoreducer)
  const watchlatervideolist=useSelector((s)=>s.watchlaterreducer)
  const watchhistoryvideolist=useSelector(s=>s.historyreducer)

  return (
    <div className="container_Pages_App">
      <Leftsidebar />
      <div className="container2_Pages_App">
        <div className="container_libraryPage">
          <h1 className="title_container_LibraryPage">
            <b>
              <FaHistory />
            </b>
            <b>History</b>
          </h1>
          <div className="container_videoList_LibraryPage">
            <WHLvideolist
              page={"History"}
              currentuser={currentuser?.result?._id} videolist={watchhistoryvideolist}
            />
          </div>
        </div>

        <div className="container_libraryPage">
          <h1 className="title_container_LibraryPage">
            <b>
              <MdOutlineWatchLater />
            </b>
            <b>Watch Later</b>
          </h1>
          <div className="container_videoList_LibraryPage">
            <WHLvideolist
              page={"Watch later"}
              currentuser={currentuser?.result?._id} videolist={watchlatervideolist}
            />
          </div>
        </div>

        <div className="container_libraryPage">
          <h1 className="title_container_LibraryPage">
            <b>
              <AiOutlineLike />
            </b>
            <b>Liked Videosr</b>
          </h1>
          <div className="container_videoList_LibraryPage">
            <WHLvideolist
              page={"Liked Videos"}
              currentuser={currentuser?.result?._id} videolist={likedvideolist}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
