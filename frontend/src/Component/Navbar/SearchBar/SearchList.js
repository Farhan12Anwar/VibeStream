import React from "react";
import { FaSearch } from "react-icons/fa/index.esm.js";
import "./SearchList.css";
const SearchList = ({ Titlearray, setSearchquery }) => {
  return (
    <>
      <div className="Container_SearchList">
        {Titlearray.map((m) => {
          return (
            <p key={m} onClick={(e) => setSearchquery(m)} className="titleItem">
              <FaSearch />
              {m}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default SearchList;
