import { useLocation } from "react-router-dom";
import useFetch from '../../utilities/useFetch';
import PostBlock from "../../components/PostBlock";
import styles from './styles.module.css';

const PostInfo = () => {
  const { state } = useLocation();
  const comments =  useFetch(`https://jsonplaceholder.typicode.com/posts/${state?.userId}/comments`, state?.userId);
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