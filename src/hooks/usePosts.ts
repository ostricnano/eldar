import { useEffect, useState } from "react";
import { getAllPost } from "../services/postService";

interface PostsProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const usePosts = () => {
  const [posts, setPosts] = useState<PostsProps[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await getAllPost();
      if(response){
        setPosts(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [])

  return { posts, loading, fetchPosts };
}