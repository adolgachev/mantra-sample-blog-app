import React from 'react';

const Post = ({post}) => (
  <div>
    {post.saving ? <p>Saving...</p> : null}
    <header>{post.title}</header>
    <p>
      {post.content}
    </p>
  </div>
);

export default Post;
