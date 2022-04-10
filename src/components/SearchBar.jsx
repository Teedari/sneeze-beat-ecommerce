import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SearchBar = () => {
  return (
    <div className="py-2 pr-2 pl-4 bg-dark-400 flex rounded-full md:max-w-xl md:flex-auto">
      <input
        type="text"
        className="py-3 flex-auto bg-transparent input-focus-outline-none"
        placeholder="Search beats..."
      />
      <button className="px-4 rounded-full bg-primary text-black">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
