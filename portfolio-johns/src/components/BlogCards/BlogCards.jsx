import React, { useState, useEffect } from 'react';
import css from '../BlogCards/BlogCards.module.css';
import blog_data from '../../blog_data';

const BlogCards = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const formattedPosts = blog_data.slice(2).map(post => ({
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
    <section className='container'>
      <div className={css.blog_wrapper}>
     
        <ul className={css.posts_card}>
        <h2>Blog</h2>
          {posts.map(post => (
            
            <li key={post.id} className={css.post}>
                
              <h3>{post.title}</h3>
              <div className={css.meta}>
                <p>{post.formattedDate}</p>
                <span>|</span>
                <p className={css.tags}>{post.tags}</p>
              </div>
              <p>{post.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogCards;
