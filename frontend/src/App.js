import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./Component/Navbar/Navbar.js";
import { BrowserRouter as Router } from "react-router-dom";
import Allroutes from "../src/AllRoutes.js";
import Createeditchannel from "./Pages/Channel/Createeditchannel.js";
import Drawersliderbar from "./Component/Navbar/Leftsidebar/DrawerSidebar.js";
import Videoupload from "./Pages/Videoupload/Videoupload.js";
import { useDispatch } from "react-redux";
import { fetchallchannel } from "./action/channeluser.js";
import { getallvideo } from "./action/video.js";
import { getallcomment } from "./action/comment.js";
import { getallhistory } from "./action/history.js";
import { getalllikedvideo } from "./action/likedvideo.js";  
import { getallwatchlater } from "./action/watchlater.js";

function App() {
  const [toggledrawersidebar, settoggledrawersidebar] = useState({
    display: "none",
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchallchannel());
    dispatch(getallvideo());
    dispatch(getallcomment());
    dispatch(getallhistory());
    dispatch(getalllikedvideo());
    dispatch(getallwatchlater());
  }, [dispatch]);

  const toggledrawer = () => {
    if (toggledrawersidebar.display === "none") {
      settoggledrawersidebar({
        display: "flex",
      });
    } else {
      settoggledrawersidebar({
        display: "none",
      });
    }
  };

  const [editCreateChannelbtn, seteditcreatechanelbtn] = useState(false);
  const [videoUploadPage, setvideoUploadPage] = useState(false);

  return (
    <Router>
      {videoUploadPage && (
        <Videoupload setvideoUploadPage={setvideoUploadPage} />
      )}
      {editCreateChannelbtn && (
        <Createeditchannel seteditcreatechanelbtn={seteditcreatechanelbtn} />
      )}
      <Navbar
        seteditcreatechanelbtn={seteditcreatechanelbtn}
        toggledrawer={toggledrawer}
      />
      <Drawersliderbar
        toggledraw={toggledrawer}
        toggledrawersidebar={toggledrawersidebar}
      />
      <Allroutes
        seteditcreatechanelbtn={seteditcreatechanelbtn}
        setvideoUploadPage={setvideoUploadPage}
      />
    </Router>
  );
}

export default App;
