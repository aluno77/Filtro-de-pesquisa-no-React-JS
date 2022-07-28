import { getPosts } from "./api/axios";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import Listpage from "./ListPage";

function App() {
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  /*Refaturado */
  useEffect(() => {
    getPosts().then((json) => {
      setPosts(json);
      setSearchResults(json);
    });
  }, []);

  /* useEffect(() => {
    getPosts()
      .then((json) => {
        setPosts(json);
        return json;
      })
      .then((json) => {
        setSearchResults(json);
      });
  }, []); */

  return (
    <>
      <SearchBar posts={posts} setSearchResults={setSearchResults} />
      <Listpage searchResults={searchResults} />
    </>
  );
}

export default App;
