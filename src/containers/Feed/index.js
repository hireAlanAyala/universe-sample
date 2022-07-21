import PostBlock from '../../components/PostBlock';
import useFetch from '../../utilities/useFetch';

function Feed() {
  const posts = useFetch('https://jsonplaceholder.typicode.com/posts');
  return (
    <>
        <header>
            <h1>Feed</h1>
        </header>
        {posts.map(data => <PostBlock key={data.id} {...data} />)}
    </>
  );
}

export default Feed;
