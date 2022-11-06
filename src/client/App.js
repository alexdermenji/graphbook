import React, { useState } from 'react';
import '../../assets/css/style.css';

const initialPosts = [
  {
    id: 2,
    text: 'Lorem ipsum',
    user: {
      avatar: '/uploads/avatar1.png',
      username: 'Test User',
    },
  },
  {
    id: 1,
    text: 'Lorem ipsum',
    user: {
      avatar: '/uploads/avatar2.png',
      username: 'Test User 2',
    },
  },
];

const App = () => {
  const [posts, setPosts] = useState(initialPosts);
  return (
    <div className="container">
      <div className="feed">
        {initialPosts.map((post, i) => (
          <div className="post" key={post.id}>
            <div className="header">
              <img src={post.user.avatar} alt="avatar" />
              <h2> {post.user.username}</h2>
            </div>
            <p className="content">{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
