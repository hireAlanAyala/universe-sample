import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PostBlock from "../../components/PostBlock/PostBlock";
import styles from './styles.module.css';

const PostInfo = () => {
  const { state } = useLocation();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${state?.userId}/comments`);
      const commentData = await res.json();
      setComments(commentData); 
    };

    if (state?.userId) {
        fetchComments().catch(console.error)
    };  
  }, [state?.userId]);
  
  return (
    <>
        <PostBlock {...state} />
          {comments.map(({ body, email, id, name }) => (
              <div key={id} className={styles.commentWrapper}>
                  <p className={styles.title}>{name}</p>
                  <p>{body}</p>
                  <p className={styles.email}>{email}</p>
              </div>
          ))}
    </>
  )
}

export default PostInfo;