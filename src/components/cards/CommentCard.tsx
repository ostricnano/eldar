import { Card, CardContent, Typography, CardHeader, Avatar } from "@mui/material";
import { blue } from "@mui/material/colors";

interface CommentCardProps {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const CommentCard = ({ postId, id, name, email, body }: CommentCardProps) => {
  return (
    <Card sx={{ maxWidth: 280, margin: '1rem' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }}>
            {name.charAt(0)} 
          </Avatar>
        }
        title={name}
        subheader={`Post ID: ${postId} | Comment ID: ${id}`}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
        <Typography variant="subtitle2" color="primary" sx={{ marginTop: 1 }}>
          {email}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CommentCard;
