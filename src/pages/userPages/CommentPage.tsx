import { Box, Pagination, Typography } from "@mui/material";
import { useState } from "react";
import CommentCard from "../../components/cards/CommentCard";
import SearchBar from "../../components/searchBar/SearchBar";
import { useComments } from "../../hooks/useComments";
import { LoadingSpinner } from "../../icons/LoadingSpinner";

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "20px",
        }}
      >
        <Typography variant="h5">Comments</Typography>
        <SearchBar query={query} setQuery={setQuery} label="Search comments" />
      </Box>
      {loading && (
        <p>
          Loading... <LoadingSpinner />
        </p>
      )}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
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
