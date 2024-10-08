import { Box } from '@mui/material'
import { Header } from '../../components/headers/Header'
import { useState } from 'react';
import CommentCard from '../../components/cards/CommentCard';
import SearchBar from '../../components/searchBar/SearchBar';
import { useComments } from '../../hooks/useComments';

const Comments = () => {
  const { comments } = useComments();
  const [query, setQuery] = useState<string>("");

  const filterComments = comments.filter(comment => {
    return comment.name.toLowerCase().includes(query.toLowerCase());
  });

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
      <SearchBar 
        query={query} 
        setQuery={setQuery} 
        label='Search comments' 
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {
          filterComments.map(comment => (
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