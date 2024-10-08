import React, { useState } from "react";
import { BsMicFill } from "react-icons/bs/index.esm.js";
import { FaSearch } from "react-icons/fa/index.esm.js";
import SearchList from "./SearchList.js";
import { Link } from "react-router-dom";
import "./SearchBar.css";
import { useSelector } from "react-redux";

const SearchBar = () => {
  const [searchquery, setSearchquery] = useState("");
  const [searchlist, setSearchlist] = useState(false); 
  const Titlearray=useSelector(s=>s?.videoreducer)?.data?.filter(q=>q?.videotitle.toUpperCase().includes(searchquery?.toUpperCase())).map(m=>m?.videotitle)

  return (
    <>
      <div className="SearchBar_Container">
        <div className="SearchBar_Container2">
          <div className="search_div">
            <input
              type="text"
              className="iBox_SearchBar"
              placeholder="search"
              onChange={(e) => setSearchquery(e.target.value)}
              value={searchquery}
              onClick={() => setSearchlist(true)}
            />
              {searchquery && searchlist && (
                <SearchList
                  setSearchquery={setSearchquery}
                  Titlearray={Titlearray}
                />
              )}
            <Link to={`/search/${searchquery}`}>
              <FaSearch className="searchIcon_SearchBar" />
            </Link>
              <BsMicFill className="Mic_SearchBar" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
