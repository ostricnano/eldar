import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Grid,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import { UserProfileProps } from "../../types";

export interface UserProps {
    user : UserProfileProps;
}

const UserProfile = ({ user }: UserProps) => {
  return (
    <Card sx={{ maxWidth: 400, margin: "2rem auto", padding: "1rem" }}>
      <CardContent>
        <Grid container spacing={2}>
          {/* Avatar y nombre */}
          <Grid item xs={12} sm={3}>
            <Avatar
              sx={{ bgcolor: blue[500], width: 56, height: 56 }}
              aria-label="user-avatar"
            >
              {user.name.charAt(0)}
            </Avatar>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Typography variant="h5" component="div">
              {user.name} ({user.username})
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {user.email}
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ marginTop: "1rem" }}>
          {/* Dirección */}
          <Typography variant="h6">Address</Typography>
          <Typography variant="body2" color="text.secondary">
            {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Geo: {user.address.geo.lat}, {user.address.geo.lng}
          </Typography>

          {/* Teléfono y Sitio Web */}
          <Box sx={{ marginTop: "1rem" }}>
            <Typography variant="body2">
              <strong>Phone:</strong> {user.phone}
            </Typography>
            <Typography variant="body2">
              <strong>Website:</strong> {user.website}
            </Typography>
          </Box>

          {/* Empresa */}
          <Box sx={{ marginTop: "1rem" }}>
            <Typography variant="h6">Company</Typography>
            <Typography variant="body2">
              <strong>{user.company.name}</strong>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.company.catchPhrase}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {user.company.bs}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
