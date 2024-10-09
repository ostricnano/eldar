import { Card, CardContent, Typography, CardHeader, Button, CardActions } from "@mui/material";

interface PostCardProps {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  onEdit: (post: PostCardProps["post"]) => void;
}

const PostCard = ({ post, onEdit }: PostCardProps) => {
  const handleEditClick = () => {
    onEdit(post); 
  };
  return (
    <Card sx={{ maxWidth: 400, margin: "1rem auto" }}>
      <CardHeader
        title={post.title}
        subheader={`Post ID: ${post.id} | User ID: ${post.userId}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.body}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleEditClick}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
