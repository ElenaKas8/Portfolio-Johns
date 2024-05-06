

import React, { useEffect, useState } from 'react';
import css from './ReceptPostsItem.module.css';
import blog_data from '../../blog_data';
import { Link } from 'react-router-dom'
import '../../../src/App.css';
const ReceptPostsItem = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const formattedPosts = blog_data.slice(0, 2).map(post => ({
      ...post,
      formattedDate: formatDate(post.date) 
    }));
    setPosts(formattedPosts);
  }, []);

 
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  return (
    <div className={css.container}>
      <div className={css.text_wrapper}>
        <p>Recept posts</p>
        <Link to = "/blog">View all</Link>
      </div>
      <ul className={css.posts_card}>
        {posts.map(post => (
          <li key={post.id} className={css.post}>
            <h3>{post.title}</h3>
            <div className={css.meta}>
              <p>{post.formattedDate}</p>
              <span>|</span>
              <p>{post.tags}</p>
            </div>
            <p>{post.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReceptPostsItem;
