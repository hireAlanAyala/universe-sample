import React from 'react'
import styles from './styles.module.css';
import { Link } from "react-router-dom";

const PostBlock = ({ title, body, userId }) => (
    <Link to={`/post/${userId}`} state={{ title, body, userId }}>
        <div className={styles.wrapper}>
          <Link to={`/user/${userId}`} state={{ userId }} className={styles.userLink}>
            <p>User #{userId}</p>
          </Link>
          <p className={styles.title}>{title}</p>
          <p>{body}</p>
        </div>
    </Link>
  );

export default PostBlock