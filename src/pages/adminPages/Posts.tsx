import { Box, Icon } from "@mui/material";
import { Header } from "../../components/headers/Header";
import PostCard from "../../components/cards/postsCards";
import { MoreIcon } from "../../icons/MoreIcon";
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

// interface PostFormProps {
//   title: string;
//   body: string;
//   userId: number;
// }

const Posts = () => {
  const [openPostModal, setOpenPostModal] = useState(false);
  const [openPostEditModal, setOpenPostEditModal] = useState(false);
  const [visiblePosts, setVisiblePosts] = useState(10);
  const { posts, loading } = usePosts();
  const [postSelected, setPostSelected] = useState<PostsProps>();
  const [query, setQuery] = useState<string>("");

  const handleEditPost = (post: PostsProps) => {
    setPostSelected(post);
    setOpenPostEditModal(true);
  };

  const filteredPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(query.toLowerCase());
  });

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
      <SearchBar 
        query={query} 
        setQuery={setQuery} 
        label="Search posts" 
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} onEdit={handleEditPost} />
        ))}
      </Box>
      {loading && <p>Loading posts...</p>}
      {visiblePosts < posts.length && (
        <Icon
          sx={{
            fontSize: 40,
            color: "primary.main",
            cursor: "pointer",
          }}
          onClick={() => setVisiblePosts((prev) => prev + 10)}
        >
          <MoreIcon />
        </Icon>
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
