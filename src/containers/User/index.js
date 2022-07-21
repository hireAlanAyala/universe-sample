    import { useState, useEffect } from 'react';
    import PostBlock from '../../components/PostBlock';
    import { useLocation } from "react-router-dom"

    function User() {
    const [posts, setPosts] = useState([]);
    const { state } = useLocation();

    useEffect(() => {
        const fetchPosts = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const postData = await res.json();
        const userPosts = postData.filter(({ userId }) => state?.userId === userId);
        setPosts(userPosts);
    };
    
        if (state?.userId) {
            fetchPosts().catch(console.error);
        } 
    }, [state?.userId]);

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
