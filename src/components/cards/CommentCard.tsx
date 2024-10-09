import { Card, CardContent, Typography, CardHeader, Avatar } from "@mui/material";
import { blue } from "@mui/material/colors";
import { CreateComments } from "../../types";



const CommentCard = ({ postId, id, name, email, body }: CreateComments) => {
  return (
    <Card sx={{ maxWidth: 280, margin: '1rem' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }}>
            {name.charAt(0)} CreateComments
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
