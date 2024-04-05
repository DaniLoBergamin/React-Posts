import React, { useState } from 'react';
import './styles.css';
import PostItem from './PostItem';
import AddPostForm from './AddPostForm';

// Declarar componente PostList
const PostList = () => {
  const [posts, setPosts] = useState([]);

  // Função para adicionar um novo post ao estado posts
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  // Função para remover um post com base no índice
  const removePost = (index) => {
    const updatedPosts = [...posts];
    updatedPosts.splice(index, 1);
    setPosts(updatedPosts);
  };

  // Retorno do componente JSX
  return (
    <div className="container">
      <AddPostForm addPost={addPost} />
      {posts.map((post, index) => (
        <PostItem key={index} post={post} index={index} removePost={removePost} />
      ))}
    </div>
  );
};

export default PostList;
