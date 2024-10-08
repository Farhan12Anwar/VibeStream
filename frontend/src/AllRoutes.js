import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/Pages/Home/Home.js";
import Search from "./Pages/Search/Search.js";
import Channel from "./Pages/Channel/Channel.js";
import Videopage from "./Pages/Videopage/Videopage.js";
import Library from "./Pages/Library/Library.js";
import Likedvideo from "./Pages/Likedvideo/Likedvideo.js";
import Watchhistory from "./Pages/Watchhistory/Watchhistory.js";
import Watchlater from "./Pages/Watchlater/Watchlater.js";
import Yourvideo from "./Pages/Yourvideo/Yourvideo.js";

const AllRoutes = ({ seteditcreatechanelbtn, setvideoUploadPage }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:searchquery" element={<Search />} />
      <Route path="/videopage/:vid" element={<Videopage />} />
      <Route path="/Library" element={<Library />} />
      <Route path="/Likedvideo" element={<Likedvideo />} />
      <Route path="/Watchhistory" element={<Watchhistory />} />
      <Route path="/Watchlater" element={<Watchlater />} />
      <Route path="/Yourvideo" element={<Yourvideo />} />
      <Route
        path="/channel/:cid"
        element={
          <Channel
          seteditcreatechanelbtn={seteditcreatechanelbtn}
            setvideoUploadPage={setvideoUploadPage}
          />
        }
      />
    </Routes>
  );
};

export default AllRoutes;
