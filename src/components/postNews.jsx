import React from 'react';

const Post = ({ id, title, body, datecreated, deletePost }) => {
  return (
    <div className="post-card">
      <h2 className="post-title">{title}</h2>
      <p className="post-body">{body}</p>
      <p className="post-date">Date Created: {datecreated}</p>
      <button
        className="btn-delete"
        onClick={() => deletePost(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Post;