import { useEffect, useState } from 'react';
import axios from 'axios';

interface PostProps {
  id: number;
  title: string;
  body: string;
}

const UserPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Publicaciones</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
