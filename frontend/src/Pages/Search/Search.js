import React from "react";
import Leftsidebar from "../../Component/Navbar/Leftsidebar/Leftsidebar.js";
import Showvideogrid from "../../Component/Navbar/Showvideogrid/Showvideogrid.js";
import vid from "../../Component/Navbar/Video/vid.mp4";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Search = () => {
  const {searchquery}=useParams();
    const vids=useSelector(s=>s?.videoreducer)?.data?.filter(q=>q?.videotitle.toUpperCase().includes(searchquery?.toUpperCase()))

  return (
    <div className="container_Pages_App">
      <Leftsidebar />
      <div className="container2_Pages_App">
        <div className="navigation_Home"></div>
        <Showvideogrid vid={vids} />
      </div>
    </div>
  );
};

export default Search;
