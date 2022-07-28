import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar({ posts, setSearchResults }) {
  
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchOnChange = (e) => {
    
    if (!e.target.value) return setSearchResults(posts);

    const resultArray = posts.filter((post) => post.title.includes(e.target.value) || post.body.includes(e.target.value));

        setSearchResults(resultArray);
  };

  return (
    <header>
      <form className="search" onSubmit={handleSubmit}>
        <input
          className="search__input"
          type="text"
          id="search"
          onChange={handleSearchOnChange}
        />
        <button className="search__button">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </header>
  );
}


 

