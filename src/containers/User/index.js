import useFetch from '../../utilities/useFetch';
import PostBlock from '../../components/PostBlock';
import { useLocation } from "react-router-dom"

function User() {
    const { state } = useLocation();
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts', state?.userId);
    return (
        <div>
            <header>
                <h1>User #{state?.userId}</h1>
            </header>
            {posts.map(data => <PostBlock key={data.id} {...data} />)}
        </div>
    );
}

export default User;
