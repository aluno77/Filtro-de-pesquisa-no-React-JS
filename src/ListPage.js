import React from "react";
import Post from "./Post";

export default function ListPage({ searchResults }) {
  
  const results = searchResults.map(post => <Post key={post.id} post={post} />);

  const content = results?.length ? results : <article><p>Not Matching Post</p></article>;

  return <main>{content}</main>;
}
 