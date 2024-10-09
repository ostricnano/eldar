import { Box, Pagination } from "@mui/material";
import { Header } from "../../components/headers/Header";
import PostCard from "../../components/cards/postsCards";
import { usePosts } from "../../hooks/usePosts";
import { useState } from "react";
import { CreatePost } from "../../components/posts/CreatePost";
import { EditPost } from "../../components/posts/EditPost";
import SearchBar from "../../components/searchBar/SearchBar";

export interface PostsProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts = () => {
  const [openPostModal, setOpenPostModal] = useState(false);
  const [openPostEditModal, setOpenPostEditModal] = useState(false);

  const { posts, loading } = usePosts();
  const [postSelected, setPostSelected] = useState<PostsProps>();

  const [query, setQuery] = useState<string>("");

  const [currentPage, setCurrentPage] = useState<number>(1); 
  const postsPerPage = 6; 

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


  const handleChangePage = (_event: React.ChangeEvent<unknown>, value: number) => {
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
      <Header
        title="Posts"
        createLabel="Create Post"
        setOpenModal={setOpenPostModal}
      />
      <SearchBar query={query} setQuery={setQuery} label="Search posts" />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
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

export default Posts;
