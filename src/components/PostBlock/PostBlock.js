import React from 'react'
import styles from './styles.module.css';
import { useNavigate, Link } from "react-router-dom";

const PostBlock = ({ title, body, userId }) => {
  const navigate = useNavigate();
  const routeToPost = () => navigate(`/post/${userId}`, { state: { title, body, userId }})

  return (
    <div onClick={routeToPost} className={styles.wrapper}>
      <Link to={`/user/${userId}`} state={{ userId }} className={styles.userLink}>
        <p>User #{userId}</p>
      </Link>
      <p className={styles.title}>{title}</p>
      <p>{body}</p>
    </div>
  );
}

export default PostBlock