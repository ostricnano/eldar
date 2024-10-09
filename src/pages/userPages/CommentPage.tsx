import { Box, Pagination, Typography } from "@mui/material";
import { useState } from "react";
import CommentCard from "../../components/cards/CommentCard";
import SearchBar from "../../components/searchBar/SearchBar";
import { useComments } from "../../hooks/useComments";
import { LoadingSpinner } from "../../icons/LoadingSpinner";
import {
  basePageStyles,
  cardContainerStyles,
  userHeaderStyles,
} from "../../assets/styles/pages";

const CommentPage = () => {
  const { comments, loading } = useComments();
  const [query, setQuery] = useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const commentsPerPage = 10;

  const filterComments = comments.filter((comment) => {
    return comment.name.toLowerCase().includes(query.toLowerCase());
  });

  const indexOfLastPost = currentPage * commentsPerPage;
  const indexOfFirstPost = indexOfLastPost - commentsPerPage;
  const currentComments = filterComments.slice(
    indexOfFirstPost,
    indexOfLastPost
  );

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <Box sx={basePageStyles}>
      <Box sx={userHeaderStyles}>
        <Typography variant="h5">Comments</Typography>
        <SearchBar query={query} setQuery={setQuery} label="Search comments" />
      </Box>
      {loading && (
        <p>
          Loading... <LoadingSpinner />
        </p>
      )}
      <Box sx={cardContainerStyles}>
        {currentComments.map((comment) => (
          <CommentCard
            key={comment.id}
            postId={comment.postId}
            id={comment.id}
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        ))}
      </Box>
      {filterComments.length > 0 && (
        <Pagination
          count={Math.ceil(filterComments.length / commentsPerPage)}
          page={currentPage}
          onChange={handleChangePage}
        />
      )}
    </Box>
  );
};

export default CommentPage;
