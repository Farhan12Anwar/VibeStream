import React from "react";
import Describechannel from "./Describechannel.js";
import Leftsidebar from "../../Component/Navbar/Leftsidebar/Leftsidebar.js";
import Showvideogrid from "../../Component/Navbar/Showvideogrid/Showvideogrid.js";
import vid from "../../Component/Navbar/Video/vid.mp4";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Channel = ({ seteditcreatechanelbtn, setvideoUploadPage }) => {
const { cid } = useParams();
const vids=useSelector(state=>state.videoreducer)?.data?.filter(q=>q?.videochanel===cid).reverse()
  
  return (
    <div className="container_Pages_App">
      <Leftsidebar />
      <div className="container2_Pages_App">
        <Describechannel
          cid={cid}
          setvideoUploadPage={setvideoUploadPage}
          seteditcreatechanelbtn={seteditcreatechanelbtn}
        />
        <Showvideogrid vids={vids} />
      </div>
    </div>
  );
};

export default Channel;
