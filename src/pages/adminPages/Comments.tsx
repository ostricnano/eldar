import { Box } from '@mui/material'
import { Header } from '../../components/headers/Header'
import axios from 'axios';
import { useEffect, useState } from 'react';
import CommentCard from '../../components/cards/CommentCard';
import SearchBar from '../../components/searchBar/SearchBar';

interface CommentsProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const Comments = () => {
  const [comments, setComments] = useState<CommentsProps[]>([]);
  const [query, setQuery] = useState<string>("");
  const [filteredComments, setFilteredComments] = useState<CommentsProps[]>([]);
  const fetchComments = async () => { 
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
      setComments(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    const filtered = comments.filter(
      (comment) =>
        comment.email.toLowerCase().includes(query.toLowerCase()) ||
        comment.name.toLowerCase().includes(query.toLowerCase()) ||
        comment.body.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredComments(filtered);
  }, [query, comments]);
  
  useEffect(() => { 
    fetchComments();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Header title='Comments'  />
      <SearchBar query={query} setQuery={setQuery} />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {
          filteredComments.map(comment => (
            <CommentCard 
              key={comment.id}
              postId={comment.postId}
              id={comment.id}
              name={comment.name}
              email={comment.email}
              body={comment.body}
            />
          ))
        }
      </Box>
    </Box>
  )
}

export default Comments