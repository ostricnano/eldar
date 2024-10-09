import { useState, useEffect } from "react";
import { getAllComments } from "../services/commentService";

interface CommentsProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const useComments = () => {
  const [comments, setComments] = useState<CommentsProps[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchComments = async () => {
    setLoading(true);
    try {
      const response = await getAllComments();
      if (response) {
        setComments(response);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return { comments, loading, fetchComments };
};