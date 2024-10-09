import { Box, Pagination, Typography } from "@mui/material";
import PostCard from "../../components/cards/postsCards";
import { usePosts } from "../../hooks/usePosts";
import { useState } from "react";
import { CreatePost } from "../../components/posts/CreatePost";
import { EditPost } from "../../components/posts/EditPost";
import SearchBar from "../../components/searchBar/SearchBar";
import { PostsProps } from "../../types";
import {
  basePageStyles,
  cardContainerStyles,
  userHeaderStyles,
} from "../../assets/styles/pages";

const PostPages = () => {
  const [openPostModal, setOpenPostModal] = useState(false);
  const [openPostEditModal, setOpenPostEditModal] = useState(false);

  const { posts, loading } = usePosts();
  const [postSelected, setPostSelected] = useState<PostsProps>();

  const [query, setQuery] = useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 10;

  const handleEditPost = (post: PostsProps) => {
    setPostSelected(post);
    setOpenPostEditModal(true);
  };

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(query.toLowerCase());
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <Box sx={basePageStyles}>
      <Box sx={userHeaderStyles}>
        <Typography variant="h5">Posts</Typography>
        <SearchBar query={query} setQuery={setQuery} label="Search posts" />
      </Box>
      <Box sx={cardContainerStyles}>
        {currentPosts.map((post) => (
          <PostCard key={post.id} post={post} onEdit={handleEditPost} />
        ))}
      </Box>
      {loading && <p>Loading posts...</p>}
      {filteredPosts.length > 0 && (
        <Pagination
          count={Math.ceil(filteredPosts.length / postsPerPage)}
          page={currentPage}
          onChange={handleChangePage}
        />
      )}
      <CreatePost
        openPostModal={openPostModal}
        setOpenPostModal={setOpenPostModal}
      />
      {postSelected && (
        <EditPost
          openPostEditModal={openPostEditModal}
          setOpenPostEditModal={setOpenPostEditModal}
          postSelected={postSelected}
        />
      )}
    </Box>
  );
};

export default PostPages;
