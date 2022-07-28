import React from "react";

export default function Post({ post }) {
  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p> Post ID{post.id}</p>
    </article>
  );
}
