import { useState, useEffect } from 'react';
import PostBlock from '../../components/PostBlock/PostBlock';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const postData = await res.json();
      setPosts(postData); 
    };

    fetchPosts().catch(console.error);
  }, []);

  return (
    <>
        <header>
            <h1>Feed</h1>
        </header>
        <div>
            {posts.map(data => <PostBlock key={data.id} {...data} />)}
        </div>
    </>
  );
}

export default Feed;
