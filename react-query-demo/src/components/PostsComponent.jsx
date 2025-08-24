import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

function PostsComponent() {
  const { data, error, isError, isLoading, refetch } = useQuery(['posts'], fetchPosts);

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error loading posts!</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Posts</h1>
      <button onClick={() => refetch()}>Refresh Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id} style={{ marginBottom: '15px' }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;

